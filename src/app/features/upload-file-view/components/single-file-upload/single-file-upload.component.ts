import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.component.html',
  imports: [CommonModule, HttpClientModule],
})
export class SingleFileUploadComponent {
  status: 'initial' | 'uploading' | 'success' | 'fail' = 'initial';
  file: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = 'initial';
      this.file = file;
      console.log('File selected:', file);
    }
  }

  onUpload() {
    if (this.file) {
      const formData = new FormData();

      formData.append('file', this.file, this.file.name);

      console.log('Uploading file:', this.file.name);
      this.status = 'uploading';

      setTimeout(() => {
        this.status = 'success';
        console.log('File uploaded successfully:', this.file?.name);
      }, 2000);
    }
  }

  removeFile() {
    this.file = null;
    this.status = 'initial';
    console.log('File removed');
  }
}
