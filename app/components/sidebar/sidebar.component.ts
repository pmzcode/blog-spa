import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {DataService} from "../../services/data.service";
import {Tag} from "../../models/tag";


@Component({
    selector: 'sidebar',
    templateUrl: 'app/components/sidebar/sidebar.component.html',
    styleUrls: ['app/components/sidebar/sidebar.component.css']
})
export class SidebarComponent{
    recentPosts: Post[];
    popularTags: Tag[];


    constructor(private dataService: DataService){}
    getRecentPosts(){
        this.recentPosts = this.dataService.getRecentPosts();
    }

    getPopularTags(){
        this.popularTags = this.dataService.getPopularTags()
    }

    ngOnInit(){
        this.getRecentPosts();
        this.getPopularTags();
    }
}
