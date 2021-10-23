import { Component, OnInit,Input } from '@angular/core';
import { Footer } from '../../models/footer';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public footer!: Footer;
  public options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_ic7sfyzu.json',
  };  

  constructor() { }

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  

}
