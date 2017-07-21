import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";


@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css']
})
export class LoginComponent{

    username: string = '';
    hello: string = ''
    action: string = "Login";

    hide: boolean = false;

    constructor(private dataService: DataService){}

    login() : void {
        if(!this.dataService.isLogin()){
            this.action = "Logout";
            this.hide = true;
        } else {
            this.action = "Login";
            this.username = "";
            this.hello ="";
            this.dataService.logout();
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

