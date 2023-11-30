import { Injectable } from '@angular/core';
import { UserListDTO } from '../DTO/userList.DTO';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  userList: UserListDTO[] = [];
  tempelList: any;
  myNewList = new BehaviorSubject<any>([]);

  constructor() {
    this.readFromLocalStorage();
  }
  saveOnLocalStorage(userlist: any) {
    this.myNewList.next(userlist);
    localStorage.setItem('UserList', JSON.stringify(userlist));
  }
  readFromLocalStorage() {
    if (localStorage.getItem('UserList')) {
      const storage: any = localStorage.getItem('UserList');
      this.userList = JSON.parse(storage);
      this.myNewList.next(this.userList);
    }
  }

}
