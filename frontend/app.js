'use strict';

angular.module('rssApp', [])
.controller('rssCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get("https://vw1lgnll4j.execute-api.us-east-1.amazonaws.com/dev/feed")
    .then(function(response) {
        $scope.rssData = response.data.episodes;
    });

}]);