import {Component, OnInit} from '@angular/core';
import { Post } from 'D:\\git\\blog-spa\\app\\models\\post'
import { PostService} from '../../services/post.service';

@Component({
    selector: 'testpost',
    templateUrl: 'app/components/testpost/testpost.component.html',
    styleUrls: ['app/components/testpost/testpost.component.css'],
    providers: [PostService]
})
export class TestpostComponent implements OnInit{

    id:number = 1;
    header:string = "test";
    subheader:string = "another_test";
    image:string = "ds";
    content:string = "bla-bla";
    commentsCount:number = 12;

    items: Post[] = [];

    constructor(private postService: PostService){}

    addItem(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){

        this.postService.addData(id, header, subheader, image, content, commentsCount);
    }
    ngOnInit(){
        this.items = this.postService.getData();
    }

}
