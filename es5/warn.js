'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = (condition, message) => {

    if (condition) {
        if (typeof console !== 'undefined') {
            console.warn('Warning: ' + message);
        }
    }
};