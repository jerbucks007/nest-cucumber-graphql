import { EmployeeService } from './rest.service';
export declare class RestController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getInfo(employeeId: Number): any;
}
