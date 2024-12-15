import { EmployeeService } from './EmployeeService';
import { Employee } from '../models/employee';

export class EmployeeServiceImpl implements EmployeeService {
    private employees: Employee[] = [];
    getAllEmployees(): Employee[] {
        return this.employees;
    }

    addEmployee(employee: Employee): boolean {
        if(this.employees.findIndex(elem => elem.id === employee.id) === -1){
            this.employees.push(employee);
            return true;
        }
        return false;
    }

    deleteEmployee(id: number): Employee | null {
        const index = this.employees.findIndex(elem => elem.id === id);
        if(index === -1) {
            return null;
        }
        const [victim]:Employee[] = this.employees.splice(index, 1);
        return  victim;
    }
}