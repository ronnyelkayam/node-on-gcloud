(function(angular, undefined) {
  angular.module("testApp1App.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);