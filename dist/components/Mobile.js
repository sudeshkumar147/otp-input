"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mystyleModule = _interopRequireDefault(require("./style/mystyle.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Mobile = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: props.class || _mystyleModule.default.main
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: props.labelClass || _mystyleModule.default.label
  }, props.label || 'Mobile:'), /*#__PURE__*/_react.default.createElement("input", {
    type: props.type || 'number',
    maxLength: props.max || 12,
    max: props.max || 12,
    className: props.class || _mystyleModule.default.input,
    placeholder: props.placeholder || 'Mobile: ',
    onChange: props.onChange || (d => console.log('Please pass onChange key from your component'))
  }));
};

var _default = Mobile;
exports.default = _default;