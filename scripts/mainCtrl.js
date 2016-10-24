angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = [
        {
            name: "Tom",
            age: 25,
            sex: "Male",
            hometown: "Springfield"
        },
        {
            name: "Sally",
            age: 21,
            sex: "Female",
            hometown: "Normal"
        },
        {
            name: "George",
            age: 30,
            sex: "Male",
            hometown: "Chicago"
        },
        {
            name: "Sarah",
            age: 24,
            sex: "Female",
            hometown: "Bloomington"
        }
    ];
});