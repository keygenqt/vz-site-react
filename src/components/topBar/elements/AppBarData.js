import {Article, IntegrationInstructions, LightbulbCircle} from "@mui/icons-material";
import * as React from "react";

/**
 * Data menu app top bar
 */
export const appBarData = (conf) => {
    return [
        {
            title: "components.topBar.t_projects",
            icon: <IntegrationInstructions fontSize="small"/>,
            route: conf.routes.ps.projects,
            routesActive: [
                conf.routes.ps.projects,
                conf.routes.ps.projectsFilter,
            ],
        },
        {
            title: "components.topBar.t_blog",
            icon: <Article fontSize="small"/>,
            route: conf.routes.ps.articles,
            routesActive: [
                conf.routes.ps.articles,
                conf.routes.ps.article,
            ],
        },
        {
            title: "components.topBar.t_utils",
            icon: <LightbulbCircle fontSize="small"/>,
            route: conf.routes.ps.utils,
            routesActive: [
                conf.routes.ps.utils
            ],
        }
    ]
}