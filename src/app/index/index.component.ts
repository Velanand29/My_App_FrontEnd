import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  indexData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make an HTTP request to your Flask backend API
    this.http.get('http://your-backend-api-url/index-data').subscribe((data: any) => {
      this.indexData = data;
    });
  }
}
