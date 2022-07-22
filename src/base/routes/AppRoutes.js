import {useLocation} from "react-router-dom";
import {RoutePages} from "./RoutePages";
import {useEffect} from "react";

export const AppRoutes = {

    /**
     * Routes path app
     */
    route: {
        [RoutePages.home]: {
            index: '/'
        },
        [RoutePages.blog]: {
            index: '/blog',
            view: '/blog/:id'
        },
        [RoutePages.projects]: {
            index: '/projects',
            filter_and: '/projects/android',
            filter_ios: '/projects/ios',
            filter_web: '/projects/web',
            filter_pc: '/projects/pc',
        },
        [RoutePages.utils]: {
            index: '/utils'
        },
    },

    /**
     * Check location is root path
     *
     * @returns {boolean}
     */
    getLink: function getLink(route, ...arg) {

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
    },

    /**
     * Check location is root path
     *
     * @returns {boolean}
     */
    isHomePage: function useIsHome() {
        return useLocation().pathname === this.route.home.index;
    },

    /**
     * Check location is list page
     *
     * @returns {boolean}
     */
    isListPage: function useIsList() {
        const location = useLocation()
        return location.pathname === AppRoutes.route.blog.index
            || location.pathname === AppRoutes.route.projects.index
            || location.pathname === AppRoutes.route.utils.index
    },

    /**
     * Check is page
     *
     * @returns {boolean}
     */
    isPage: function useIsPage(page) {

        const location = useLocation()
        const routes = this.route[page]

        if (routes === undefined) {
            return false
        }

        const regexInt = /[\d+]/ig;
        const regexPath = /:\w+/ig;

        const keys = Object.keys(routes)

        for (let i = 0; i < keys.length; i++) {
            if (location.pathname.replaceAll(regexInt, "__id__") === routes[keys[i]].replaceAll(regexPath, "__id__")) {
                return true
            }
        }

        return false
    },

    /**
     * Check is page by route
     *
     * @returns {boolean}
     */
    isPageByRoute: function useIsPageByRoute(route) {
        const keys1 = Object.keys(this.route)
        for (let i = 0; i < keys1.length; i++) {
            const keys2 = Object.keys(this.route[keys1[i]])
            for (let k = 0; k < keys2.length; k++) {
                if (route === this.route[keys1[i]][keys2[k]]) {
                    return this.isPage(keys1[i])
                }
            }
        }
        return false
    },

    /**
     * Listen change location with delay for update prop
     *
     * @param change
     */
    onChangeRoute: function useOnChangeRoute(change) {
        let location = useLocation()
        useEffect(() => {
            setTimeout(function () {
                change.call()
            }, 10);
        }, [location])
    }
}

