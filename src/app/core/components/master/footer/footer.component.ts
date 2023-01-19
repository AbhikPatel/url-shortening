import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public socialMedia:any[] = [
    {
      class:'../../../../../assets/images/icon-facebook.svg',
      altName:'facebook'
    },
    {
      class:'../../../../../assets/images/icon-twitter.svg',
      altName:'twitter'
    },
    {
      class:'../../../../../assets/images/icon-pinterest.svg',
      altName:'pinterest'
    },
    {
      class:'../../../../../assets/images/icon-instagram.svg',
      altName:'instagram'
    },
  ]
}
