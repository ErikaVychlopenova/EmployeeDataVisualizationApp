import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Observable } from 'rxjs';
import { TableData } from '../employee-data.service';

@Component({
  selector: 'app-employee-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './employee-chart.component.html',
  styleUrl: './employee-chart.component.css'
})
export class EmployeeChartComponent {
  data: any;
  options: any;
  @Input() employeeData!: Observable<TableData[]>;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.employeeData.subscribe(data=>{
        const totalDuration = data.reduce((sum, obj) => sum + obj.Duration, 0);
        const percentages = data.map(obj => (obj.Duration / totalDuration) * 100);
        this.data = {
          labels: data.map(obj => obj.EmployeeName),
          datasets: [
              {
                  data: percentages
              }
          ]
      };

      this.options = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };

    })

      
      
  }
}