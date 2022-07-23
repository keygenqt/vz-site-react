import * as React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import {Route, Routes} from "react-router-dom";
import PageError404 from "../../features/common/errors/PageError404";

export default class RouteCore {

    /**
     * @param location {H.LocationState}
     * @param navigate {NavigateFunction}
     * @param conf route object with params
     */
    constructor(location, navigate, conf) {
        this.location = location;
        this.navigate = navigate;
        this.conf = conf;
    }

    /**
     * Open page
     *
     * @param route {String}
     * @param arg {String}
     *
     * @returns {(function(): void)|*}
     */
    onClickToLocation(route, ...arg) {
        return () => {
            this.navigate(this.createLink(route, arg), {replace: true});
        }
    }

    /**
     * Open page with delay
     *
     * @param route {String}
     * @param arg {String}
     *
     * @returns {(function(): void)|*}
     */
    onClickToLocationDelay(route, ...arg) {
        return () => {
            const self = this
            setTimeout(function () {
                self.navigate(self.createLink(route, arg), {replace: true});
            }, this.conf.delay);
        }
    }

    /**
     * To back navigate
     *
     * @returns {(function(): void)|*}
     */
    onClickToBack() {
        return () => {
            this.navigate(-1)
        }
    }

    /**
     * To back navigate with delay
     *
     * @returns {(function(): void)|*}
     */
    onClickToBackDelay() {
        return () => {
            const nav = this.navigate
            setTimeout(function () {
                nav(-1)
            }, this.conf.delay);
        }
    }

    /**
     * Check location by routes
     *
     * @returns {boolean}
     */
    isPages(routes) {
        return this.isPage.apply(this, routes)
    }

    /**
     * Check location by route
     *
     * @returns {boolean}
     */
    isPage(...route) {

        const regexInt = /[\d+]/ig;
        const regexPath = /:\w+/ig;

        for (let i = 0; i < route.length; i++) {

            let result;
            let data = route[i]

            if (typeof data === 'string' || data instanceof String) {
                result = data
            } else {
                result = data.route
            }

            if (this.location.pathname.replaceAll(regexInt, "__id__") === result.replaceAll(regexPath, "__id__")) {
                return true
            }
        }
        return false
    }

    /**
     * Create link with arguments
     *
     * @returns {String}
     */
    createLink(route, ...arg) {

        if (!route.includes(":")) {
            return route
        }

        let result = route
        let linkArgs = []

        route.split("/").forEach((v) => {
            if (v.includes(":")) {
                linkArgs.push(v)
            }
        })

        linkArgs.forEach((linkArg, index) => {
            if (arg[index] !== undefined) {
                result = result.replace(linkArg, arg[index])
            } else {
                result = result.replace(linkArg, 'null')
            }
        })

        return result
    }

    /**
     * Render pages by conf
     *
     * @returns {JSX.Element}
     */
    render(onError = () => {
    }) {

        const pages = []

        Object.keys(this.conf.routes).forEach((group, groupIndex) => {
            Object.keys(this.conf.routes[group]).forEach((page, pageIndex) => {
                const {route, render} = this.conf.routes[group][page]
                if (render !== undefined) {
                    pages.push(render(groupIndex + pageIndex, route))
                }
            })
        });

        return (
            <React.Fragment>
                <ScrollToTop/>
                <Routes>
                    {pages}
                    <Route
                        path="*"
                        element={<PageError404 onError={onError}/>}
                    />
                </Routes>
            </React.Fragment>
        );
    }
}