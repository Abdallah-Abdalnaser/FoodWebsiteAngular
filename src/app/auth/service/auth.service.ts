import { Injectable } from '@angular/core';

interface user {
  firstName:string,
  lastName:string,
  address:string,
  userName:string,
  email:string,
  password:string,
  confirmPassword:string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:user[]=[
    {firstName:'abdallah',lastName:'abdalnaser',address:'89Mohamedshata',userName:'abdallahabdalnaser',email:'abdallahalbhare2002@gmail.com',password:'01200106763Aa*',confirmPassword:'01200106763Aa*'},
  ]
  constructor() { }


  addUser(user:user){
    this.users.push(user);
    console.log(this.users);
  }

  checkIfUserExist(data:{email:string,password:string}):boolean {
    for (let user = 0; user < this.users.length; user++) {
      if (this.users[user].email === data.email) {
        if (this.users[user].password === data.password) {
          return true;
        }
      }
    }
    return false
  }
}
