var app= angular.module('unitCostMiniHealthSysApp', [])

app.controller('unitCostMiniHealthSysController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'health': {
            'Table_3': {
                'BucMarStructure': [{
                    particulars : '1 Floor Structure',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : '2-3 Floors Structure',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'More Than 3 Floors Structure',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }],
                'BucMarSupplies': [{
                    particulars : 'Medicines',
                    teaching_hospital: null,
                    provincial_general_hospital: null,
                    district_general_hospital: null,
                }, {
                    particulars : 'Medical Supplies',
                    teaching_hospital: null,
                    provincial_general_hospital: null,
                    district_general_hospital: null,
                }, {
                    particulars : 'Others',
                    teaching_hospital: null,
                    provincial_general_hospital: null,
                    district_general_hospital: null,
                }],
                'BucMarMequipment' : [{
                    particulars : 'CT Scan',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                }, {
                    particulars : 'X-ray Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                }, {
                    particulars : 'MRI Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                }, {
                    particulars : 'Other Equipment (Specify)',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                }],
                'BucMarOassets' : [{
                    particulars : 'Computers',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Vehicles',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Furniture',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Office Equipment',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Others',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }],
                //----
                'BucMarcStructures': [{
                    particulars : 'Roof',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Wall',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Flooring',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }],
                'BucMarcMequipment' : [{
                    particulars : 'CT Scan',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                }, {
                    particulars : 'X-ray Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                }, {
                    particulars : 'MRI Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                }, {
                    particulars : 'Other Equipment (Specify)',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                 }],
                'BucMarcOassets' : [{
                    particulars : 'Computers',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Vehicles',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Furniture',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Office Equipment',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Others',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                }],
                'BucMarcCrpm': [{
                    particulars : 'Average Construction Period',
                    teaching_hospital: null,
                    provincial_general_hospital: null,
                    district_general_hospital: null,
                    office : null,
                    other : null,
                }, {
                    particulars : 'Average Repair Period',
                    teaching_hospital: null,
                    provincial_general_hospital: null,
                    district_general_hospital: null,
                    office : null,
                    other : null,
                }]
            }
        }
    }

    $scope.bsUnitCostMiniHealthSys = init_data;

    $scope.saveBucMarStructure = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.data);
            $http({
                method : 'POST',
                url : '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsUnitCostMiniHealthSys,
                    'com_data':{
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
            console.log(response);
            if(response.data == 'False')
                $scope.is_valid_data = false;
            else
                $("#modal-container-239453").modal('show');

        }, function errorCallback(response) {

            console.log(response);
        });
        }
    }

    $scope.blDataEdit = function(form){
        $scope.is_edit = true;
         $scope.submitted = true;
        if(form.$valid) {
        $http({
            method: "POST",
            url: '/bs_fetch_edit_data',
            data: angular.toJson({
                'table_name':  'Table_3',
                'sector': 'health',
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.baselineDate,

                },
            }),
        }).success(function(data) {

            console.log(data);

            $scope.bsUnitCostMiniHealthSys = data;
        })
    }
    }


//    $scope.cancelEdit = function() {
//         $scope.is_edit = false;
//         $scope.bsUnitCostMiniHealthSys = init_data;
//            dataType: 'json',
//        }).then(function mySucces(response) {
//
//            //if data sent to server side method successfull
//	$("#modal-container-239453").modal('show');
//            console.log(response);
//
//            }, function myError(response) {
//                //if data sent to server side method unsuccessfull
//                console.log(response);
//        });
//    }



    $scope.cancelEdit = function()
{
     $scope.is_edit = false;
     $scope.bsUnitCostMiniHealthSys = init_data;
}

    // get relevant base-line data for calculations
//    function getBsData()
//    {
//        $http({
//        method: 'POST',
//        url: '/base_line/bs_get_data',
//        contentType: 'application/json; charset=utf-8',
//        data: angular.toJson({
//            'db_tables': ['BucOmarStructure', 'BhsComDiseases'],
//        }),
//        dataType: 'json',
//        }).then(function successCallback(response) {
//            // for calculations base_hospital - row wise , particulars = 1 Floor Structure column wise
//            var data = response.data;
//            angular.forEach(data, function(value, key) {
//              $scope.bs_data[key] = JSON.parse(value);
//            });
//
//            console.log($scope.bs_data);
//
//        }, function errorCallback(response) {
//
//            console.log(response);
//        });
//    }


//    $scope.init = function init()
//    {
//      getBsData();
//    }
}])
