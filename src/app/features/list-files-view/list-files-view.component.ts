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
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFiles();
  }

  fetchFiles() {
    this.loading = true;
    this.http.get<any>(`${environment.backendUrl}/files`).subscribe(
      (data) => {
        this.loading = false;
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
        this.loading = false;
        console.error('Error fetching files:', error);
      }
    );
  }

  onDownload(file: any) {
    console.log('Download file:', file);
    // Add download functionality here
  }

  onDelete(file: any) {
    this.http.delete(`${environment.backendUrl}/files/${file.id}`).subscribe(
      (response) => {
        console.log('File deleted successfully:', file.id);
        this.files = this.files.filter(f => f.id !== file.id);
      },
      (error) => {
        console.error('Error deleting file:', error);
      }
    );
  }
}
