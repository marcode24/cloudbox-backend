const regEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
// eslint-disable-next-line max-len
const regPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){5,40}$/;

const validateEmail = (value) => regEmail.test(value);

const validatePassword = (value) => regPassword.test(value);

export { validateEmail, validatePassword };
