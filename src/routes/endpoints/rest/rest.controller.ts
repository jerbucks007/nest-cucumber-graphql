import { Body, Controller, Get, HttpException, Param, Query } from '@nestjs/common';
import { EmployeeService } from './rest.service';

@Controller('rest')
export class RestController {

    constructor(private readonly employeeService: EmployeeService) {}

    @Get()
    getInfo(
        @Query('employeeId') employeeId: Number
    ){
        const found = this.employeeService.getEmployee(employeeId);
        if( found.length <= 0 )
            throw new HttpException("Employee not Found", 404);
        return found[0];
    }
}
