'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = NoScript;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

function NoScript(props) {
    var staticMarkup = _reactDomServer2['default'].renderToStaticMarkup(props.children);
    return _react2['default'].createElement('noscript', { dangerouslySetInnerHTML: { __html: staticMarkup } });
}

module.exports = exports['default'];