/** @format */

import Joi from "joi"

const loginSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "first name is required",
  }),

  password: Joi.string().alphanum().min(6).required().trim().messages({
    "string.empty": "password is required",
    "string.alphanum": "password must contain number or alphabet",
    "string.min": "password must have at least 6 characters",
  }),
})

const validateLogin = (input) => {
  const {error} = loginSchema.validate(input, {
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
