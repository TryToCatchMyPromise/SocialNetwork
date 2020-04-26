export const AUT_CHANGE_EMAIL_TEXT = 'AUT_CHANGE_EMAIL_TEXT';
export const AUT_CHANGE_PASSWORD_TEXT = 'AUT_CHANGE_PASSWORD_TEXT';

export const setEmailTextCreator = (email) => ({
type: AUT_CHANGE_EMAIL_TEXT,
payload: email,
});

export const setPasswordTextCreator = (password) => ({
type: AUT_CHANGE_PASSWORD_TEXT,
payload: password,
});