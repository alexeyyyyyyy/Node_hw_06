import {Employee} from "../models/employee";

export interface EmployeeService {
    getAllEmployees(): Employee[];
    addEmployee(employee: Employee): boolean;
    deleteEmployee(id: number): Employee | null;
}