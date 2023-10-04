class ErrorHandler extends Error {
    statusCode:Number;

    constructor(messages:any, statusCode:Number){
        super(messages);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor)
    }
}

export default ErrorHandler