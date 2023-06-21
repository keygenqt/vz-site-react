import {CoreRequest} from "../../base/request/CoreRequest";

/**
 * Get list videos
 *
 * @return {Promise<*>}
 */
export default async function videos() {
    return await CoreRequest.fetchGet('/api/ps/videos')
}

videos.propTypes = {};