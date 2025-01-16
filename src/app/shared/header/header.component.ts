import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onHome() {
    this.router.navigate(['/']);
  }

  onUploadFile() {
    this.router.navigate(['/upload']);
  }

  onAnalyzeFile() {
    this.router.navigate(['/analyze']);
  }

  onListFiles() {
    this.router.navigate(['/list-files']);
  }
}
