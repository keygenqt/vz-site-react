/**
 * Error response api
 */
export class ErrorRequest extends Error {

    constructor(error) {
        super(error.message);
        this.code = error.code;
        this.validate = error.validate;
        this.name = "ErrorRequest";
    }

    findError(field) {
        if (!this.validate) {
            return null
        }
        return this.validate.find(el => el['filed'] === field)?.errors.join(', ') ?? null
    }
}
