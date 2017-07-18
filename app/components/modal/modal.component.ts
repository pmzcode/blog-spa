import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'modal',
    templateUrl: 'app/components/modal/modal.component.html',
    styleUrls: ['app/components/modal/modal.component.css']
})
export class ModalComponent{


    @Output() onUsernameChange = new EventEmitter<string>();
    @Output() onHideChange = new EventEmitter<boolean>();


    constructor(private dataService: DataService){}

    login(username: string, password: string){
        var username = this.dataService.login(username, password)
        this.onUsernameChange.emit(username);
        this.onHideChange.emit(false);
    }

}

