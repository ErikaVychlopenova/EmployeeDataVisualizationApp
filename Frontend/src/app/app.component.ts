import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  timeEntries: any[] = [];
  errorMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTimeEntries().subscribe(
      (response) => {
        this.timeEntries = response;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching time entries', error);
        this.errorMessage = 'Failed to load data. Please try again later.';
      }
    );
  }
}
