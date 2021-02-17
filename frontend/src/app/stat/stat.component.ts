import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
 public barChartOptions=
 {scaleShowVerticalLines:false,
 responsive:true}

 public barChartsLabels=['31 décembre 2019'];
 public barChartType='bar';
 public barChartLegend=true;
 public barChartData=[
   {data:[1764,59,80],label:'renaullt Clio'},
 {data:[1735,48,19],label:'Kia rio 5p'},
  {data:[1105,38,29],label:'Volkswagen polo'},
    {data:[995,38,29],label:'hundai i20'},
      {data:[682,38,29],label:'citroen c3'},
        {data:[621,38,29],label:'seat ibiza'},
            {data:[164,38,29],label:'fiat punto'}
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
