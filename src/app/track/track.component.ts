import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  chart = [];

  constructor() { }



  ngOnInit() {
    var canvas = <HTMLCanvasElement> document.getElementById("dayChart");
    var ctx = canvas.getContext("2d");
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
          {
            label: "calories burnt",
            data: [100, 200, 150, 300, 250],
            borderColor: "red",
            backgroundColor: "red",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
