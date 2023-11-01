import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fno',
  templateUrl: './fno.component.html',
  styleUrls: ['./fno.component.css']
})
export class FNOComponent implements OnInit {
  fnoData: any[] = []; // Define the data structure based on your backend response

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Replace 'your-backend-api-url' with the actual URL of your Flask API endpoint
    this.http.get<any[]>('your-backend-api-url')
      .subscribe((data: any[]) => {
        this.fnoData = data;
      });
  }
}
