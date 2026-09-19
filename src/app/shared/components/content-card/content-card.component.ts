import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-card',
  imports: [RouterLink],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
})
export class ContentCardComponent {
  title = input.required<string>();
  image = input.required<string>();
  link = input.required<string | any[]>();
  linkLabel = input('Read more');
}