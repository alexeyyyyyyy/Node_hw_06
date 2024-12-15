"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeeServiceImpl_1 = require("../services/EmployeeServiceImpl");
const EmployeeController_1 = require("../controller/EmployeeController");
const employeeServiceImpl = new EmployeeServiceImpl_1.EmployeeServiceImpl();
const employeeController = new EmployeeController_1.EmployeeController(employeeServiceImpl);
const router = (0, express_1.Router)();
router.get('/allEmployees', (req, res) => employeeController.getAllEmployees(res));
router.post('/employee', (req, res) => employeeController.addEmployee(req, res));
router.delete('/employee', (req, res) => employeeController.deleteEmployee(req, res));
exports.default = router;