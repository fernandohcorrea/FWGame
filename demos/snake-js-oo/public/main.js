import Exception from "./fwg/exceptions/exception.js";


class Main
{
    constructor()
    {
        //throw new Exception('asd', 123);
    }

}

try {
    new Main;
} catch (error) {
    console.error(error);
}
