/**
 * Common methods for all modules
 */
import articles from "./impl/articles";
import article from "./impl/article";
import projects from "./impl/projects";

export const MethodsRequest = {
    //////////////////////
    // Articles
    // get list
    articles: articles,
    // get by id
    article: article,
    //////////////////////
    // Projects
    // get list
    projects: projects,
}