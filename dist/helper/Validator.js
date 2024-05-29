"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Validator = /*#__PURE__*/function () {
  function Validator(data) {
    _classCallCheck(this, Validator);
    this.data = data;
    this.errors = [];
  }
  return _createClass(Validator, [{
    key: "required",
    value: function required(field) {
      if (!this.data[field]) {
        this.errors.push("".concat(field, " is required."));
      }
      return this;
    }
  }, {
    key: "regex",
    value: function regex(field, pattern, errorMessage) {
      var regex = new RegExp(pattern);
      if (!regex.test(this.data[field])) {
        this.errors.push(errorMessage);
      }
      return this;
    }

    // Add more validation methods as needed
  }, {
    key: "passes",
    value: function passes() {
      return this.errors.length === 0;
    }
  }, {
    key: "fails",
    value: function fails() {
      return !this.passes();
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      return this.errors;
    }
  }], [{
    key: "make",
    value: function make(data) {
      return new Validator(data);
    }
  }]);
}();
module.exports = Validator;