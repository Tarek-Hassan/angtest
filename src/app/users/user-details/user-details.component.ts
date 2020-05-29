import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input('userInfo') user;
  @Output() usersClick= new EventEmitter <string>();
  onClick(){
    this.usersClick.emit(this.user.title);
  }  
  constructor( private userService:UserService,) { }

  ngOnInit(): void {
  }

  deleteUsers(id){
    this.userService.deleteUser(id).subscribe((res:any)=>{
      console.log("userDeleted",res.data);
    });
  }

  updateUser(user){
    this.userService.updateUser(user).subscribe((res:any)=>{
      console.log("userUpdate",res);
    });
  }

}
