import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fuel-station-list',
  templateUrl: './fuel-station-list.component.html',
  styleUrls: ['./fuel-station-list.component.css']
})
export class FuelStationListComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFirestore) { 
    this.items = db.collection('stations').valueChanges();
  }

  ngOnInit() {
  }

}
