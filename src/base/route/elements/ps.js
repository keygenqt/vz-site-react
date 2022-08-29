import {Route} from "react-router-dom";
import * as React from "react";
import {RouteType} from "../RouteType";
import {ArticlePage, ArticlesPage, HomePage, ProjectsPage, UtilsPage} from "../../../pages";
import {BaseLayout} from "../../../layouts/BaseLayout";

export const routePS = {
    home: {
        path: '/',
        render: function (key, path) {
            return <Route
                key={key}
                exact
                path={path}
                element={
                    <BaseLayout>
                        <HomePage/>
                    </BaseLayout>
                }
            />
        }
    },
    articles: {
        path: '/blog',
        render: function (key, path) {
            return <Route
                key={key}
                exact
                path={path}
                element={
                    <BaseLayout>
                        <ArticlesPage/>
                    </BaseLayout>
                }
            />
        }
    },
    article: {
        path: '/blog/:id',
        match: {
            id: RouteType.integer,
        },
        render: function (key, path) {
            return <Route
                key={key}
                exact
                path={path}
                element={
                    <BaseLayout>
                        <ArticlePage/>
                    </BaseLayout>
                }
            />
        }
    },
    projects: {
        path: '/projects',
        render: function (key, path) {
            return <Route
                key={key}
                exact
                path={path}
                element={
                    <BaseLayout>
                        <ProjectsPage/>
                    </BaseLayout>
                }
            />
        }
    },
    projectsFilter: {
        path: '/projects/:filter',
        match: {
            id: RouteType.string,
        },
        render: function (key, path) {
            return <Route
                key={key}
                exact
                path={path}
                element={
                    <BaseLayout>
                        <ProjectsPage/>
                    </BaseLayout>
                }
            />
        }
    },
    utils: {
        path: '/utils',
        render: function (key, path) {
            return <Route
                key={key}
                exact
                path={path}
                element={
                    <BaseLayout>
                        <UtilsPage/>
                    </BaseLayout>
                }
            />
        }
    },
}