export interface ILoginState {
  isButtonDisabled: boolean;
  email: string;
  password: string;
}

export interface ICreateUserState extends ILoginState {
  user: string;
  passwordConfirmation: boolean;
}