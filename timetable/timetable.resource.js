function TimetableFN($resource){
    var url="https://myschoolboardjavaapplication.mybluemix.net/rest/TimeTable/:m";
   
	var m={timetable: "@timetable"}
    var customMethods={'update':{method:"PUT"}};
     
    var Timetable=$resource(url,m,customMethods);
    return Timetable;
}

TimetableFN.$inject=["$resource"];
angular.module("Myschoolbord").factory("Timetable",TimetableFN);

