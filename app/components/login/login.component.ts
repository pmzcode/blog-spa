import { Component } from '@angular/core';


@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css']
})
export class LoginComponent{
    authorized: boolean = false;
    username: string = '';
    hello: string = ''
    action: string = "Login";

    hide: boolean = false;

    login() : void {
        if(!this.authorized){
            this.action = "Logout";
            this.authorized = true;
            this.hide = true;
        } else {
            this.action = "Login";
            this.username = "";
            this.authorized = false;
            this.hello ="";

        }


    }

    onUsernameChange(test:string){
        this.username=test;
        this.hello ="Hello,";
    }

    onHideChange(test:boolean){
        this.hide=test;
    }
}

