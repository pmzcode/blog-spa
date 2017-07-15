import { Component } from '@angular/core';
var User = {name:"egor",password:"12345"};

@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css']
})
export class LoginComponent{
    authorized: boolean = false;
    username: string = '';
    action: string = "Login";

    login() : void {
        if(!this.authorized){
            this.action = "Logout";
            this.username = "Hello, " + User.name;
            this.authorized = true;
        } else {
            this.action = "Login";
            this.username = "";
            this.authorized = false;
        }
    }
}

