export default ( condition, message ) => {

    /*
        TODO

        Probably need to to something more intelligent here than simply logging an
        error. Something like only raising if a `production` variable is set,
        or not throwing more than needed. Keep the console nice and clean :)
    */

    if( condition ) {
        if (typeof console !== 'undefined') {
            console.warn( message );
        }
    }
}
