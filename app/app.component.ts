import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `

        <div class="app">
            <header></header>
            <div class="container ">
            <router-outlet></router-outlet>
            </div>
            <div class="footer col-lg-12">
                <footer></footer>
            </div>
            <social-profiles></social-profiles>
        </div>
        
    `
})
export class AppComponent {

}