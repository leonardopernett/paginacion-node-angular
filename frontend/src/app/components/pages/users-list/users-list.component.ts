import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {take, tap} from 'rxjs/operators'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:any[] = []
  page = 1
  constructor(private userService:UserService, private element:ElementRef) { }

  ngOnInit(): void {
    this.getuser()
  }


  getuser(){
   this.userService.getUsers(1).pipe(
     take(1),
     tap((res:any)=>{
       this.users = res
     })
   ).subscribe()
  }

    preview(){ 
      if(this.page==1){
         this.element.nativeElement.getElementById('preview').disabled= true
          return

      }else{
          this.page --
          this.userService.getUsers(this.page).subscribe((res:any)=>{
            this.users=res
        })
      }
    }

    next(){
      if(this.users.length == 0){
        return
      }else{
        this.page ++
        this.userService.getUsers(this.page).subscribe((res:any)=>{
            this.users = res
        })
      }
    
    }
}