import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public id!: string | null;
  public info: any;

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.id).subscribe(params => {
      this.info = params
      console.log(this.info)
    })
    
  }

}
