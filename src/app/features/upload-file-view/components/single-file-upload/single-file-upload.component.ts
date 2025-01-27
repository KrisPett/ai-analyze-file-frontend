import { Component, HostListener } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';


@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.component.html',
  imports: [CommonModule, HttpClientModule, FormsModule, MarkdownComponent],
})
export class SingleFileUploadComponent {
  status: 'initial' | 'uploading' | 'success' | 'fail' = 'initial';
  file: File | null = null;
  isDragOver: boolean = false;
  additionalText: string = '';
  responseContent: string = "";
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = 'initial';
      this.file = file;
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.status = 'initial';
      this.file = file;
    }
  }

  onUpload() {
    if (this.file) {
      console.log(this.file);
      
      const formData = new FormData();
      formData.append('file', this.file, this.file.name);
      formData.append('additional_text', this.additionalText);

      console.log('Uploading file:', this.file.name);
      this.status = 'uploading';
      this.loading = true;

      this.http.post(`${environment.backendUrl}/analyze-file`, formData).subscribe(
        (response) => {
          this.status = 'success';
          this.loading = false;
          console.log('File uploaded successfully:', this.file?.name);
          console.log('Response:', response);
          // @ts-ignore
          this.responseContent = response.choices[0].message.content;
          console.log('OpenAI Completion Response:', this.responseContent);
        },
        (error) => {
          this.status = 'fail';
          this.loading = false;
          console.error('File upload failed:', error);
        }
      );
    }
  }

  removeFile() {
    this.file = null;
    this.status = 'initial';
    this.responseContent = "";
  }
}
