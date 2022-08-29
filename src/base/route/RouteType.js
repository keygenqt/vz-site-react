/**
 * Route validate
 */
export const RouteType = {

    string: 'string',
    number: 'number',
    integer: 'integer',
    float: 'float',
    bool: 'boolean',

    validate: (type, value) => {
        switch (type) {
            case RouteType.string:
                return RouteType.validateString(value)
            case RouteType.number:
                return RouteType.validateNumber(value)
            case RouteType.integer:
                return RouteType.validateInteger(value)
            case RouteType.float:
                return RouteType.validateFloat(value)
            case RouteType.bool:
                return RouteType.validateBool(value)
            default:
                return true
        }
    },

    validateString: (value) => {
        return true
    },

    validateNumber: (value) => {
        return RouteType.validateInteger(value) || RouteType.validateFloat(value)
    },

    validateInteger: (value) => {
        const regexPath = /\d+/ig;
        return value.replace(regexPath, '').length === 0
    },

    validateFloat: (value) => {
        const regexPath = /\d+.\d+/ig;
        return value.replace(regexPath, '').length === 0
    },

    validateBool: (value) => {
        return value === 'true' || value === 'false'
    }
}