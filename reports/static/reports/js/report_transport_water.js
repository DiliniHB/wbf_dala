var app = angular.module('dlTWNatReportApp', ['ngPrint']);

app.controller("DlTWNatReportController", ['$scope','$http',function ($scope,$http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2vt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
    $scope.total_num_affected = 0;
    $scope.isDataAvailable = false;

$scope.checkIfNull = function()
{
    var isNull = $scope.dlWaterTransSumNat ? angular.equals({}, $scope.dlWaterTransSumNat.transport_water.Table_4) : true;
    console.log(isNull);
    return isNull;

}

$scope.fetchDlData = function(form){

    $scope.submitted = true;
    $scope.isDataAvailable = false;

    if(form.$valid){

        $http({
        method: "POST",
        url: '/dl_fetch_district_disagtn',
        data: angular.toJson({
        'table_name':'Table_4',
        'sector': 'transport_water',
        'com_data': {
                'incident': $scope.incident,
              },
               }),
        }).success(function(data) {

        console.log('load ', data);
        $scope.dlWaterTransSumNat = data;
        $scope.isDataAvailable = $scope.checkIfNull();

        })
}
}

 $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub +
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterDmgPubNational[$index].tot_dmg_public ?
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterDmgPubNational[$index].tot_dmg_public : 0 ;

         $scope.totaldpvt = $scope.totaldpvt +
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterDmgPvtNational[$index].tot_dmg_private ?
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterDmgPvtNational[$index].tot_dmg_private : 0 ;

         $scope.totalyear1pub = $scope.totalyear1pub +
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_1_pub ?
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_1_pub : 0 ;

         $scope.totalyear1pvt = $scope.totalyear1pvt +
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_1_pvt ?
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_1_pvt : 0 ;

         $scope.totalyear2pub = $scope.totalyear1pvt +
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_2_pub ?
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_2_pub : 0 ;

         $scope.totalyear2pvt = $scope.totalyear1pvt +
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_2_pvt ?
                         $scope.dlWaterTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_2_pvt : 0 ;


         $scope.finaltotalpublic =$scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;

    }

 }])
