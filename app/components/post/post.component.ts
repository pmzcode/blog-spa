import {Component, Input, OnInit} from '@angular/core';

import {DataService} from "../../services/data.service";
import {Post} from "../../models/post";

@Component({
    selector: 'post',
    templateUrl: 'app/components/post/post.component.html',
    styleUrls: ['app/components/post/post.component.css']
})
export class PostComponent implements OnInit{

    @Input() post: Post;

    hide: boolean = false;

    constructor(private dataService: DataService){}

    deletePost(){
        this.dataService.deletePost(this.post.id);
    }

    ngOnInit(): void {
        if(this.dataService.isLogin()){
            this.hide = true;
        }
    }

    isHide(): boolean{
        return !this.dataService.isLogin();
    }
}
