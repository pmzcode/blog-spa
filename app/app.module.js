"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var footer_component_1 = require("./components/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var content_component_1 = require("./components/content/content.component");
var logo_component_1 = require("./components/logo/logo.component");
var navigation_component_1 = require("./components/navigation/navigation.component");
var login_component_1 = require("./components/login/login.component");
var modal_component_1 = require("./components/modal/modal.component");
var social_profiles_component_1 = require("./components/social-profiles/social-profiles.component");
var post_component_1 = require("./components/post/post.component");
var small_post_component_1 = require("./components/small-post/small-post.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var post_form_component_1 = require("./components/post-form/post-form.component");
var router_1 = require("@angular/router");
var data_service_1 = require("./services/data.service");
var comments_component_1 = require("./components/comments/comments.component");
var big_post_component_1 = require("./components/big-post/big-post.component");
var home_component_1 = require("./components/home/home.component");
var appRoutes = [
    { path: 'create', component: post_form_component_1.PostFormComponent },
    { path: ':id', component: big_post_component_1.BigPostComponent },
    { path: '**', component: content_component_1.ContentComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, content_component_1.ContentComponent, footer_component_1.FooterComponent, logo_component_1.LogoComponent, navigation_component_1.NavbarComponent,
            login_component_1.LoginComponent, modal_component_1.ModalComponent, social_profiles_component_1.SocialProfilesComponent, post_component_1.PostComponent, small_post_component_1.SmallPostComponent, sidebar_component_1.SidebarComponent,
            post_form_component_1.PostFormComponent, comments_component_1.CommentsComponent, big_post_component_1.BigPostComponent, home_component_1.HomeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [data_service_1.DataService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map