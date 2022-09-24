import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataHistoryService } from 'src/app/core/services/dataHistory.service';

@Component({
  selector: 'app-total-volume',
  templateUrl: './total-volume.component.html',
  styleUrls: ['./total-volume.component.scss'],
})
export class TotalVolumeComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options;

  constructor(private dataHistoryService: DataHistoryService) {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Total Volume Each Workout Day',
      },
      xAxis: {
        categories: dataHistoryService.getDashboardTotalVolumeData()[0],
        labels: {
          style: {
            fontSize: '8px',
            color: 'var(--standard-button-text-color)',
          },
        },
      },
      plotOptions: {
        series: {
          color: 'var(--nav-link-color)',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Volume',
        },
      },
      series: [
        {
          type: 'column',
          name: 'Volume',
          data: dataHistoryService.getDashboardTotalVolumeData()[1],
        },
      ],
    };
  }

  ngOnInit() {
    this.dataHistoryService.getDashboardTotalVolumeData();
  }
}
