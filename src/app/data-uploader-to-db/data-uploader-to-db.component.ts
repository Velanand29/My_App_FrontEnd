import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-uploader-to-db',
  templateUrl: './data-uploader-to-db.component.html',
  styleUrls: ['./data-uploader-to-db.component.css'],
})
export class DataUploaderToDbComponent {
  startDate: string = '';
  endDate: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  uploadData() {
    if (!this.startDate || !this.endDate) {
      this.message = 'Please provide both start and end dates.';
      return;
    }

    // Define the API endpoint for data upload
    const apiUrl = 'http://localhost:5000/api/upload-data'; // Replace with your actual API URL

    // Prepare the data to send to the API
    const requestData = { start_date: this.startDate, end_date: this.endDate };

    // Make an HTTP POST request to upload data
    this.http.post(apiUrl, requestData).subscribe(
      (response: any) => {
        this.message = response.message;
      },
      (error) => {
        console.error(error);
        this.message = 'An error occurred while uploading data.';
      }
    );
  }

  openDatePicker(inputField: 'startDate' | 'endDate'): void {
    // Here, you can implement a date picker dialog or use a date picker library.
    // For simplicity, you can use the built-in JavaScript date picker.
    const selectedDate = prompt(`Select ${inputField === 'startDate' ? 'Start' : 'End'} Date (YYYY-MM-DD):`);
    if (selectedDate) {
      this[inputField] = selectedDate;
    }
  }
}
