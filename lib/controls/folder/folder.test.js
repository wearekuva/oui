'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _folder = require('./folder');

var _folder2 = _interopRequireDefault(_folder);

var _slider = require('../slider');

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const noop = _ => _;

describe('Folder', () => {

    it('renders the correct label', () => {

        const label = 'A label';
        const component = (0, _enzyme.mount)(_react2.default.createElement(_folder2.default, { value: noop, label: label }));
        expect(component.find('label').text()).toBe(label);
    });

    it('is closed by default', () => {

        const label = 'A label';
        const component = (0, _enzyme.mount)(_react2.default.createElement(_folder2.default, { value: noop }));
        expect(component.state('open')).toBeFalsy();
    });

    it('does not render children when closed', () => {

        const component = (0, _enzyme.mount)(_react2.default.createElement(_folder2.default, { value: _ => _react2.default.createElement(_slider2.default, { value: 10 }) }));
        expect(component.find(_slider2.default).length).toBe(0);
    });

    it('does render children when open', () => {

        const component = (0, _enzyme.mount)(_react2.default.createElement(_folder2.default, { value: _ => _react2.default.createElement(_slider2.default, { value: 10 }) }));
        component.setState({ open: true });
        expect(component.find(_slider2.default).length).toBe(1);
    });

    it('does open when clicked on', () => {

        const component = (0, _enzyme.mount)(_react2.default.createElement(_folder2.default, { value: _ => _react2.default.createElement(_slider2.default, { value: 10 }), label: 'a label' }));
        component.find('label').simulate('click');
        expect(component.find(_slider2.default).length).toBe(1);
    });
});