import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/interfaces/friend';
import { FRIENDS } from 'src/app/mock-friends';

@Component({


  // the component's CSS element selector
  selector: 'app-friends',
  // the location of the component's template file.
  templateUrl: './friends.component.html',
  // the location of the component's private CSS styles.
  styleUrls: ['./friends.component.scss']
})

export class FriendsComponent implements OnInit {

  friends = FRIENDS;
  selectedFriend!: Friend;

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

  onSelect(friend: Friend): void {
    this.selectedFriend = friend;
  }

}
