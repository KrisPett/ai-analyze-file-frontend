import { Routes } from '@angular/router';

import { AnalyzeResultViewComponent } from './features/analyze-result-view/analyze-result-view.component';
import { ListFilesViewComponent } from './features/list-files-view/list-files-view.component';
import { UploadFileViewComponent } from './features/upload-file-view/upload-file-view.component';
import { HomeViewComponent } from './features/home-view/home-view.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'upload', component: UploadFileViewComponent },
  { path: 'analyze', component: AnalyzeResultViewComponent },
  { path: 'list-files', component: ListFilesViewComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
