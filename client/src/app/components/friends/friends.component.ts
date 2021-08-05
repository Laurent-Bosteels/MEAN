import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/interfaces/friend';

@Component({


  // the component's CSS element selector
  selector: 'app-friends',
  // the location of the component's template file.
  templateUrl: './friends.component.html',
  // the location of the component's private CSS styles.
  styleUrls: ['./friends.component.scss']
})

export class FriendsComponent implements OnInit {

  friend: Friend = {
    id : 1,
    fname : 'Leroy',
    lname : 'Jenkins',
    email : 'leroyjenkings@gmail.com',
    phone : '0469696969',
    comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error debitis voluptas magnam enim laboriosam sequi et, aspernatur explicabo facilis.' ,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
