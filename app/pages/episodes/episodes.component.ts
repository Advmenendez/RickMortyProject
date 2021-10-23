import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Episodes } from 'src/app/shared/models/shared';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodesList: Episodes[] = [];

  constructor(private request: HttpClient) { }

  ngOnInit(): void {
    this.request.get<any>('https://rickandmortyapi.com/api/episode').subscribe(param => {
      this.episodesList = param.results
    })
  }

}
