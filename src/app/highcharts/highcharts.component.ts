import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import 'highcharts/modules/exporting'; // Import the exporting module
import 'highcharts/modules/export-data'; // Import the export data module

@Component({
  selector: 'app-highcharts',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Logarithmic Axis Example'
    },
    subtitle: {
      text: 'Using a logarithmic scale for the Y-axis'
    },
    xAxis: {
      title: {
        text: 'X Axis'
      },
      categories: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {
      title: {
        text: 'Y Axis'
      },
      type: 'logarithmic',
      min: 0.1,
      tickInterval: 1
    },
    series: [
      {
        type: 'line',
        name: 'Series 1',
        data: [1, 10, 100, 200, 10000]
      },
      {
        type: 'line',
        name: 'Series 2',
        data: [0.1, 1, 10, 100, 1000]
      }
    ],
    exporting: {
      enabled: true,
      //  url: 'http://localhost:4200',
      // url: 'http://localhost:7801/',
      // url: 'http://localhost:7801/',
      url: 'https://export.highcharts.com/',
      // fallbackToExportServer: false,
      buttons: {
        contextButton: {
          menuItems: [
            'printChart',
            'downloadPNG',
            'downloadJPEG',
            'downloadPDF',
            'downloadSVG',
            'downloadCSV'
          ]
        }
      }
    }
  };
}
