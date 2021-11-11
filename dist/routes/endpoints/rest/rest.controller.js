"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestController = void 0;
const common_1 = require("@nestjs/common");
const rest_service_1 = require("./rest.service");
let RestController = class RestController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    getInfo(employeeId) {
        const found = this.employeeService.getEmployee(employeeId);
        if (found.length <= 0)
            throw new common_1.HttpException("Employee not Found", 404);
        return found[0];
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RestController.prototype, "getInfo", null);
RestController = __decorate([
    (0, common_1.Controller)('rest'),
    __metadata("design:paramtypes", [rest_service_1.EmployeeService])
], RestController);
exports.RestController = RestController;
//# sourceMappingURL=rest.controller.js.map