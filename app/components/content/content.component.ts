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
    smallposts: Post[];

    constructor(private dataService: DataService){}



    getPosts(): void {
        //this.posts =
        let buff: Post[] = this.dataService.getPosts();

        this.posts = buff;
        this.smallposts = buff.slice(buff.length-2)

        for(var i=0;i< this.posts.length;i++){
            console.log("Content:"+this.posts[i].id+" "+ this.posts[i].header +"cc:"+i);
        }
        console.log("-------------------------------------");

    }

    addPost(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){
        this.dataService.addPost(id, header, subheader, image, content, commentsCount)
    }
    ngOnInit(){
        this.getPosts();
    }
}



