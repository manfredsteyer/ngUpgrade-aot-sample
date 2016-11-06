import * as angular from 'angular';

export function createCityAsyncValidatorDDO($q: angular.IQService): angular.IDirective {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel: any) {

            ngModel.$asyncValidators.cityAsync = function(value) {

                return $q((resolve, reject) => {

                    setTimeout(() => {
                        resolve();
                    }, 500);

                });

            }

        }
    }

}