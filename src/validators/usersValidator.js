import Joi from "joi";

export const usersValidator = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const userLoginValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});