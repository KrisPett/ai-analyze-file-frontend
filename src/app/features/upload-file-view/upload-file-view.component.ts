import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleFileUploadComponent } from "./components/single-file-upload/single-file-upload.component";

@Component({
  selector: 'app-upload-file-view',
  imports: [CommonModule, SingleFileUploadComponent],
  templateUrl: './upload-file-view.component.html',
})
export class UploadFileViewComponent {
}
