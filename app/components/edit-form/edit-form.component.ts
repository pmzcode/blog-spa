import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {DataService} from "../../services/data.service";
import {Post} from "../../models/post";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'edit-form',
    templateUrl: 'app/components/edit-form/edit-form.component.html',
    styleUrls: ['app/components/edit-form/edit-form.component.css']
})
export class EditFormComponent implements OnInit{

    post: Post;
    id: number;
    private subscription: Subscription;

    ngOnInit(): void {
        this.post = this.dataService.getPost(this.activateRoute.snapshot.params['id']);

    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    constructor(private dataService: DataService, private activateRoute: ActivatedRoute) {
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    editPost(header: string, subheader: string,content: string, tags:string) {
        this.dataService.editPost(this.post.id, header, subheader,content,tags);
    }





}
