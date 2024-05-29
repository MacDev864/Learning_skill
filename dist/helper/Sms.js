"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _process$env = process.env,
  API_Key = _process$env.API_Key,
  API_Secret = _process$env.API_Secret;
var fetch = require("node-fetch");
var Sms = /*#__PURE__*/function () {
  function Sms() {
    _classCallCheck(this, Sms);
  }
  return _createClass(Sms, null, [{
    key: "sendMessage",
    value: function sendMessage(data) {
      /*
        const sdk = require('api')('@thaibulksms/v1.0#3f3jj5gxlo72a68r');
            // Authenticate using API key and secret
          sdk.auth(API_Key, API_Secret);
          
          // Send SMS and return the promise chain
          return sdk.postSms(data)
            .then(({ data }) => {
              // Log data and return it
              return data;
            })
            .catch(err => {
              // Log error and throw it
              return err;
            });
            */

      var encodedParams = new URLSearchParams();
      encodedParams.set("msisdn", data.msisdn);
      encodedParams.set("message", data.message);
      encodedParams.set("sender", data.sender);
      encodedParams.set('force', data.force);
      var url = "https://api-v2.thaibulksms.com/sms";
      var options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
          authorization: 'Basic OXRzOEppbEVPLVE4VVpvWWhhaDlZRlVXbm5CMHFWOmlOdm8zcTNZRW9seTNHV0hPRWt1dVRNaDNvSGNJSw=='
        },
        body: encodedParams
      };
      return fetch(url, options).then(function (res) {
        return res.json();
      }).then(function (json) {
        json.status = 200;
        return json;
      })["catch"](function (err) {
        err.status = 400;
        return err;
      });
    }
  }, {
    key: "sendOTP",
    value: function sendOTP(data) {
      var sdk = require("api")("@thaibulksms/v1.0#1of51jl4qvzac3");

      //
      // Authenticate using API key and secret
      data.key = API_Key;
      data.secret = API_Secret;

      // Send SMS and return the promise chain
      return sdk.postV2OtpRequest(data).then(function (_ref) {
        var data = _ref.data;
        // Log data and return it
        return data;
      })["catch"](function (err) {
        // Log error and throw it
        return err;
      });
    }
  }]);
}();
module.exports = Sms;