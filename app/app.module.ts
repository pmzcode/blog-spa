import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FooterComponent }   from './footer/footer.component';
import { HeaderComponent }   from './header/header.component';
import { ContentComponent } from './content/content.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeaderComponent, ContentComponent, FooterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }