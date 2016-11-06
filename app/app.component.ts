import * as angular from 'angular';

class AppController {
}

export let AppComponent: angular.IComponentOptions = {
    controller: AppController,
    template: require('./app.component.html')
}