import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface EmployeeData {
  Id: string;
  EmployeeName: string;
  StarTimeUtc: Date;
  EndTimeUtc: Date;
  EntryNotes: string;
  DeletedOn: string;
}

export class TableData{
  Id: string;
  EmployeeName: string;
  Duration: number;
  EntryNotes: string;

  constructor(id: string, employeeName : string, duration : number, entryNotes : string){
    this.Id = id;
    this.EmployeeName = employeeName;
    this.Duration = duration;
    this.EntryNotes = entryNotes;
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private apiUrl = 'https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==';

  constructor(private http: HttpClient) {}

  getEmployeeData(): Observable<TableData[]> {
    return this.http.get<EmployeeData[]>(this.apiUrl).pipe(
      map(dataArray => 
        dataArray.map(obj => 
          new TableData(
            obj.Id, 
            obj.EmployeeName??"Employee Without Name", 
            Math.max(new Date(obj.EndTimeUtc).getTime() - new Date(obj.StarTimeUtc).getTime(),0) / (1000 * 60 * 60), 
            obj.EntryNotes
          )
        )
      ),
      map(dataArray => {
        const employeeMap = dataArray.reduce((acc, curr) => {
          if (acc.has(curr.EmployeeName)) {
            const existingData = acc.get(curr.EmployeeName)!;
            existingData.Duration += curr.Duration;
          } else {
            const newData = new TableData(
              curr.Id,
              curr.EmployeeName,
              curr.Duration,
              curr.EntryNotes
            );
            acc.set(curr.EmployeeName, newData);
          }
          return acc;
        }, new Map<string, TableData>());
      
        return Array.from(employeeMap.values());
      })
      
    );
  }
  
  
}
