import {Article, IntegrationInstructions, LightbulbCircle} from "@mui/icons-material";
import * as React from "react";

/**
 * Data menu app top bar
 */
export const appBarData = (conf) => {
    return [
        {
            title: "menu.t_projects",
            icon: <IntegrationInstructions fontSize="small"/>,
            route: conf.routes.projects.index.route,
            routesActive: [
                conf.routes.projects.index,
                conf.routes.projects.filter,
            ],
        },
        {
            title: "menu.t_blog",
            icon: <Article fontSize="small"/>,
            route: conf.routes.blog.index.route,
            routesActive: [
                conf.routes.blog.index,
                conf.routes.blog.view,
            ],
        },
        {
            title: "menu.t_utils",
            icon: <LightbulbCircle fontSize="small"/>,
            route: conf.routes.utils.index.route,
            routesActive: [
                conf.routes.utils.index
            ],
        }
    ]
}