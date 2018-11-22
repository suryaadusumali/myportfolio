var app = angular.module('myApp', []);
app.controller('appCtrl', function($scope, $http) {
    $scope.submitSearch = function (isValid){
        $scope.display = "";
        if (isValid) {
            $scope.giphyurl = "https://api.giphy.com/v1/gifs/search?api_key=pyXt1cLJt9eQcBXEXuwPPOT0kIMvSvV5&q="+$scope.textname+"&limit=24&offset=0&rating=&lang=en";

            $http.get($scope.giphyurl).then(function (response) {
                $scope.giphyData = response.data;
                console.log($scope.giphyData);
                
                if($scope.giphyData.data.length > 0){
                    $scope.display = "Result";
                }
                else{
                    $scope.display = "Not found";
                }
            });        
        }
        else{
            $scope.display = "Data Invalid";
        }
    };
});
