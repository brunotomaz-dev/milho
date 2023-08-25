const validateUser = (user: string): boolean => {
  const regex = /^[A-Z][A-Za-z0-9]*\s[A-Z][A-Za-z0-9]*$/i;
  return regex.test(user);
}

const validateEmail = (email: string): boolean => {
  const regex = /\b[\w.-_]+@[\w.-_]+\.\w{2,4}\b/;
  return regex.test(email);
}

const validatePassword = (password: string): boolean => {
  const regex = /^[a-zA-Z0-9]{8,}$/;
  return regex.test(password);
}

const validateAll = (user: string, email: string, password: string): boolean => {
  const isValidUser = validateUser(user);
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);
  return isValidUser && isValidEmail && isValidPassword;
}

export default { validateEmail, validatePassword, validateUser, validateAll };

