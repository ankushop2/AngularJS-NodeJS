var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http){
    $scope.submit = function() {
        var a = $scope.uname;
        var b = $scope.password;
        console.log(a);
        console.log(b);
        var data = { Username:a, Password:b };
        $http.post('/server',data).success(function(d){
                console.log("Retrieved Data"+JSON.stringify(d));
            }).error(function(error){
                console.log(error);
        });
    }
});
