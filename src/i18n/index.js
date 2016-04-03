/* 
* @Author: caoke
* @Date:   2015-09-18 17:13:44
* @Last Modified by:   caoke
* @Last Modified time: 2015-09-21 18:30:22
*/

var lang = require('./{locale}.js');
var i18nHelper = require('i18n-helper')(lang);

if (__LOCAL__) {
    i18nHelper.keyNotFound = function(key) {
        return '【`' + key + '` is not found!】';
    };
}

module.exports = i18nHelper;
