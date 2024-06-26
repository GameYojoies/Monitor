/** @format */

import Joi from "joi"

const loginSchema = (t) =>
  Joi.object({
    name: Joi.string()
      .trim()
      .required()
      .messages({
        "string.empty": t("user name or email is required"),
      }),

    password: Joi.string().alphanum().min(6).required().trim().messages({
      "string.empty": t("password is required"),
      "string.alphanum": t("password must contain number or alphabet"),
      "string.min": t("password must have at least 6 characters"),
    }),
  })

const validateLogin = (input, t) => {
  const {error} = loginSchema(t).validate(input, {
    abortEarly: false,
  })

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message
      return acc
    }, {})
    return result
  }
}

export default validateLogin
