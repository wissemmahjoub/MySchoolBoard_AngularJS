function ClasssFN($resource){
    var url="https://myschoolboardjavaapplication.mybluemix.net/rest/Class/:m";
   
	var m={classs: "@classs"}
    var customMethods={'update':{method:"PUT"}};
     
    var Classs=$resource(url,m,customMethods);
    return Classs;
}

ClasssFN.$inject=["$resource"];
angular.module("Myschoolbord").factory("Classs",ClasssFN);