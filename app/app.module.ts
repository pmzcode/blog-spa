import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FooterComponent }   from './footer.component';
import { HeaderComponent }   from './header.component';
import { ContainerComponent }   from './container.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeaderComponent, ContainerComponent, FooterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }