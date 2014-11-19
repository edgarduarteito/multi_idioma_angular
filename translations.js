angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_US', {"Abierto":"open","Adios":"bye","Hello":"Hi","Hola {{ name }} que asé en {{ sitio }}":"hello { name }} Welcome{{ sitio }}","Test":"test","one task":["one task","{{count}} tasks"],"plh_nombre":"Write your name"});
/* jshint +W100 */
}]);