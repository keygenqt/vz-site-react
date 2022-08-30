import PropTypes from "prop-types";
import {CoreRequest} from "../../base/request/CoreRequest";

/**
 * Get article by id
 *
 * @return {Promise<*>}
 */
export default async function likeArticle(id) {
    return await CoreRequest.fetchPost(`/api/ps/articles/like/${id}`, {})
}

likeArticle.propTypes = {
    id: PropTypes.string,
};