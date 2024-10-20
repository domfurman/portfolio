import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent {

}
