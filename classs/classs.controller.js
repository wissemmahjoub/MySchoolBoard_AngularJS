function ClasssControllerFN($scope,Classs,$http){
    $scope.classses=Classs.query();
    
    $scope.classs=new Classs();
    $scope.selectedIndex=null;
  
  //------------------------
  //** SelectClasss methode
  //------------------------
    $scope.selectClasss=function(_classs,_$index){
        $scope.selectedIndex=_$index;
        $scope.classs=_classs;
    }
 //------------------------
    //** addCLass methode
  //------------------------
    $scope.save=function(){
          $scope.classs.$save();
          $scope.classses.push($scope.classs);
      console.log("ADD WITH SUCCESS");
    }

  //------------------------
    //** updateclasss methode
  //------------------------
    $scope.update=function(){
        
        $scope.classs.$update();
    console.log("UPDATE WITH SUCCESS");
    
    }

  //------------------------
  //** DeleteModule methode
  //------------------------
  
  $scope.delete = function (classs) {
    
    $http({method: 'DELETE',url: 'http://myschoolboard2017.mybluemix.net/Class/DeleteApi',data :classs,
    headers: {'Content-type': 'application/json;charset=utf-8'}}).then(function() {

        var index = -1;
        var casesArr = eval($scope.classses);
        for( var i = 0; i < casesArr.length; i++ ) {
          if (casesArr[i].ClasssId === $scope.classs.ClasssId) {
            console.log(classs.ClasseName+"  - deleted with succes  ");
            index = i;
            
            break;
          }
        }
        if( index === -1 ) {
          alert( "Case not found" );
          console.log(classs.ClasseName+"  - Class Not Found  ");
        }
        $scope.classses.splice( index, 1 );
        
      });



     
    }
  //------------------------
  //** Clean Form  methode
  //------------------------
    $scope.reset=function(){
        $scope.classs=new Classs();
        $scope.selectedIndex=null;
    }
  //------------------------
  //** Changed  on clickup
  //------------------------
    $scope.changed=function(e){
        console.log("changed => ",$scope.classs.ClasseName,e);
    }




}
ClasssControllerFN.$inject=["$scope","Classs","$http"];
angular.module("Myschoolbord").controller("ClasssController",ClasssControllerFN);