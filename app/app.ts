import './app.module';
import './app.routes';
import {PlatformRef, NgModuleFactory} from "@angular/core";
import {UpgradeModule} from "@angular/upgrade/static";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModuleNgFactory} from "../aot/app/app2.module.ngfactory";

export function bootstrap(
    platform: PlatformRef, Ng2Module: NgModuleFactory<{}>, element: Element, ng1ModuleName: string) {
    // We bootstrap the Angular 2 module first; then when it is ready (async)
    // We bootstrap the Angular 1 module on the bootstrap element
    return platform.bootstrapModuleFactory(Ng2Module).then(ref => {
        let upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(element, [ng1ModuleName]);
        return upgrade;
    });
}

bootstrap(
    platformBrowserDynamic(),
    AppModuleNgFactory,
    document.body,
    'flight-app')
    .catch(err => console.error(err));