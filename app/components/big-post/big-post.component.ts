import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {Subscription} from "rxjs/Subscription";
import {DataService} from "../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../models/comment"

@Component({
    selector: 'big-post',
    templateUrl: 'app/components/big-post/big-post.component.html',
    styleUrls: ['app/components/big-post/big-post.component.css'],
})
export class BigPostComponent{
    post: Post;
    @Input() id: number;
    private subscription: Subscription;

    comments: Comment[];

    hide: boolean = false;


    openForm(){
        this.hide = !this.hide;
    }

    ngOnInit() {
        this.post = this.dataService.getPost(this.activateRoute.snapshot.params['id']);
        this.getComments();
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    constructor(private dataService: DataService, private activateRoute: ActivatedRoute,private router: Router) {
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }


    getComments(){
        this.comments = this.dataService.getComments(this.post.id);
    }


    editPost(){
        this.router.navigate(['edit',this.post.id]);
    }

    deletePost(){
        this.dataService.deletePost(this.post.id);
    }

    onHideChange(test:boolean){
        this.hide=test;
    }

    onCommentSend(comment: string){
        this.getComments();
        console.log("big post");
        console.log(this.comments);
    }


}


