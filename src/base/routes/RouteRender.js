import * as React from "react";

import {Route, Routes} from "react-router-dom";

import {AppRoutes} from "./AppRoutes";

import PageBlogList from "../../features/blog/list/PageBlogList";
import PageProjectsList from "../../features/projects/list/PageProjectsList";
import PageUtilsList from "../../features/utils/list/PageUtilsList";
import PageIndex from "../../features/common/index/PageIndex";
import PageError404 from "../../features/common/errors/PageError404";
import RouteScrollToTop from "./RouteScrollToTop";
import {RoutePages} from "./RoutePages";
import PageBlogView from "../../features/blog/view/PageBlogView";

export const RouteRender = {

    pages: {
        [RoutePages.home] : {
            routes: [
                AppRoutes.route.home.index
            ],
            render: function (key, route) {
                return <Route
                    key={key}
                    exact
                    path={route}
                    element={<PageIndex/>}
                />
            }
        },
        [RoutePages.blog]: {
            routes: [
                AppRoutes.route.blog.index,
                AppRoutes.route.blog.view,
            ],
            render: function (key, route) {
                let page;
                switch (route) {
                    case AppRoutes.route.blog.view:
                        page = <Route
                            key={key}
                            exact
                            path={route}
                            element={<PageBlogView/>}
                        />
                        break;
                    default:
                        page = <Route
                            key={key}
                            exact
                            path={route}
                            element={<PageBlogList/>}
                        />
                }
                return page
            }
        },
        [RoutePages.projects]: {
            routes: [
                AppRoutes.route.projects.index,
                AppRoutes.route.projects.filter_and,
                AppRoutes.route.projects.filter_ios,
                AppRoutes.route.projects.filter_web,
                AppRoutes.route.projects.filter_pc,
            ],
            render: function (key, route) {
                let filter;
                switch (route) {
                    case AppRoutes.route.projects.filter_and:
                        filter = ['android']
                        break;
                    case AppRoutes.route.projects.filter_ios:
                        filter = ['ios']
                        break;
                    case AppRoutes.route.projects.filter_web:
                        filter = ['web']
                        break;
                    case AppRoutes.route.projects.filter_pc:
                        filter = ['pc']
                        break;
                    default:
                        filter = ['android', 'ios', 'web', 'pc']
                }
                return <Route
                    key={key}
                    exact
                    path={route}
                    element={<PageProjectsList filter={filter}/>}
                />
            }
        },
        [RoutePages.utils]: {
            routes: [
                AppRoutes.route.utils.index
            ],
            render: function (key, route) {
                return <Route
                    key={key}
                    exact
                    path={route}
                    element={<PageUtilsList/>}
                />
            }
        },
    },

    /**
     * Render pages
     *
     * @returns {JSX.Element}
     */
    render: function (onError) {

        const items = []

        Object.keys(this.pages).forEach((key, index) => {
            const page = this.pages[key]
            page.routes.forEach((route => {
                items.push(page.render("route-" + index, route))
            }))
        });

        return (
            <React.Fragment>
                <RouteScrollToTop />
                <Routes>
                    {items}
                    <Route
                        path="*"
                        element={<PageError404 onError={onError} />}
                    />
                </Routes>
            </React.Fragment>
        );
    }
}


