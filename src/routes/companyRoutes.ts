import {Router} from "express";
import exp from "node:constants";

import {EmployeeServiceImpl} from "../services/EmployeeServiceImpl";
import {EmployeeController} from "../controller/EmployeeController";


const employeeServiceImpl = new EmployeeServiceImpl();
const employeeController = new EmployeeController(employeeServiceImpl);

const router = Router();

router.get('/allEmployees',(req,res) => employeeController.getAllEmployees(res));
router.post('/employee',(req,res) => employeeController.addEmployee(req,res));
router.delete('/employee',(req,res) => employeeController.deleteEmployee(req,res));

export default router;