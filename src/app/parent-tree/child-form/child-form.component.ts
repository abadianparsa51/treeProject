import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from '../../enum/state.enum'
import { AccountType } from '../../enum/accountType.enum'
import { UserListDTO } from 'src/app/DTO/userList.DTO';
import { StorageService } from 'src/app/_service/storage.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FORM_MODE } from 'src/app/enum/formMode.enum';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit, OnChanges {
  @Output() userChangeEvent = new EventEmitter<any>();
  @Input() information: any;
  @Input() formMode: any;
  public object = State;
  public accountType = AccountType;
  userList: UserListDTO[] = [];
  user: any;
  constructor(private _storage: StorageService,) { }
  ngOnChanges(): void {
    this.formData?.patchValue(this.information)
  }
  ngOnInit(): void { }
  formData: FormGroup = new FormGroup({
    id: new FormControl(),
    FirstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    LastName: new FormControl('',),
    DateOfBrith: new FormControl('',),
    PhoneNumber: new FormControl('',),
    Email: new FormControl('',),
    BankAccountNumber: new FormControl('',),
    AccountType: new FormControl('',),
    State: new FormControl('',)
  });
  checkTheStorage() {
    this._storage.myNewList.subscribe(
      result => {
        if (result) {
          this.userList = result;
        }
      }
    )
  }
  onSubmit() {
    if (this.formData.value && this.formMode === FORM_MODE.CREATE) {
      debugger;
      this.checkTheStorage();
      this.formData.value['id'] = this.userList.length + 1; //add id for finding user
      this.userList.push(this.formData.value);
      this._storage.saveOnLocalStorage(this.userList); // the last step for submitting
      this.formData.reset();
      this.setUser(true);
    }
    else if (this.formMode === FORM_MODE.EDIT) {
      debugger
      this.userList[this.userList.indexOf(this.information)] = this.formData.value; // replacment function
      this._storage.saveOnLocalStorage(this.userList);
      this.formData.reset();
    }
  }
  setUser(getUser: boolean) {
    this.userChangeEvent.emit(getUser);
  }
}