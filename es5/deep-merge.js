'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _warn = require('./warn');

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isWritable = (obj, prop) => {
    let propDesc = Object.getOwnPropertyDescriptor(obj, prop);
    return propDesc ? propDesc.writable === true : true;
}; /*
       This module deeply mutatively merges properties of change `b` into `a`
   */


let deepmerge = (a, b) => {

    let isFrozen = Object.isFrozen(a) || !Object.isExtensible(a);
    (0, _warn2.default)(isFrozen, 'The merge target is frozen and cannot be mutated');
    if (isFrozen) return a;

    let breakOn = Array.isArray(a) && b.length;
    let index = 0;

    for (var prop in b) {
        if (typeof a[prop] === 'object') {

            let isFrozen = Object.isFrozen(a[prop]);
            (0, _warn2.default)(isFrozen, 'The property `' + prop + '` is frozen and cannot be mutated.');
            if (!isFrozen) deepmerge(a[prop], b[prop]);
        } else {

            let writable = isWritable(a, prop);
            (0, _warn2.default)(!writable, 'The property `' + prop + '` is not writable and cannot be mutated.');
            if (writable) a[prop] = b[prop];
        }

        if (breakOn === ++index) a.splice(breakOn);
    }
    return a;
};

exports.default = deepmerge;