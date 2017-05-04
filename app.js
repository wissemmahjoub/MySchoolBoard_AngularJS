function configFN($routeProvider){
    $routeProvider
        .when("/homework",{
            controller:"HomeworkController",
            templateUrl:"./views/homework.html"
        })
		.when("/Module",{
            controller:"ModuleController",
            templateUrl:"./views/module.html"
        })
        .when("/Classs",{
            controller:"ClasssController",
            templateUrl:"./views/classs.html"
        })
         .when("/timetable",{
            controller:"TimetableController",
            templateUrl:"./views/timetable.html"
        })
		.when("/accueil",{
            controller:"accueilController",
            templateUrl:"./views/accueil.html"
        })
        .otherwise({redirectTo:"/accueil"});
}

angular
    .module("Myschoolbord",["ngRoute","ngResource"])
    .config(configFN);