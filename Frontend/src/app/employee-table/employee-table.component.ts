import { Component, Input, OnInit } from '@angular/core';
import { EmployeeDataService, EmployeeData, TableData } from '../employee-data.service';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
  standalone: true,
  imports: [TableModule, CommonModule]
})
export class EmployeeTableComponent {

  @Input() employeeData!: Observable<TableData[]>;
 
}
