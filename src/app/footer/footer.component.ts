import { Component, OnInit } from '@angular/core';
import { social_buttons } from './social_buttons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  social_button: social_buttons = {
    name: 'facebook',
    URL: '<a href="#" class="fa fa-facebook"></a>'
  }

    social_button1: social_buttons = {
      name: 'twitter',
      URL: '<a href="#" class="fa fa-facebook"></a>'
  }

  social_button2: social_buttons = {
    name: 'instagram',
    URL: '<a href="#" class="fa fa-instagram"></a>'
}

  constructor() { }

  ngOnInit(): void {
  }

}
