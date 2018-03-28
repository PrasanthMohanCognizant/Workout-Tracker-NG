import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  dayChart = [];
  weekChart = [];
  monthChart = [];

  constructor() { }



  ngOnInit() {
    var dayCanvas = <HTMLCanvasElement> document.getElementById("dayChart");
    var dayCtx = dayCanvas.getContext("2d");
    this.dayChart = new Chart(dayCtx, {
      type: 'bar',
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
          {
            label: "calories burnt",
            data: [10, 25, 20, 30, 10],
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
    var weekCanvas = <HTMLCanvasElement> document.getElementById("weekChart");
    var weekCtx = weekCanvas.getContext("2d");
    this.weekChart = new Chart(weekCtx, {
      type: 'bar',
      data: {
        labels: ["Week1", "Week2", "Week3", "Week4", "Week5","Week6", "Week7", "Week8", "Week9", "Week10"],
        datasets: [
          {
            label: "calories burnt",
            data: [100, 200, 150, 300, 250,100, 200, 150, 300, 250],
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
    var monthCanvas = <HTMLCanvasElement> document.getElementById("monthChart");
    var monthCtx = monthCanvas.getContext("2d");
    this.monthChart = new Chart(monthCtx, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "calories burnt",
            data: [100, 200, 150, 300, 250,100, 200, 150, 300, 250, 100, 300],
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
