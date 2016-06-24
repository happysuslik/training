var model = {users: []};
angular.module("RegApp", [])
    .controller("RegAppCtrl", function ($scope) {
        $scope.requireValue = true;
        $scope.data = model;
        $scope.addNewUser = function (user) {
            $scope.data.users.push({
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.email,
                telephone: user.telephone,
                password: user.password
            });
            console.log($scope.data.users[0]);
        }


        $scope.getError = function (error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Input no be blank";
                } if (error.email) {
                    return "Input valid email please";
                }
            }
        }

    });