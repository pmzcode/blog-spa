import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'modal',
    templateUrl: 'app/components/modal/modal.component.html',
    styleUrls: ['app/components/modal/modal.component.css']
})
export class ModalComponent{


    username: string; // это вверх передать


    hide: boolean = false; // это вверх передать



    constructor(private dataService: DataService){}

    login(username: string, password: string){
        username = this.dataService.login(username, password)
    }

}

