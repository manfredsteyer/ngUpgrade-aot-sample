import * as angular from 'angular';

export function createCityValidatorDDO(): angular.IDirective {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ngModel: any) {

            ngModel.$validators.city2 = function(value) {

                switch(value) {
                    case 'Graz':
                    case 'Hamburg':
                    case 'Frankfurt':
                        return true;
                }

                return false;

            }
        }
    };

}