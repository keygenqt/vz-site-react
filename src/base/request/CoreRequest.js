import PropTypes from "prop-types";
import {ErrorRequest} from "./ErrorRequest";

export const CoreRequest = {
    fetchGet: fetchGet,
    fetchPost: fetchPost,
    fetchDelete: fetchDelete,
    fetchPut: fetchPut,
}

/**
 * Methods query
 *
 * @type {{post: string, get: string, delete: string, put: string}}
 */
const methods = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
}

/**
 * Post query fetch
 *
 * @param path
 * @param body
 * @param contentType
 * @return {Promise<*>}
 */
async function fetchPost(
    path,
    body,
    contentType = 'application/json'
) {
    return await _query(
        methods.post,
        path,
        body,
        contentType
    );
}

/**
 * Post query fetch
 *
 * @param path
 * @param contentType
 * @return {Promise<*>}
 */
async function fetchDelete(
    path,
    contentType = 'application/json'
) {
    return await _query(
        methods.delete,
        path,
        null,
        contentType
    );
}

/**
 * Post query fetch
 *
 * @param path
 * @param body
 * @param contentType
 * @return {Promise<*>}
 */
async function fetchPut(
    path,
    body,
    contentType = 'application/json'
) {
    return await _query(
        methods.put,
        path,
        body,
        contentType
    );
}

/**
 * Post query fetch
 *
 * @param path
 * @param contentType
 * @return {Promise<*>}
 */
async function fetchGet(
    path,
    contentType = 'application/json'
) {
    return await _query(
        methods.get,
        path,
        null,
        contentType
    );
}

/**
 * Base query functions
 * @private
 */
async function _query(
    method,
    path,
    body,
    contentType
) {
    let params = {
        method: method
    }

    if (body) {
        params['body'] = contentType === 'application/json' ? JSON.stringify(body) : body
    }

    if (contentType) {
        params['headers'] = {
            'Content-Type': contentType
        }
    }

    return await fetch(path, params).then(async (response) => {
        let result
        try {
            result = await response.json()
        } catch (e) {
            result = response
        }
        if (response.ok) {
            return result
        } else {
            throw new ErrorRequest(result)
        }
    });
}

_query.propTypes = {
    method: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    body: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]).isRequired
};
