import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import { PostService } from '../../services/post.service';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'content',
    templateUrl: 'app/components/content/content.component.html',
    styleUrls: ['app/components/content/content.component.css'],
})
export class ContentComponent implements OnInit{

    posts: Post[];

    constructor(private dataService: DataService){}



    getPosts(): void {
        this.posts = this.dataService.getPosts()

    }

    addPost(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){
        this.dataService.addPost(id, header, subheader, image, content, commentsCount)
    }
    ngOnInit(){
        this.getPosts();
    }
}



