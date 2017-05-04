function HomeworkFN($resource){
    var url="https://myschoolboardjavaapplication.mybluemix.net/rest/Homework/:m";
   
    var m={homework: "@homework"}
    var customMethods={'update':{method:"PUT"}};
     
    var Homework=$resource(url,m,customMethods);
    return Homework;
}

HomeworkFN.$inject=["$resource"];
angular.module("Myschoolbord").factory("Homework",HomeworkFN);
