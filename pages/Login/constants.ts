export const PASSWORD_MIN_LENGTH = 6;

export const REGEX = {
    email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};

export const ERROR_MESSAGES = {
    REQUIRED: "This field is required",
    EMAIL_INVALID: "Please enter a valid email",
};

export const MOCK_EMAIL = "interviewer@gmail.com";
export const MOCK_PASSWORD = "ILikeThisApplicant";