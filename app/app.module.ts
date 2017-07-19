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
import { RouterModule } from '@angular/router'
import {DataService} from "./services/data.service";
import { CommentsComponent } from './components/comments/comments.component'
import { BigPostComponent } from './components/big-post/big-post.component'



@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeaderComponent, ContentComponent, FooterComponent, LogoComponent, NavbarComponent,
    LoginComponent, ModalComponent, SocialProfilesComponent, PostComponent, SmallPostComponent, SidebarComponent,
     PostFormComponent, CommentsComponent, BigPostComponent ],
    bootstrap:    [ AppComponent ],
    providers: [DataService]
})
export class AppModule { }