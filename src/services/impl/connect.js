import {CoreRequest} from "../../base/request/CoreRequest";
import PropTypes from "prop-types";

/**
 * Send request connect
 *
 * @return {Promise<*>}
 */
export default async function connect(data) {
    return await CoreRequest.fetchPost(`/api/ps/connects`, data)
}

connect.propTypes = {
    data: PropTypes.object,
};