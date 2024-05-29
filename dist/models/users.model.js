"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var UserSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    minlength: [6, "Username must be more than 6 characters"],
    maxlength: [30, "Username must be more than 30 characters"]
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [6, "Password must be more than 6 characters"],
    trim: true
  },
  /*
  0 => SuperAdmin
  1 => Admin
  2 => User
  3 => User
    
  
  
  */
  role: {
    type: Number,
    "enum": [0, 1, 2, 3],
    "default": 0
  },
  status: {
    type: Number,
    "enum": [0, 1, 2, 3],
    "default": 0
  },
  isDeleted: {
    type: Boolean,
    "default": false
  }
});
var UserModel = _mongoose["default"].model("Users", UserSchema);
var _default = exports["default"] = UserModel;