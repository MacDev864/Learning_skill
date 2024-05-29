import repo from "../../helper/repo";
import {
  registers,
  signin
} from "../../services/auth/auth.Service";

export const register = async (req, res) => {
  try {
    req.body.password = repo.genPassword("1234567890", 6);
    const register = await registers(req.body);
  let status = register.success ? 200 :404;
  return res.status(status).send(register);
  } catch (error) {
    return res.status(500).send({
      data: error,
      message:error.message,
      success: false,
      error: true,
    });
  }
};
export const login = async (req, res) => {
  try {
    const login = await signin(req.body);
  let status = login.success ? 200 :404;
  return res.status(status).send(login);
  } catch (error) {
    return res.status(500).send({
      data: error,
      message:error.message,
      success: false,
      error: true,
    });
  }
};
