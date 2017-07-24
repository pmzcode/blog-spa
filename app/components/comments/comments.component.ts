import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Comment} from "../../models/comment"

@Component({
    selector: 'comments',
    templateUrl: 'app/components/comments/comments.component.html',
    styleUrls: ['app/components/comments/comments.component.css'],
})
export class CommentsComponent{

    @Output() onSubCommentSend = new EventEmitter<string>();

    hide: boolean = false;
    @Input() comment: Comment;

    comments_level_2: Comment[];

    constructor(private dataService: DataService){}


    ngOnInit() {
        this.getSubComments();
    }

    getSubComments(){
        this.comments_level_2 = this.dataService.getSubComments(this.comment.id);
        console.log(this.comments_level_2);
    }

    addSubcomment(){
        this.hide = !this.hide;
        //this.dataService.addSubcomment();
    }

    onHideChange(test:boolean){
        this.hide=test;
    }

    onSubcommentSend(comment: string){
    this.onSubCommentSend.emit("test");
}

}