import { Component, OnInit, Input } from '@angular/core';
import { Friend } from 'src/app/interfaces/friend';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.scss']
})

export class FriendDetailComponent implements OnInit {

  @Input() friend?: Friend;

  constructor() { }

  ngOnInit(): void {
  }

}
