import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-fuel-station',
  templateUrl: './add-fuel-station.component.html',
  styleUrls: ['./add-fuel-station.component.css']
})
export class AddFuelStationComponent implements OnInit {

  data = {
    name: ""
  }

  name = new FormControl('');
  location = new FormControl('');

  constructor() { }

  handleClick(){
    console.log(this.name.value);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.data.name = e.target.value.toUpperCase();
  }

  ngOnInit() {
  }

}
