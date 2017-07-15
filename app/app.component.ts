import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `        
        <!--
<div class="app">
        <header></header>
        <div class="container ">
            <div class="row t1">
                <div class="col-lg-6 post-container">
                    <post></post>
                    <post></post>
                </div>
                <div class="col-lg-3 sidebar">
                    <sidebar></sidebar>
                </div>
            </div>
            <div class="row t2">
                <div class="col-lg-6">
                <small-post class="col-lg-6"></small-post>
                <small-post class="col-lg-6"></small-post>
                </div>
            </div>
        </div>
        <div class="footer col-lg-12">
            <footer></footer>
        </div>
        <social-profiles></social-profiles>
</div>
-->
        <post-form></post-form>
    `
})
export class AppComponent {

}