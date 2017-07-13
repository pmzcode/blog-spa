import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FooterComponent }   from './footer/footer.component';
import { HeaderComponent }   from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component'
import { ModalComponent } from './modal/modal.component'
import { SocialProfilesComponent } from './social-profiles/social-profiles.component'
import { PostComponent } from './post/post.component'
import { SmallPostComponent } from './small-post/small-post.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeaderComponent, ContentComponent, FooterComponent, LogoComponent, NavbarComponent,
    LoginComponent, ModalComponent, SocialProfilesComponent, PostComponent, SmallPostComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }