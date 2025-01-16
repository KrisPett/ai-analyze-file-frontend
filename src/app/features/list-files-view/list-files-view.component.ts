import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-list-files-view',
  templateUrl: './list-files-view.component.html',
  imports: [CommonModule, HttpClientModule],
})
export class ListFilesViewComponent implements OnInit {
  files: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFiles();
  }

  fetchFiles() {
    this.http.get<any>(`${environment.backendUrl}/files`).subscribe(
      (data) => {
        console.log(data);
        
        if (data && Array.isArray(data.data)) {
          this.files = data.data.map((file: { filename: any; status: string; id: any; purpose: any; bytes: number; created_at: number; }) => ({
            name: file.filename,
            status: file.status,
            id: file.id,
            purpose: file.purpose,
            size: `${(file.bytes / 1024).toFixed(2)} KB`,
            createdAt: new Date(file.created_at * 1000).toLocaleString(),
          }));
        } else {
          console.error('Unexpected response format:', data);
        }
      },
      (error) => {
        console.error('Error fetching files:', error);
      }
    );
  }

  onDownload(file: any) {
    console.log('Download file:', file);
    // Add download functionality here
  }

  onDelete(file: any) {
    console.log('Delete file:', file);
    // Add delete functionality here
  }
}
