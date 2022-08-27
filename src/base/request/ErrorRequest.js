/**
 * Error response api
 */
export class ErrorRequest extends Error {
    constructor(error) {
        super(error.message);
        this.code = error.code;
        this.name = "ErrorRequest";
    }
}
