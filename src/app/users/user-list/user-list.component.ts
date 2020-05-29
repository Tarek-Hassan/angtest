import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  pages:any[];
  currentPage:number=1;
  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(): void {

    // this.activatedRoute.queryParamMap.subscribe((queryParamMap)=>{
    //   // const limit=queryParamMap.get('limit') || 10 ;
    //   const params={};
    //   queryParamMap.keys.forEach(
    //     (key)=>(params[key]=queryParamMap.get(key))
    //   );
      // this.users=this.userService.getUsers(params).subscribe((res:any)=>{
      this.users=this.userService.getUsers().subscribe((res:any)=>{
        console.log(res);
          this.users=res.data;
          this.currentPage=res.page;
          this.pages=new Array(res.total_pages||0);
        
      });
    // });
    

  }
  deleteUsers(id){
    console.log("userDeleted1");
    this.userService.deleteUser(id).subscribe((res:any)=>{
      console.log("userDeleted",res.data);
    });
  }

  updateUser(user){
    console.log("updateDeleted2");
    this.userService.updateUser(user).subscribe((res:any)=>{
      console.log("userUpdate",res);
    });
  }

  // onClickItem(user){
  //   this.userService.changeData(user);
  // }


}
