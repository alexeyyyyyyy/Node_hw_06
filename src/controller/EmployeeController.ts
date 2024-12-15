import { Request, Response } from "express";
import { EmployeeService } from "../services/EmployeeService";
import { Employee } from "../models/employee";
import { eventEmitter } from "../events/eventEmitter";
import { parseBody } from "../utils/parseBody";

export class EmployeeController {
    private employeeService: EmployeeService;

    constructor(employeeService: EmployeeService) {
        this.employeeService = employeeService;
    }


    getAllEmployees(res: Response) {
        const employees = this.employeeService.getAllEmployees();
        res.status(200).json(employees);
    }


    async addEmployee(req: Request, res: Response) {
        const body = await parseBody(req);
        const isSuccess = this.employeeService.addEmployee(body as Employee);
        if (isSuccess) {
            eventEmitter.emit('employeeAdded', (body as Employee).name);
            res.status(200).send('Employee added successfully');
        } else {
            res.status(409).send('Employee already exists');
        }
    }


    async deleteEmployee(req: Request, res: Response) {
        const body = await parseBody(req);
        const victim = this.employeeService.deleteEmployee((body as { id: number }).id);
        if (victim !== null) {
            eventEmitter.emit('UserDeleted', victim.name);
        }
        const employees = this.employeeService.getAllEmployees();
        res.status(200).json(employees);
    }
}
