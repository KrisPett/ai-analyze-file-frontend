import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
})
export class HomeViewComponent {
  constructor(private router: Router) {}

  navigateToUploadFileView() {
    this.router.navigate(['/upload']);
  }
}
