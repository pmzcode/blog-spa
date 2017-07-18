import {Component, Input} from '@angular/core';

import {DataService} from "../../services/data.service";
import {Post} from "../../models/post";

@Component({
    selector: 'post',
    templateUrl: 'app/components/post/post.component.html',
    styleUrls: ['app/components/post/post.component.css']
})
export class PostComponent{
    @Input() post: Post;

    constructor(private dataService: DataService){}

    deletePost(){
        this.dataService.deletePost(this.post.id);
    }
}
