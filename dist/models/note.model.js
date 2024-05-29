"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteModel = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var NoteSchema = new _mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  /* 
  0 = "computer"
  1 =  "thing"
  2 =  "sports"
  3 =  "animal"
  4 =  "social"
  5 =  "politics"
  6 =  "etc"
     */
  tag: {
    type: Number,
    require: false,
    "enum": [0, 1, 2, 3, 4, 5, 6],
    "default": 0
  },
  /* 
  0 = กำลังทำ,
  1 = สำเร็จ
  2 = ส่งกลับ
  3 = ยกเลิก
   */
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
var NoteModel = exports.NoteModel = _mongoose["default"].model("Note", NoteSchema);