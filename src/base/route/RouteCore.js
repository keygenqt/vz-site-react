import * as React from "react";
import {ScrollToTop} from "../../components";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "../../pages";

export default class RouteCore {

    /**
     * @param location {Location}
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
     * @param arg
     *
     * @returns {(function(): void)|*}
     */
    toLocation(route, ...arg) {
        if (this.isPage(route)) {
            this.navigate(0)
        } else {
            this.navigate(this.createLink(route, arg));
        }
    }

    /**
     * Open page with delay
     *
     * @param route {String}
     * @param arg
     *
     * @returns {(function(): void)|*}
     */
    toLocationDelay(route, ...arg) {
        const self = this
        setTimeout(function () {
            if (self.isPage(route)) {
                self.navigate(0)
            } else {
                self.navigate(self.createLink(route, arg));
            }
        }, this.conf.delay);
    }

    /**
     * To back navigate
     *
     * @returns {(function(): void)|*}
     */
    toBack() {
        this.navigate(-1)
    }

    /**
     * To back navigate with delay
     *
     * @returns {(function(): void)|*}
     */
    toBackDelay() {
        const nav = this.navigate
        setTimeout(function () {
            nav(-1)
        }, this.conf.delay);
    }

    /**
     * Open page
     *
     * @param route {String}
     * @param arg
     *
     * @returns {(function(): void)|*}
     */
    onClickToLocation(route, ...arg) {
        return () => {
            this.toLocation(route, arg)
        }
    }

    /**
     * Open page with delay
     *
     * @param route {String}
     * @param arg
     *
     * @returns {(function(): void)|*}
     */
    onClickToLocationDelay(route, ...arg) {
        return () => {
            this.toLocationDelay(route, arg)
        }
    }

    /**
     * To back navigate
     *
     * @returns {(function(): void)|*}
     */
    onClickToBack() {
        return () => {
            this.toBack()
        }
    }

    /**
     * To back navigate with delay
     *
     * @returns {(function(): void)|*}
     */
    onClickToBackDelay() {
        return () => {
            this.toBackDelay()
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

        const regexPath = /:\w+/ig;
        const regexLoc = /([\d+])|(\w+-\w+)/ig;

        for (let i = 0; i < route.length; i++) {

            let result;
            let data = route[i]

            if (typeof data === 'string' || data instanceof String) {
                result = data
            } else {
                result = data.route
            }

            if (this.location.pathname.replaceAll(regexLoc, "__id__") === result.replaceAll(regexPath, "__id__")) {
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
     * @param onError callback if open page error
     *
     * @returns {JSX.Element}
     */
    render(onError) {

        const pages = []

        Object.keys(this.conf.routes).forEach((group, groupIndex) => {
            Object.keys(this.conf.routes[group]).forEach((page, pageIndex) => {
                const {route, title, render} = this.conf.routes[group][page]
                if (render !== undefined) {
                    pages.push(render(groupIndex + pageIndex, route, title))
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
                        element={<ErrorPage onError={onError}/>}
                    />
                </Routes>
            </React.Fragment>
        );
    }

    /**
     * Open outer url
     *
     * @param url
     */
    openUrl(url) {
        window.location.href = url
    }

    /**
     * Open outer url
     *
     * @param url
     */
    openUrlNewTab(url) {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    /**
     * Scroll to top page
     */
    scrollToTop() {
        window.scrollTo(0, 0);
    }

    /**
     * Scroll to top page with smooth
     */
    scrollToTopSmooth() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}