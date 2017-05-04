function TimetableControllerFN($scope,Timetable,$http){
    $scope.timetables=Timetable.query();
    
    $scope.timetable=new Timetable();
    $scope.selectedIndex=null;
  
  //------------------------
  //** SelectTimeTable methode
  //------------------------
    $scope.selectTimetable=function(_timetable,_$index){
        $scope.selectedIndex=_$index;
        $scope.timetable=_timetable;
    }

 //------------------------
    //** addTimeTable methode
  //------------------------
    $scope.save=function(){
          $scope.timetable.$save();
          $scope.timetables.push($scope.timetable);
      console.log("ADD WITH SUCCESS");
    }

  //------------------------
    //** updatetimetable methode
  //------------------------
    $scope.update=function(){
        
        $scope.timetable.$update();
    console.log("UPDATE WITH SUCCESS");
    
    }

  //------------------------
  //** DeleteTimeTable methode
  //------------------------
  
  $scope.delete = function (timetable) {
    
    $http({method: 'DELETE',url: 'http://myschoolboard2017.mybluemix.net/TimeTable/DeleteApi',data :timetable,
    headers: {'Content-type': 'application/json;charset=utf-8'}}).then(function() {

        var index = -1;
        var casesArr = eval($scope.timetables);
        for( var i = 0; i < casesArr.length; i++ ) {
          if (casesArr[i].TimeTableId === $scope.timetable.TimeTableId) {
            console.log(timetable.TimeTableId+"  - deleted with succes  ");
            index = i;
            
            break;
          }
        }
        if( index === -1 ) {
          alert( "Case not found" );
          console.log(timetable.TimeTableId+"  - timetable Not Found  ");
        }
        $scope.timetables.splice( index, 1 );
        
      });



     
    }
  //------------------------
  //** Clean Form  methode
  //------------------------
    $scope.reset=function(){
        $scope.timetable=new Timetable();
        $scope.selectedIndex=null;
    }
  //------------------------
  //** Changed  on clickup
  //------------------------
    $scope.changed=function(e){
        console.log("changed => ",$scope.timetable.TimeTableId,e);
    }



}
TimetableControllerFN.$inject=["$scope","Timetable","$http"];
angular.module("Myschoolbord").controller("TimetableController",TimetableControllerFN);

