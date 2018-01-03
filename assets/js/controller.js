app.controller("whetherCtrl", function ($scope, whetherFactory, NgMap) {
    var corObj;
    $scope.corArray = [];
    $scope.weather = [];
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
            $scope.weather.push([data.data.list[0].main.temp_min, data.data.list[0].main.temp_max, data.data.list[0].main.humidity]);
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
});