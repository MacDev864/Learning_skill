class jsonResponse {
    static success(response,data,message = "",message_ex = "",success = true,errors = null){
        let jsonResult =  {
            data:data,
            message:message,
            message_ex:message_ex,
            success:success,
            errors:errors
        };
        response.json(jsonResult);
    }
    static errors(response,data = null,message = "",message_ex = "",success = false,errors = null){
        let jsonResult =  {
            data:data,
            message:message,
            message_ex:message_ex,
            success:success,
            errors:errors
        };
        response.json(jsonResult);
        
    }
    
}
module.exports = jsonResponse