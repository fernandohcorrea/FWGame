export default class Exception
{
    constructor(message, code)
    {
        this.message = message;
        this.code = ( code >= 0 ) ? code : null;
    }
};

