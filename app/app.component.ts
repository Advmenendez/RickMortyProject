import { Component } from '@angular/core';
import { Footer } from './core/models/footer';
import { NavigatorInterface } from './core/models/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ricKMortyproject';
  public navigator: NavigatorInterface[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "gallery",
      link: "/gallery"
    },
    {
      name: "locations",
      link: "/locations"
    },
    {
      name: "episodes",
      link: "/episodes"
    },
   
    {
      name: "about",
      link: "/about"
    },
    
  ];
  public footer: Footer = {
    title: 'Síguenos en @Rick&Morty',
   
  }
  

}
