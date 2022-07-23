import {Route} from "react-router-dom";
import PageIndex from "../../features/common/index/PageIndex";
import * as React from "react";
import PageBlogView from "../../features/blog/view/PageBlogView";
import PageBlogList from "../../features/blog/list/PageBlogList";
import PageProjectsList from "../../features/projects/list/PageProjectsList";
import PageUtilsList from "../../features/utils/list/PageUtilsList";

export const RouteConf = {
    delay: 200,
    routes: {
        home: {
            index: {
                route: '/',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageIndex/>}
                    />
                }
            }
        },
        blog: {
            index: {
                route: '/blog',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageBlogList/>}
                    />
                }
            },
            view: {
                route: '/blog/:id',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageBlogView/>}
                    />
                }
            }
        },
        projects: {
            index: {
                route: '/projects',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageProjectsList filter={['android', 'ios', 'web', 'pc']}/>}
                    />
                }
            },
            filter_and: {
                route: '/projects/android',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageProjectsList filter={['android']}/>}
                    />
                }
            },
            filter_ios: {
                route: '/projects/ios',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageProjectsList filter={['ios']}/>}
                    />
                }
            },
            filter_web: {
                route: '/projects/web',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageProjectsList filter={['web']}/>}
                    />
                }
            },
            filter_pc: {
                route: '/projects/pc',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageProjectsList filter={['pc']}/>}
                    />
                }
            },
        },
        utils: {
            index: {
                route: '/utils',
                render: function (key, route) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<PageUtilsList/>}
                    />
                }
            }
        },
    },
}