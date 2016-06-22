"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
    This is a simple debounce/throttle function that uses `requestAnimationFrame`
    for timing instead of setTimeout or equivalent, as such it's better suited
    for updates that involve a repaint, which tbh is probably most things
*/

exports.default = fn => {

    let rafID, t;

    /*
        Create a debounced wrapper
    */

    let debounced = a => {
        // console.log( performance.now() - t)
        fn(a);
        cancelAnimationFrame(rafID);
        rafID = null;
    };

    /*
        Return a function that only executes when rafID has fired
    */

    return e => {

        //t = performance.now()
        if (!rafID) {
            // fn( e )
            if (e && e.persist) e.persist();
            requestAnimationFrame(_ => {
                rafID = requestAnimationFrame(debounced.bind(undefined, e));
            });
        }
    };
};