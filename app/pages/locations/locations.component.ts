import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/shared/models/shared';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locationList: Location[] = [];

  constructor(private request: HttpClient) { }

  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/location').subscribe(param => {
      this.locationList = param.results
    })
  }

}
