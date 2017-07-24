import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from "../../services/data.service";


@Component({
    selector: 'subcomment-form',
    templateUrl: 'app/components/subcomment-form/subcomment-form.component.html',
    styleUrls: ['app/components/subcomment-form/subcomment-form.component.css']
})
export class SubcommentFormComponent{
    @Output() onHideChange = new EventEmitter<boolean>();
    @Output() onSubcommentSend = new EventEmitter<string>();

    constructor(private dataService: DataService){}

    openForm(){
        this.onHideChange.emit(false);
    }

    sendComment(comment: string){
        this.dataService.addSubcomment(1,3,comment);
        this.onHideChange.emit(false);
        this.onSubcommentSend.emit("test");
    }
}

