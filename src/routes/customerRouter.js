const { Router } = require("express");
const customerRouter = Router();
const createCustomerHandler = require("../handlers/CustomerHandlers/createCustomerHandler");
const putCustomerHandler = require("../handlers/CustomerHandlers/updateCustomerHandler");
const deleteCustomerHandler = require("../handlers/CustomerHandlers/deleteCustomerHandler");
const getCustomersHandler = require("../handlers/CustomerHandlers/getCustomersHandler");
const getCustomerByIdHandler = require("../handlers/CustomerHandlers/getCustomerByIdHandler");

customerRouter.get("/", getCustomersHandler);
customerRouter.get("/:id", getCustomerByIdHandler);
customerRouter.post("/", createCustomerHandler);
customerRouter.put("/:id", putCustomerHandler);
customerRouter.delete("/:id", deleteCustomerHandler); //

module.exports = customerRouter;
