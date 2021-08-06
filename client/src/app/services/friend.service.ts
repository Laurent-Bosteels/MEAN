import { Injectable } from '@angular/core';
import { Friend } from '../interfaces/friend';
import { FRIENDS } from '../mock-friends';

// The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  getFriends(): Friend[] {
    return FRIENDS;
  }

  constructor() { }
}
