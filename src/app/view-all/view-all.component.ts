import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  public workouts = [
    {"id": 1, "title": "Morning Run for 5 kms"},
    {"id": 2, "title": "Push ups 20 counts"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
