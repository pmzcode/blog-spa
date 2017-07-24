import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Comment} from "../../models/comment"

@Component({
    selector: 'comment-form',
    templateUrl: 'app/components/comment-form/comment-form.component.html',
    styleUrls: ['app/components/comment-form/comment-form.component.css'],
})
export class CommentFormComponent{
    @Output() onCommentSend = new EventEmitter<string>();
    @Output() onHideChange = new EventEmitter<boolean>();

    postId:number;

    constructor(private dataService: DataService){}

    openForm(){
        this.onHideChange.emit(false);
    }

    sendComment(comment: string){
        this.dataService.addComment(1, "Egor", "","",comment);
        this.onHideChange.emit(false);
        this.onCommentSend.emit("test");
        //this.onSubcommentSend.emit("test");
    }


}