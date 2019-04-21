import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-bbj-comparion-chart',
  templateUrl: './bbj-comparion-chart.component.html',
  styleUrls: ['./bbj-comparion-chart.component.scss']
})
export class BbjComparionChartComponent implements OnInit, AfterViewInit, OnDestroy {

  private chart: am4charts.XYChart;
  chartData = [];
  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    this.chartData = [
      {
        "metric": "Single Deck",
        "BBJ": 49,
        "Traditional": 45
      },
      {
        "metric": "Double Deck",
        "BBJ": 55,
        "Traditional": 41
      },
      {
        "metric": "Six Deck",
        "BBJ": 68,
        "Traditional": 32
      },
      {
        "metric": "Single W Split",
        "BBJ": 52,
        "Traditional": 47
      }

    ];
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.data = this.chartData;
      chart.paddingRight = 20;

      // Modified Colors list
      chart.colors.list = [
        am4core.color("#9ACD32"),
        am4core.color("#F9F871"),
        am4core.color("#FF9671"),
        am4core.color("#FFC75F"),
        am4core.color("#845EC2"),
        am4core.color("#D65DB1"),
      ];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "metric";
      categoryAxis.renderer.grid.template.location = 0;


      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.min = 0;

      // Create series
      this.createSeries("BBJ", "BBJ", chart);
      this.createSeries("Traditional", "Others", chart);

      // Legend
      chart.legend = new am4charts.Legend();

      this.chart = chart;


    });


  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  createSeries(field, name, chart) {

  // Set up series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "metric";
  series.sequencedInterpolation = true;

  // Make it stacked
  series.stacked = true;

  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

  // Add label
  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.text = "{valueY}%";
  labelBullet.locationY = 0.5;

  return series;
}

}
