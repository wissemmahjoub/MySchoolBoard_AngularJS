function ModuleControllerFN($scope,Module,$http){
    $scope.modules=Module.query();
    
    $scope.module=new Module();
    $scope.selectedIndex=null;
  
  //------------------------
  //** SelectModule methode
  //------------------------
    $scope.selectModule=function(_module,_$index){
        $scope.selectedIndex=_$index;
        $scope.module=_module;
    }
  //------------------------
    //** addModule methode
  //------------------------
    $scope.save=function(){
          $scope.module.$save();
          $scope.modules.push($scope.module);
      console.log("ADD WITH SUCCESS");
    }

  //------------------------
    //** updateModule methode
  //------------------------
    $scope.update=function(){
      
        $scope.module.$update();
    console.log("UPDATE WITH SUCCESS");
    
    }

  //------------------------
  //** DeleteModule methode
  //------------------------
  
  $scope.delete = function (module) {
    
    $http({method: 'DELETE',url: 'http://myschoolboard2017.mybluemix.net/Module/DeleteApii',data :module,
    headers: {'Content-type': 'application/json;charset=utf-8'}}).then(function() {

        var index = -1;
        var casesArr = eval($scope.modules);
        for( var i = 0; i < casesArr.length; i++ ) {
          if (casesArr[i].ModuleId === $scope.module.ModuleId) {
            console.log(module.ModuleName+"  - deleted with succes  ");
            index = i;
            
            break;
          }
        }
        if( index === -1 ) {
          alert( "Case not found" );
          console.log(module.ModuleName+"  - Module Not Found  ");
        }
        $scope.modules.splice( index, 1 );
        
      });



     
    }
  //------------------------
  //** Clean Form  methode
  //------------------------
    $scope.reset=function(){
        $scope.module=new Module();
        $scope.selectedIndex=null;
    }
  //------------------------
  //** Changed  on clickup
  //------------------------
    $scope.changed=function(e){
        console.log("changed => ",$scope.module.ModuleName,e);
    }


}
ModuleControllerFN.$inject=["$scope","Module","$http"];
angular.module("Myschoolbord").controller("ModuleController",ModuleControllerFN);