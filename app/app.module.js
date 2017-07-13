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
var footer_component_1 = require("./footer/footer.component");
var header_component_1 = require("./header/header.component");
var content_component_1 = require("./content/content.component");
var logo_component_1 = require("./logo/logo.component");
var navigation_component_1 = require("./navigation/navigation.component");
var login_component_1 = require("./login/login.component");
var modal_component_1 = require("./modal/modal.component");
var social_profiles_component_1 = require("./social-profiles/social-profiles.component");
var post_component_1 = require("./post/post.component");
var small_post_component_1 = require("./small-post/small-post.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, content_component_1.ContentComponent, footer_component_1.FooterComponent, logo_component_1.LogoComponent, navigation_component_1.NavbarComponent,
            login_component_1.LoginComponent, modal_component_1.ModalComponent, social_profiles_component_1.SocialProfilesComponent, post_component_1.PostComponent, small_post_component_1.SmallPostComponent, sidebar_component_1.SidebarComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map