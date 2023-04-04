import { Component, Input, SimpleChanges  } from '@angular/core';
import { ChartData} from 'chart.js'

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title:any = 'Sin titulo';
  @Input() labels:string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  @Input() data:number[] = [ 350, 450, 100 ];
  @Input() colors:string[] = ['#000000','#000000','#000000'];
  
  public doughnutChartLabels: string[] = this.labels;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data,
        backgroundColor:this.colors
      }
    ]
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData={
   
      labels: this.labels,
      datasets:[{ data: this.data, backgroundColor:this.colors}]
   
    }
   
  }

}
