'use strict';

angular.module('newtabApp')
  .controller('MainCtrl', function ($scope, newTabStorage) {
    var links = $scope.links = newTabStorage.get();

    $scope.newLinkURL = '';
    $scope.newLinkName = '';

    $scope.removeLinkName = '';

    $scope.addLink = function () {
      var newLinkURL = $scope.newLinkURL;
      var newLinkName = $scope.newLinkName;

      links.push({
        url: newLinkURL,
        name: newLinkName
      });

      $scope.newLinkURL = '';
      $scope.newLinkName = '';

      newTabStorage.put(links);
    };

    $scope.removeLink = function () {
      var removeLinkName = $scope.removeLinkName;

      for ( var i = 0; i < links.length; i++ ) {
        if ( links[i].name === removeLinkName ) {
          links.splice( i, 1 );
        }
      }

      newTabStorage.put(links);
    }

  });
