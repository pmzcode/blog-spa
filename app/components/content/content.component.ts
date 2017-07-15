import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import { PostService } from '../../services/post.service';

@Component({
    selector: 'content',
    templateUrl: 'app/components/content/content.component.html',
    styleUrls: ['app/components/content/content.component.css'],
    providers: [PostService]
})
export class ContentComponent implements OnInit{

    items: Post[] = [];

    constructor(private postService: PostService){}

    addItem(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){

        this.postService.addData(id, header, subheader, image, content, commentsCount);
    }
    ngOnInit(){
        this.items = this.postService.getData();
    }
}



