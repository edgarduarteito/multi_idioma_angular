var app = angular.module("app", ['gettext']);
 
app.controller('langCtrl', ['$scope', 'gettextCatalog', function($scope, gettextCatalog)
{
    $scope.name = "Israel";
    $scope.sitio = "Martorell";
    $scope.count = 6;
    $scope.langs = ["es_ES","en_US"];
    $scope.lang = "es_ES";
 
    $scope.updateLang = function()
    {
        gettextCatalog.setCurrentLanguage($scope.lang);
    }
}])
 
app.run(['gettextCatalog', function (gettextCatalog) 
{
    gettextCatalog.currentLanguage = "es_ES";
}]);

