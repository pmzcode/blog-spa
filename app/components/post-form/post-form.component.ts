import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";


@Component({
    selector: 'post-form',
    templateUrl: 'app/components/post-form/post-form.component.html',
    styleUrls: ['app/components/post-form/post-form.component.css']
})
export class PostFormComponent{
    constructor(private dataService: DataService) {
    }


    addPost(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number) {
        this.dataService.addPost(id, header, subheader, image, content, commentsCount);
        console.log("ertgyhujikolp");
    }

}



