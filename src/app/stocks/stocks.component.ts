import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocksData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make an HTTP request to your Flask backend API
    this.http.get('http://your-backend-api-url/stocks-data').subscribe((data: any) => {
      this.stocksData = data;
    });
  }
}
