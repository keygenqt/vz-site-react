import PropTypes from "prop-types";
import {CoreRequest} from "../../base/request/CoreRequest";

/**
 * Get article by id
 *
 * @return {Promise<*>}
 */
export default async function article(id) {
    return await CoreRequest.fetchGet(`/api/ps/articles/${id}`)
}

article.propTypes = {
    id: PropTypes.string,
};