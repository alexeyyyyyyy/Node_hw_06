"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const eventEmitter_1 = require("../events/eventEmitter");
const parseBody_1 = require("../utils/parseBody");
class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    getAllEmployees(res) {
        const employees = this.employeeService.getAllEmployees();
        res.status(200).json(employees);
    }
    addEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = yield (0, parseBody_1.parseBody)(req);
            const isSuccess = this.employeeService.addEmployee(body);
            if (isSuccess) {
                eventEmitter_1.eventEmitter.emit('employeeAdded', body.name);
                res.status(200).send('Employee added successfully');
            }
            else {
                res.status(409).send('Employee already exists');
            }
        });
    }
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = yield (0, parseBody_1.parseBody)(req);
            const victim = this.employeeService.deleteEmployee(body.id);
            if (victim !== null) {
                eventEmitter_1.eventEmitter.emit('UserDeleted', victim.name);
            }
            const employees = this.employeeService.getAllEmployees();
            res.status(200).json(employees);
        });
    }
}
exports.EmployeeController = EmployeeController;
