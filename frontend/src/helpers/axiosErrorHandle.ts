import { AxiosError } from "axios";

enum ErrorMessage {
  "Invalid password" = "Senha incorreta",
  "User already exists" = "ERRO: Usuário já existe",
  "User not found" = "Usuário não encontrado",
}


export const axiosErrorMessage = (error: AxiosError) => {
  const obj = error.response?.data as object;
  const message = Object.values(obj)[1] as string;

  return ErrorMessage[message as keyof typeof ErrorMessage] || message;
}