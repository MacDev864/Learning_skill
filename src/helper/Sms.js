const { API_Key, API_Secret } = process.env;
const fetch = require("node-fetch");

class Sms {
  static sendMessage(data) {
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

    const encodedParams = new URLSearchParams();

    encodedParams.set("msisdn", data.msisdn);
    encodedParams.set("message", data.message);
    encodedParams.set("sender", data.sender);
    encodedParams.set('force', data.force);

    const url = "https://api-v2.thaibulksms.com/sms";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
        authorization: 'Basic OXRzOEppbEVPLVE4VVpvWWhhaDlZRlVXbm5CMHFWOmlOdm8zcTNZRW9seTNHV0hPRWt1dVRNaDNvSGNJSw=='

      },
      body: encodedParams,
    };
    return fetch(url, options)
  .then(res => res.json())
  .then(json => {
    
    json.status = 200 
    return json})
  .catch(err => {
      err.status = 400
      return err
    });
  }
  static sendOTP(data) {
    const sdk = require("api")("@thaibulksms/v1.0#1of51jl4qvzac3");

    //
    // Authenticate using API key and secret
    data.key = API_Key;
    data.secret = API_Secret;

    // Send SMS and return the promise chain
    return sdk
      .postV2OtpRequest(data)
      .then(({ data }) => {
        // Log data and return it
        return data;
      })
      .catch((err) => {
        // Log error and throw it
        return err;
      });
  }
}
module.exports = Sms;
