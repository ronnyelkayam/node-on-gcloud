'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data.list;
          this.loveCount = response.data.loveCount;
        });
    }
  }

  angular.module('testApp1App')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
