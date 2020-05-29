import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from '../models/user.model';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user= new user();
  constructor( 
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){   
      const user={...this.user};
    this.userService.addUser(user).subscribe((res: any)=>{
      this.router.navigate(['/users',res.data.id]);
      
    });
    
    }

     
    }
    