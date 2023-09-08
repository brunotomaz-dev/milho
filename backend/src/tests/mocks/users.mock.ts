import IUser from "../../interface/IUser";
import IUserAuth from "../../interface/IUserAuth";

const user_1: IUser = {
id: "5f64a5963d9067605e90a9ae",
name: "John Doe",
email: "john@email.com",
password: "$2a$10$TZ3dINfleMGu8TAh.Lh7de5KpRHKAj6M/ic/cLSoIWzQiFbQU2F/.",
role: 'user',
}

const user_2: IUser = {
id: "5f64a5963d9067605e90a9af",
name: "Jane Doe",
email: "jane@email.com",
password: "$2a$10$TZ3dINfleMGu8TAh.Lh7de5KpRHKAj6M/ic/cLSoIWzQiFbQU2F/.",
role: "admin",
}

const newUser_1: IUser = {
  name: "John Doe",
  email: "john@email.com",
  password: "john1234",
  role: "user",
}

const loginUser_2: IUserAuth = {
  email: "jane@email.com",
  password: "john1234",
}

const token_2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVAZW1haWwuY29tIiwibmFtZSI6IkphbmUgRG9lIiwicm9sZSI6ImFkbWluIn0.4JLzSZI3AJJrToARfaCr60fEWKnBbSprJQPiyb7Nlm8' 

export default {
  user_1,
  user_2,
  newUser_1,
  loginUser_2,
  token_2,
};