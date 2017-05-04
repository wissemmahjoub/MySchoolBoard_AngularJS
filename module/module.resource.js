function ModuleFN($resource){
    var url="https://myschoolboardjavaapplication.mybluemix.net/rest/Module/:m";
   
	var m={module: "@module"}
    var customMethods={'update':{method:"PUT"}};
     
    var Module=$resource(url,m,customMethods);
    return Module;
}

ModuleFN.$inject=["$resource"];
angular.module("Myschoolbord").factory("Module",ModuleFN);