import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  //declare and initialise a string
  clickMessage: string = "";

  constructor() { }

  //This method handles the button click
  onClickMe(){
    //Set the message
    this.clickMessage = "You Clicked the button!";
  }

  ngOnInit() {
  }

}
