import {Route} from "react-router-dom";
import * as React from "react";
import {BlogPage, BlogsPage, HomePage, ProjectsPage, UtilsPage} from "../../pages";

export const RouteConf = {
    delay: 200,
    routes: {
        home: {
            index: {
                title: 'pages.home.t_title',
                route: '/',
                render: function (key, route, title) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<HomePage title={title}/>}
                    />
                }
            }
        },
        blog: {
            index: {
                title: 'pages.blogs.t_title',
                route: '/blog',
                render: function (key, route, title) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<BlogsPage title={title}/>}
                    />
                }
            },
            view: {
                title: 'pages.blog.t_title',
                route: '/blog/:id',
                render: function (key, route, title) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<BlogPage title={title}/>}
                    />
                }
            }
        },
        projects: {
            index: {
                title: 'pages.projects.t_title',
                route: '/projects',
                render: function (key, route, title) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<ProjectsPage title={title}/>}
                    />
                }
            },
            filter: {
                title: 'pages.projects.t_title',
                route: '/projects/:filter',
                render: function (key, route, title) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<ProjectsPage title={title}/>}
                    />
                }
            }
        },
        utils: {
            index: {
                title: 'pages.utils.t_title',
                route: '/utils',
                render: function (key, route, title) {
                    return <Route
                        key={key}
                        exact
                        path={route}
                        element={<UtilsPage title={title}/>}
                    />
                }
            }
        },
    },
}