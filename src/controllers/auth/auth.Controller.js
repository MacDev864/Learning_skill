import repo from "../../helper/repo";
import { logoutService, registers, signin } from "../../services/auth/auth.Service";

export const register = async (req, res) => {
  try {
    req.body.password = repo.genPassword("1234567890", 6);
    const register = await registers(req.body);

    let status = register.success ? 200 : 404;
    return res.status(status).send(register);
  } catch (error) {
    return res.status(500).send({
      data: error,
      message: error.message,
      success: false,
      error: true,
    });
  }
};
export const login = async (req, res) => {
  try {
    const login = await signin(req.body, res);
    let status = login.success ? 200 : 404;

    return res.status(status).send(login);
  } catch (error) {
    return res.status(500).send({
      data: error,
      message: error.message,
      success: false,
      error: true,
    });
  }
};
export const logout = async (req, res) => {
  try {
    const logout = await logoutService(req.body);
    let status = logout.success ? 200 : 404;
    if (logout.success) {
      
    // Clear cookies
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    }
    return res.status(status).send(logout);
  } catch (error) {
    return res.status(500).send({
      data: error,
      message: error.message,
      success: false,
      error: true,
    });
  }
};