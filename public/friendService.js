angular.module('userProfiles')
.factory('friendService', function( $http ) {
    return {

        login: function( user ) {
        /* FIX ME */
            return $http({
                method: post,

            });
        },

        getFriends: function() {
        /* FIX ME */
        return $http({
            method: GET,
        });
        }
    };
});
