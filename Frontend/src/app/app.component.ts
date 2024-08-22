import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { EmployeeChartComponent } from "./employee-chart/employee-chart.component";
import { Observable } from 'rxjs';
import { EmployeeDataService, TableData } from './employee-data.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, EmployeeTableComponent, CardModule, ChartModule, EmployeeChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  employeeData!: Observable<TableData[]>;

  constructor(private employeeDataService: EmployeeDataService) {}

  ngOnInit(): void {
    this.employeeData = this.employeeDataService.getEmployeeData()
  }
}
