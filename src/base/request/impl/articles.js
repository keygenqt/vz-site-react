import {CoreRequest} from "../CoreRequest";

/**
 * Get list articles
 *
 * @return {Promise<*>}
 */
export default async function articles() {
    return await CoreRequest.fetchGet('/api/ps/articles')
}

articles.propTypes = {};