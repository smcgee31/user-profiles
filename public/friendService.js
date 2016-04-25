angular.module('userProfiles')
.factory('friendService', function( $http ) {
    return {

        login: function( user ) {
        /* FIX ME */
            return $http.post('api/login', user);
        },

        getFriends: function() {
            /* FIX ME */
            return $http.get('api/profiles');
        }  // IS A PROMMISE NOT NEEDED?
    };
});
