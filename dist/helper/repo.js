"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var repo = /*#__PURE__*/function () {
  function repo() {
    _classCallCheck(this, repo);
  }
  return _createClass(repo, null, [{
    key: "toObject",
    value: function toObject(arr) {
      var rv = {};
      for (var i = 0; i < arr.length; ++i) if (arr[i] !== undefined) rv[i] = arr[i];
      return rv;
    }
  }, {
    key: "genPassword",
    value: function genPassword(chars, passwordLength) {
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      return password;
    }
  }, {
    key: "checkRole",
    value: function checkRole(data) {
      var role = "User";
      if (data == 0) {
        var _role = "SuperAdmin";
        return _role;
      }
      if (data == 1) {
        var _role2 = "Admin";
        return _role2;
      }
      return role;
      // 0 => SuperAdmin
      // 1 => Admin
      // 2 => User
      // 3 => User
    }
  }]);
}();
var _default = exports["default"] = repo;