import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Friend } from '../interfaces/class/friend';

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/allFriends/';

   addFriend(friend : Friend) {
     return this.http.post(this.url, friend)
   }

}
