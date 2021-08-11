import { Component, OnInit, Input } from '@angular/core';
import { Friend } from 'src/app/interfaces/class/friend';
import { AddFriendService } from 'src/app/services/add-friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  @Input() friend?: Friend;

  title = 'Friends Book';

  favoriteLanguage = ['Html', 'Css', 'Js', 'Php', 'Other'];
  friendModel = new Friend('', '', '', '', '', '');
  allFriends: any;

  constructor(private addFriendService: AddFriendService) {}

  ngOnInit() {
    this.getAllFriends(this.addFriendService.url);
  }

  onSubmit() {
    this.addFriendService.addFriend(this.friendModel).subscribe(
      (data) => console.log('Succes', data),
      (error) => console.log('Error', error)
    );
    this.getAllFriends(this.addFriendService.url);
  }

  onDelete(id: string) {
    console.log(id);
    this.addFriendService.deleteFriend(id).subscribe(
      (data) => console.log('Succes', data),
      (error) => console.log('Error', error)
    );
  }

  onUpdate(id: string, {}) {
    this.addFriendService.updateFriend(id).subscribe(
      (data) => console.log('Succes', data),
      (error) => console.log('Error', error)
    );
    // this.getAllFriends(this.addFriendService.url);
  }

  public async getAllFriends(url: string): Promise<any> {
    return await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.allFriends = data));
  }
}
