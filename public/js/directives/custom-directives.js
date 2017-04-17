angular.module('customDirectives', [])
    .directive('buttonLinkDefault', () => {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            value: '@',
            url : '@'
        }
        ddo.template = '<a href="{{url}}" type="button" class="btn btn-default btn-lg btn-block">{{value}}</a>';

        return ddo;
    })
    .directive('buttonPrimary', () => {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            value: '@',
            action : '&',
            active : '='
        }
        ddo.template = '<button type="button" class="btn btn-primary btn-block" ng-click="action()" ng-disabled="{{active}}">{{value}}</button>';

        return ddo;
    })
    .directive('pageTitle', () => {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            value: '@'
        };
        ddo.template = ' <h3 style="text-align: center">{{value}}</h3>';           
        
        return ddo;
    });