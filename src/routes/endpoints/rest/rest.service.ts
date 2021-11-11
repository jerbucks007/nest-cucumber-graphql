import { Injectable } from '@nestjs/common';
import { employees } from '../../../datas/data.employees.js';

@Injectable()
export class EmployeeService {
    Employees = employees;
    getEmployees() {
        return this.Employees;
    }

    getEmployee(id: Number) {
        const employee : any = this.Employees.filter(st => st._id == id);
        return employee;
    }
}
