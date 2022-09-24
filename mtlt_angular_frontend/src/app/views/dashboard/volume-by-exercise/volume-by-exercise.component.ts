import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataHistoryService } from 'src/app/core/services/dataHistory.service';

@Component({
  selector: 'app-volume-by-exercise',
  templateUrl: './volume-by-exercise.component.html',
  styleUrls: ['./volume-by-exercise.component.scss'],
})
export class VolumeByExerciseComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  exerciseListing: string[] = ['Bench Press'];
  selectedExercise: string;

  chartOptions: Highcharts.Options;

  constructor(private dataHistoryService: DataHistoryService) {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Exercise Total Volume History',
      },
      xAxis: {
        categories:
          dataHistoryService.getDashboardVolumeByExercise('default-blank')[0],
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
          data: dataHistoryService.getDashboardVolumeByExercise(
            'default-blank'
          )[1],
        },
      ],
    };
  }

  ngOnInit() {
    this.dataHistoryService.getDashboardVolumeByExercise('default-blank');
  }

  async exerciseSelect(e: any) {
    console.log(e.value.toLowerCase());
    this.selectedExercise = e.value.toLowerCase();
    let newData: any[] =
      await this.dataHistoryService.getDashboardVolumeByExercise(
        this.selectedExercise
      );
    console.log(newData);

    if (newData === undefined) {
      console.log('efore blank');

      newData = [['blank'], ['blank']];
    } else {
      // console.log('shie');
      // console.log(newData[0]);
      // this.chartOptions.xAxis[0].categories = newData[0];
      // this.chartOptions.yAxis[0].categories = newData[1];
    }

    this.updateFlag = true;
  }
}
