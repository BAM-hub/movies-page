import { emailError, passwordError } from "../constants";

const validateUser = (user) => {
  const errors = new Set();
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

  let isFormValid = true;
  if (!emailPattern.test(user.email)) {
    isFormValid = false;
    errors.add(emailError);
  }
  if (!passwordPattern.test(user.password)) {
    isFormValid = false;
    errors.add(passwordError);
  }

  return { isFormValid, errors };
};

export default validateUser;
