import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighchartsComponent } from './highcharts/highcharts.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighchartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'highcharts';
}
