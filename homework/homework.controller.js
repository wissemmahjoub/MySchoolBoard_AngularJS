function HomeworkControllerFN($scope,Homework,$http){
    $scope.homeworks=Homework.query();
    
    $scope.homework=new Homework();
    $scope.selectedIndex=null;
  
  //------------------------
  //** Selecthomework methode
  //------------------------
    $scope.selectHomework=function(_homework,_$index){
        $scope.selectedIndex=_$index;
        $scope.homework=_homework;
    }
	
 //------------------------
    //** addhomework methode
  //------------------------
    $scope.save=function(){
          $scope.homework.$save();
          $scope.homeworks.push($scope.homework);
      console.log("ADD WITH SUCCESS");
    }

 //------------------------
    //** updateHomwework methode
  //------------------------
    $scope.update=function(){
        
        $scope.homework.$update();
    console.log("UPDATE WITH SUCCESS");
    
    }
  //------------------------
  //** Deletehomework methode
  //------------------------
  
  $scope.delete = function (homework) {
    
    $http({method: 'DELETE',url: 'http://myschoolboard2017.mybluemix.net/homework/DeleteApi',data :homework,
    headers: {'Content-type': 'application/json;charset=utf-8'}}).then(function() {
        var index = -1;
        var casesArr = eval($scope.homeworks);
        for( var i = 0; i < casesArr.length; i++ ) {
          if (casesArr[i].HomeworkId === $scope.homework.HomeworkId) {
            console.log(homework.Label+"  - deleted with succes  ");
            index = i;
            
            break;
          }
        }
        if( index === -1 ) {
          alert( "Case not found" );
          console.log(homework.Label+"  - Homework Not Found  ");
        }
        $scope.homeworks.splice( index, 1 );
      });
    }
  //------------------------
  //** Clean Form  methode
  //------------------------
    $scope.reset=function(){
        $scope.homework=new Homework();
        $scope.selectedIndex=null;
    }
  //------------------------
  //** Changed  on clickup
  //------------------------
    $scope.changed=function(e){
        console.log("changed => ",$scope.homework.Label,e);
    }
}
HomeworkControllerFN.$inject=["$scope","Homework","$http"];
angular.module("Myschoolbord").controller("HomeworkController",HomeworkControllerFN);