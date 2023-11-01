import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
   fetchedData: any[] = []; // Define the data structure based on your backend response

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Replace 'your-backend-api-url' with the actual URL of your Flask API
    this.http.get<any[]>('your-backend-api-url')
      .subscribe((data: any[]) => {
         this.fetchedData = data;
      });
  }
}
