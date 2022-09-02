/**
 * Common methods for all modules
 */
import articles from "./impl/articles";
import article from "./impl/article";
import projects from "./impl/projects";
import likeArticle from "./impl/likeArticle";
import unlikeArticle from "./impl/unlikeArticle";
import likeProject from "./impl/likeProject";
import unlikeProject from "./impl/unlikeProject";
import connect from "./impl/connect";

export const MethodsRequest = {
    //////////////////////
    // Articles
    // get list
    articles: articles,
    // get by id
    article: article,
    // likes
    likeArticle: likeArticle,
    unlikeArticle: unlikeArticle,
    //////////////////////
    // Projects
    // get list
    projects: projects,
    // likes
    likeProject: likeProject,
    unlikeProject: unlikeProject,
    //////////////////////
    // Projects
    // send connect
    connect: connect,
}