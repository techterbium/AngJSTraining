var mod = angular.module("myApp", []);

mod.directive("myDiv", function () {

    var d = {};

    d.restrict = "E";
    d.template = "My First Element Directive";

    return d;
});


mod.directive("mySecondDirective", function () {

    return {
        restrict : "E",
        template : '<h3>Second Directive</h3>'
    };

});

mod.directive("firstAttribute", function () {
    return {
        restrict : "A",
        link : function ($scope, element, attributes) {
            element.text("First Attribute Value" + attributes.abc);
        }
    };

});

mod.directive("myName", function () {
    return {
        restrict : "E",
        scope : {},
        link : function (s,e,a) {
            console.log(a.firstname);
            s.fullname = a.firstname + "-" + a.lastname;
        },
        template : '<h3>{{fullname}}</h3>'
    }
});

mod.directive("namer", function () {
    return {
        restrict : "A",
        scope : {},
        link : function (s,e,a) {
            console.log(a.firstname + "-namer");
            s.fullname = a.firstname + "-" + a.lastname;
        },
        template : '<h3>{{fullname}}</h3>'
    }
});

mod.directive("cnamer", function () {
    return {
        restrict : "C",
        scope : {},
        link : function (s,e,a) {
            console.log("cnamer-" + a.firstname);
            s.fullname = a.firstname + "-" + a.lastname;
        },
        template : '<h3>{{fullname}}</h3>'
    }
});
