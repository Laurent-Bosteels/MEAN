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
    language : 'PHP',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
