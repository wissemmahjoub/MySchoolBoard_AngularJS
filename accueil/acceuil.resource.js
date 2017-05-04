function AcceuilFN($resource){
   
     
    var Acceuil=$resource();
    return Acceuil;
}

AcceuilFN.$inject=["$resource"];
angular.module("Myschoolbord").factory("Acceuil",AcceuilFN);
