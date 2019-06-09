import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public trainings  = [];
  constructor( private _trainigService : TrainingService) { }

  ngOnInit() {
    this._trainigService .getTraingDetails()
    .subscribe(data=>{
      this.trainings= data;
  })
}

}
