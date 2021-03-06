angular.module('uSpeak.languageSource', [])

.controller('languageSourceController', function($scope, languageService, $state){
  $scope.languages = [['English','us'],['Chinese','cn'],['Spanish','es'],['French','fr'],['Italian','it']];

  $scope.userSelect = function(lang){
    languageService.language.source = lang[0];
    $state.go('languageTarget');
  };

});
