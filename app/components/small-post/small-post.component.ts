import {Component, Input} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Post} from "../../models/post";

@Component({
    selector: 'small-post',
    templateUrl: 'app/components/small-post/small-post.component.html',
    styleUrls: ['app/components/small-post/small-post.component.css']
})
export class SmallPostComponent{
    @Input() smallpost: Post;

    constructor(private dataService: DataService){}

}
