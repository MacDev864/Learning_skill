"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var jsonResponse = /*#__PURE__*/function () {
  function jsonResponse() {
    _classCallCheck(this, jsonResponse);
  }
  return _createClass(jsonResponse, null, [{
    key: "success",
    value: function success(response, data) {
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var message_ex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var _success = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var errors = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var jsonResult = {
        data: data,
        message: message,
        message_ex: message_ex,
        success: _success,
        errors: errors
      };
      response.json(jsonResult);
    }
  }, {
    key: "errors",
    value: function errors(response) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var message_ex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var success = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var _errors = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var jsonResult = {
        data: data,
        message: message,
        message_ex: message_ex,
        success: success,
        errors: _errors
      };
      response.json(jsonResult);
    }
  }]);
}();
module.exports = jsonResponse;