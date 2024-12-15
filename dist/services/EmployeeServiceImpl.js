"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeServiceImpl = void 0;
class EmployeeServiceImpl {
    constructor() {
        this.employees = [];
    }
    getAllEmployees() {
        return this.employees;
    }
    addEmployee(employee) {
        if (this.employees.findIndex(elem => elem.id === employee.id) === -1) {
            this.employees.push(employee);
            return true;
        }
        return false;
    }
    deleteEmployee(id) {
        const index = this.employees.findIndex(elem => elem.id === id);
        if (index === -1) {
            return null;
        }
        const [victim] = this.employees.splice(index, 1);
        return victim;
    }
}
exports.EmployeeServiceImpl = EmployeeServiceImpl;
