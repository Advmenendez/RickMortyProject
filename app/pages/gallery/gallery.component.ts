import { Character } from 'src/app/shared/models/shared';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  characterList: Character[] = [];
  public index = 1;
  public filter!: string;

  constructor(private request:HttpClient) { 
    this.request.get<any>('https://rickandmortyapi.com/api/character').subscribe(param => {
      this.characterList = param.results
    })
  }

  ngOnInit(): void {
  }
  nextPage() {
    this.index = this.index + 1
    this.request.get<any>(`https://rickandmortyapi.com/api/character?page=${this.index}`).subscribe(finalResults => {
      this.characterList = finalResults.results
    })
  }
  previousPage() {
    this.index = this.index - 1
    this.request.get<any>(`https://rickandmortyapi.com/api/character?page=${this.index}`).subscribe(finalResults => {
      this.characterList = finalResults.results
    })
  }

}
