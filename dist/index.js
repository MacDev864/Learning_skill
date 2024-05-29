"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));
var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _morgan = _interopRequireDefault(require("morgan"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/api/v1", _routes["default"]);
app.listen("".concat(process.env.PORT), "".concat(process.env.HOST), function () {
  console.log("Server running in host " + "".concat(process.env.HOST));
  console.log("Server running in port " + "".concat(process.env.PORT));
  _mongoose["default"].connect("".concat(process.env.DBHOST));
});