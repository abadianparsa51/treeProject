import { Component, } from '@angular/core';
import { StorageService } from '../_service/storage.service';
import { UserListDTO } from '../DTO/userList.DTO';
import { FORM_MODE } from '../enum/formMode.enum';

@Component({
  selector: 'app-parent-tree',
  templateUrl: './parent-tree.component.html',
  styleUrls: ['./parent-tree.component.scss']
})

export class ParentTreeComponent {
  userList: UserListDTO[] = [];
  formMode = FORM_MODE.CREATE;
  selectedUser: any;
  constructor(private _storage: StorageService,) { }
  onUserChange(getUser: boolean) {
    if (getUser) {
      this._storage.readFromLocalStorage()
    }
  }
  checkTheStorage() {
    this._storage.myNewList.subscribe(
      result => {
        if (result) {
          this.userList = result;
        }
      }
    )
  }
  editCustomerData(id: any, user: any) {
    this.formMode = FORM_MODE.EDIT;
    this.selectedUser = user;
  }
  deleteUser(id: any) {
    const objDeletByUserId = this.userList.findIndex((obj) => obj.id === id);
    if (objDeletByUserId > -1) {
      this.userList.splice(objDeletByUserId, 1);
      this._storage.saveOnLocalStorage(this.userList)
    }
    this.checkTheStorage()
  }
  ngOnInit(): void {
    this.checkTheStorage();
  }
}