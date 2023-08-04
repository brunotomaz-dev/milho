import IUser from "../../interface/IUser";
import IUserAuth from "../../interface/IUserAuth";

const user_1: IUser = {
id: "5f64a5963d9067605e90a9ae",
name: "John Doe",
email: "john@email.com",
password: "$2b$10$gmlyX9H55bQgZHQTer.wteVN6VvanW1cyX9chsUPRc2CMWnVu4FI.",
role: 'user',
}

const user_2: IUser = {
id: "5f64a5963d9067605e90a9af",
name: "Jane Doe",
email: "jane@email.com",
password: "$2b$10$gmlyX9H55bQgZHQTer.wteVN6VvanW1cyX9chsUPRc2CMWnVu4FI.",
role: "admin",
}

const newUser_1: IUser = {
  name: "John Doe",
  email: "john@email.com",
  password: "12345",
  role: "user",
}

const loginUser_2: IUserAuth = {
  email: "jane@email.com",
  password: "12345",
}

const token_2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVAZW1haWwuY29tIiwibmFtZSI6IkphbmUgRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg4Nzc3NTkyLCJleHAiOjE2OTExOTY3OTJ9.-pgxLZmiQIVR1sQHVzCxgOY0ljqlVoyg7P3i_xYJatI' 

export default {
  user_1,
  user_2,
  newUser_1,
  loginUser_2,
  token_2,
};