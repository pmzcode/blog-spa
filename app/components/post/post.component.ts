import { Component } from '@angular/core';
import { Post } from 'D:\\git\\blog-spa\\app\\models\\post'

@Component({
    selector: 'post',
    templateUrl: 'app/components/post/post.component.html',
    styleUrls: ['app/components/post/post.component.css']
})
export class PostComponent{
    posts: Post[] = [
        {id:1,header:"test", subheader: "another_test",image:"ds",content:"bla-bla",commentsCount:12},
        {id:2,header:"test", subheader: "another_test",image:"ds",content:"bla-bla",commentsCount:12}
    ];
}
