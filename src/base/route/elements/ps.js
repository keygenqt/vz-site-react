import {Route} from "react-router-dom";
import * as React from "react";
import {RouteType} from "../RouteType";
import {ArticlePage, ArticlesPage, HomePage, ProjectsPage, UtilsPage} from "../../../pages";
import {BaseLayout} from "../../../layouts/BaseLayout";
import {PersonalSitePage} from "../../../pages/projects/ps/PersonalSitePage";

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
                    <BaseLayout isCenter={true}>
                        <ArticlePage/>
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
    projectPersonalSite: {
        path: '/projects/personal-site',
        render: function (key, path) {
            return <Route
                key={key}
                exact
                path={path}
                element={
                    <BaseLayout isCenter={true}>
                        <PersonalSitePage/>
                    </BaseLayout>
                }
            />
        }
    },
}