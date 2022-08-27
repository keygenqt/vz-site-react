import {CoreRequest} from "../CoreRequest";

/**
 * Get list projects
 *
 * @return {Promise<*>}
 */
export default async function projects() {
    return await CoreRequest.fetchGet('/api/ps/projects')
}

projects.propTypes = {};