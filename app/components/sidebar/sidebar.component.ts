import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'sidebar',
    templateUrl: 'app/components/sidebar/sidebar.component.html',
    styleUrls: ['app/components/sidebar/sidebar.component.css']
})
export class SidebarComponent{
    recentPosts: Post[];


    constructor(private dataService: DataService){}
    getRecentPosts(){
        this.recentPosts = this.dataService.getRecentPosts()
    }

    ngOnInit(){
        this.getRecentPosts();
    }
}
