import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secret = "test";
export const signin = async (req, res) => {
  const { emailid, password } = req.body;
  try {
    const user = await User.findOne({ emailid });
    if (!user) return res.status(404).json({ message: "user doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      const token = jwt.sign({ email: user.email, id: user._id }, secret, {
        expiresIn: "1h",
      });
      return res.status(200).json({ user, token });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
};
export const signup = async (req, res) => {
  const { firstname, lastname, emailid, password } = req.body;
  try {
    const oldUser = await User.findOne({ emailid });
    if (oldUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      firstname,
      lastname,
      emailid,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    res.status(201).json({ result, token});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};