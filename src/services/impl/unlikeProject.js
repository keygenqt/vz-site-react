import PropTypes from "prop-types";
import {CoreRequest} from "../../base/request/CoreRequest";

/**
 * Get article by id
 *
 * @return {Promise<*>}
 */
export default async function unlikeProject(id) {
    return await CoreRequest.fetchDelete(`/api/ps/projects/like/${id}`)
}

unlikeProject.propTypes = {
    id: PropTypes.string,
};