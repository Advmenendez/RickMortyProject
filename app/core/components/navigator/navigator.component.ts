import { Component, OnInit,Input } from '@angular/core';
import { NavigatorInterface } from '../../models/nav';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @Input() navigator!: NavigatorInterface[];
  public isActive: boolean = false;




  constructor() { }

  ngOnInit(): void {
  }
  public toggleActive () {
    this.isActive = !this.isActive;
  }

}
