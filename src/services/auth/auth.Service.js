import mongoose, { Types } from "mongoose";
import UserModel from "../../models/users.model";
import { sign, verify } from "jsonwebtoken";

import bcrypt from "bcrypt";
import Sms from "../../helper/Sms";
import repo from "../../helper/repo";
import TokenModel from "../../models/token.model";

export const registers = async (userdata) => {
  let { username, password } = userdata;
  /*------------isNameExit---------------- */
  const isNameExit = await UserModel.findOne({ username: username });

  if (isNameExit) {
    return {
      data: isNameExit,
      message: `Username address ${username} is already exists, please pick a different one.`,
      success: false,
      error: true,
    };
  }
  /*------------message---------------- */

  let message = "รหัสผ่านของคุณคือ : ";
  userdata.password = await bcrypt.hash(password, 10); // 10 is the salt rounds

  try {
    let data_set = {
      msisdn: userdata.username,
      message: message + password,
      sender: "MacSYSTEM	",
      force: "corporate",
    };
    const sendMessage = await Sms.sendMessage(data_set);
    // Handle sendMessage
    if (sendMessage.status !== 201 && sendMessage.status !== 200) {
      let rs = {
        data: {
          code: sendMessage.code,
        },
        status: 401,
        message: sendMessage.error.description,
        message_ex: sendMessage.error.name,
        success: false,
      };
      return rs;
    }
    /* ---------------------------- */

    const user = new UserModel(userdata);
    user.save();
    /* ---------------------------- */

    return {
      data: user,
      message: "create succesfully",
      success: true,
      error: false,
    };
  } catch (error) {
    return {
      data: {},
      message: "",
      success: false,
      error: true,
    };
  }
};
export const signin = async (data,res) => {
  try {
    let { username, password } = data;
    /*------------isNameExit---------------- */
    const user = await UserModel.findOne({ username: username });
    if (!user) {
      return {
        data: user,
        message: `Username address ${username} is not founds.`,
        success: false,
        error: true,
      };
    }

    let isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return {
        data: isPassword,
        message: ``,
        success: false,
        error: true,
      };
    }
    let token =await TokenModel.findOne({ userId: user._id }).select("accessToken");
    if (!token) {
      token =  new TokenModel({ userId: user._id });
      token = await token.save();
    }
    
    const generatedAccessToken = sign(
      { userId: user._id.toString(), username: user.username, role: user.role },
      "HELLO WORLD",
      {
        expiresIn: "1h",
        notBefore: "0", // Cannot use before now, can be configured to be deferred
        algorithm: "HS256",
        audience: "HELLO WORLD",
        issuer: "HELLO WORLD",
      }
    );
    const generatedRefreshToken = sign(
      { userId: user._id.toString(), username: user.username, role: user.role },
      "HELLO WORLD",
      {
        expiresIn: "1h",
        notBefore: "0", // Cannot use before now, can be configured to be deferred
        algorithm: "HS256",
        audience: "HELLO WORLD",
        issuer: "HELLO WORLD",
      }
    );
    token.refreshToken = generatedRefreshToken;
    token.accessToken = generatedAccessToken;
    token = await token.save();
    // Set cookies
    res.cookie("accessToken", token.accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // one days
      secure: process.env.NODE_ENV === "production",
    });

    res.cookie("refreshToken", token.refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: process.env.NODE_ENV === "production",
    });
    /*
    
    */
    return {
      data: {
        user_data: user,
        token_data:token
      },
      message: "login succesfully",
      success: true,
      error: false,
    };
  } catch (error) {
    throw error
  }
};
export const logoutService = async (data) => {
  const { refreshToken } =data;

  try {
    const token = await TokenModel.findOne({
      refreshToken,
    });

    if (!token) {
      return {
        data: {
          token_data:token
        },
        message: "logout failed",
        success: false,
        error: true,
      };
    }
   
   let  userId = verify(refreshToken,"HELLO WORLD","HELLO WORLD").userId
    if (!userId) {
      return {
        data: {},
        message: "logout failed",
        success: false,
        error: true,
      };
    }

    // Clear Token
    await TokenModel.deleteOne({
      refreshToken,
    });

    return {
      data: {
        
      },
      message: "Successfully logged out 😏 🍀",
      success: true,
      error: false,
    };
    // 
  } catch (error) {
    // return next(InternalServerError);
  }
};
