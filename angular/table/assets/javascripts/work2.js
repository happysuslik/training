/**
 * Created by Gix on 20.11.2015.
 */
var model = {
    user: "Root",
    recipes: [{ name: "Яишница", passed: true},
        { name: "Индейка", passed: true},
        { name: "Курица в духовке", passed: true},
        { name: "Яблочный пирог", passed: false}]
};

var recipeListApp = angular.module("recipeListApp", []);

recipeListApp.controller("RecipeCtrl", function ($scope) {
    $scope.data = model;
    $scope.addNewRecipe = function() {

        $scope.data.recipes.push({
            name: $scope.recipeName,
            passed: false
        });
        $scope.recipeName = "";
    };

    $scope.showText = function (passed) {
        return passed ? "Да" : "Нет";
    };

    $scope.setStyle = function (passed) {
        return passed ? "color:green" : "color:red; font-weight: bold";
    };
});