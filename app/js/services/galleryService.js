/**
 * Created by Edgar Martinez on 8/13/13.
 */
define(['config'],function (config) {
    return function ($http) {
        return {
            save: function (data) {
                return $http.post('/someUrl', data);
            }
        }
    }
});