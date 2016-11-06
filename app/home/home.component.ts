import * as angular from 'angular';
import {OAuthService} from 'angular2-oauth2/oauth-service';

class HomeController {
    public info: string = 'Welcome!';
}

export let HomeComponent: angular.IComponentOptions = {
    controller: HomeController,
    template: `
        <h1>{{$ctrl.info}}</h1>
    `
}