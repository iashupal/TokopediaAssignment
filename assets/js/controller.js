app.controller("whetherCtrl", function ($scope, whetherFactory, NgMap) {
    var corObj,tempObj;
    $scope.corArray = [];
    $scope.cityObj = {};
    $scope.whether = [];
    $scope.showInfo = function () {
        var cityName = $scope.cityname;
        $scope.cityname = "";
        var promise = whetherFactory.callServer(cityName);
        promise.then(function (data) {
            corObj = {
                "lat": data.data.city.coord.lat
                , "long": data.data.city.coord.lon
                , "city": data.data.city.name
                , "temp": data.data.list[0].main
                , "minTemp": data.data.list[0].main.temp_min
                , "maxTemp": data.data.list[0].main.temp_max
                , "humidity": data.data.list[0].main.humidity
            }
            $scope.corArray.push(corObj);
            var array = $scope.corArray[$scope.corArray.length - 1];
            console.log("array", array);
            tempObj = [corObj.temp.temp_max,corObj.temp.temp_min,corObj.temp.humidity];
            $scope.whether.push(tempObj);
            var tempArray = $scope.whether[$scope.whether.length - 1];
//            console.log("array",$scope.whether);
            console.log("tarray",tempArray);
            
//            $scope.myValues = [array.temp.temp_max, array.temp.temp_min, array.temp.humidity];
//            console.log("myvalues =  ", $scope.myValues);
            $scope.myObj = {
                series: [
                    {
                        lineColor: "#900000"
                        , marker: {
                            backgroundColor: "#dc3737"
                            , borderWidth: 1
                            , shadow: 0
                            , borderColor: "#f56b6b"
                        }
            }
            ]
            };
        }, function (error) {
            $scope.result = error;
        });
        $scope.zoom = 12;
        $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDB2xJgLWPTr3-hqGsjmGWS_ppoeR2toc0";
        NgMap.getMap().then(function (map) {});
    }
})