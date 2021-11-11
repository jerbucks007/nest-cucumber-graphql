export declare class EmployeeService {
    Employees: {
        _id: number;
        name: string;
        position: string;
    }[];
    getEmployees(): {
        _id: number;
        name: string;
        position: string;
    }[];
    getEmployee(id: Number): any;
}
