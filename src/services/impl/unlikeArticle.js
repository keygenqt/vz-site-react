import PropTypes from "prop-types";
import {CoreRequest} from "../../base/request/CoreRequest";

/**
 * Get article by id
 *
 * @return {Promise<*>}
 */
export default async function unlikeArticle(id) {
    return await CoreRequest.fetchDelete(`/api/ps/articles/like/${id}`)
}

unlikeArticle.propTypes = {
    id: PropTypes.string,
};