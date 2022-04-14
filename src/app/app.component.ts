import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  chartOptions: any = {};

  chartHeight = '500';
  chartColor = '#0d6efd';

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
  }
}

function getCSSVariableValue(variableName: string) {
  let hex = getComputedStyle(document.documentElement).getPropertyValue(
    variableName
  );
  if (hex && hex.length > 0) {
    hex = hex.trim();
  }

  return hex;
}
function getChartOptions(chartHeight: string, chartColor: string) {
  const labelColor = '#adb5bd';
  const borderColor = '#e9ecef';
  const secondaryColor = '#dee2e6';
  const baseColor = chartColor;

  return {
    series: [
      {
        name: 'Net Profit',
        data: [51, 46, 26, 64, 8, 53, 60, 40],
      },
      {
        name: 'Revenue',
        data: [83, 58, 77, 85, 43, 100, 12, 65],
      },
      // {
      //   name: 'Revenue',
      //   data: [29, 31, 37, 20, 35, 84, 63, 39],
      // },
      // {
      //   name: 'Revenue',
      //   data: [55, 65, 42, 82, 72, 9, 45, 14],
      // },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'polararea',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        barHeight: '60%',
        borderRadius: 5,
      },
    },
    legend: {
      show: true, // dashboard legends
    },
    dataLabels: {
      enabled: false, //labels
    },
    stroke: {
      //border around the data UI
      show: true,
      width: 3, //none:0 , small:1 , medium:2, large:4
      colors: ['transparent'], //colors per dataset
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor, // color of the labels , or array for each label
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val + ' revenue';
        },
      },
    },
    colors: [baseColor, secondaryColor], // null or array of looped colors
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
