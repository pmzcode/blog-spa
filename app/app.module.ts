import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FooterComponent }   from './components/footer/footer.component';
import { HeaderComponent }   from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { SocialProfilesComponent } from './components/social-profiles/social-profiles.component';
import { PostComponent } from './components/post/post.component';
import { SmallPostComponent } from './components/small-post/small-post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostFormComponent } from './components/post-form/post-form.component'
import {RouterModule, Routes} from '@angular/router'
import {DataService} from "./services/data.service";
import { CommentsComponent } from './components/comments/comments.component'
import { BigPostComponent } from './components/big-post/big-post.component'
import {HomeComponent} from "./components/home/home.component";
import { EditFormComponent } from "./components/edit-form/edit-form.component"
import {CommentFormComponent} from "./components/comment-form/comment-form.component";
import {SubcommentFormComponent} from "./components/subcomment-form/subcomment-form.component";



const appRoutes: Routes =[

    { path:'create', component: PostFormComponent},
    { path:'edit/:id', component: EditFormComponent},
    { path: ':id', component: BigPostComponent },
    { path: '**', component: ContentComponent }

];


@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HeaderComponent, ContentComponent, FooterComponent, LogoComponent, NavbarComponent,
    LoginComponent, ModalComponent, SocialProfilesComponent, PostComponent, SmallPostComponent, SidebarComponent,
     PostFormComponent, CommentsComponent, BigPostComponent, HomeComponent,  EditFormComponent, CommentFormComponent,
    SubcommentFormComponent ],
    bootstrap:    [ AppComponent ],
    providers: [DataService]
})
export class AppModule { }