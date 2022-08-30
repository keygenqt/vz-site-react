import PropTypes from "prop-types";
import {CoreRequest} from "../../base/request/CoreRequest";

/**
 * Get article by id
 *
 * @return {Promise<*>}
 */
export default async function likeProject(id) {
    return await CoreRequest.fetchPost(`/api/ps/projects/like/${id}`, {})
}

likeProject.propTypes = {
    id: PropTypes.string,
};