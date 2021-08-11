import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../interfaces/class/friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddFriendService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/allFriends/';

  addFriend(friend: Friend) {
    return this.http.post(this.url, friend);
  }

  deleteFriend(id: string) {
    this.url = `http://localhost:3000/delete/${id}`;
    return this.http.delete(this.url)
  }

  updateFriend(id: string) {
    this.url = `http://localhost:3000/${id}`;
    return this.http.patch(this.url, {})
  }

}