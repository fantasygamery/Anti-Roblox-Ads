// ==UserScript==
// @name         Anti roblox ADS
// @namespace    https://raw.githubusercontent.com/fantasygamery/Anti-Roblox-Ads/master/Main.js
// @description Removes roblox ads.
// @updateURL https://raw.githubusercontent.com/fantasygamery/Anti-Roblox-Ads/master/Main.js
// @downloadURL https://raw.githubusercontent.com/fantasygamery/Anti-Roblox-Ads/master/Main.js
// @icon https://lh5.googleusercontent.com/F4sgUyCCO3FxiBiylT9VO2Mv-qusZgsR9pwZcAhmCcEsogMTGZYoa0FwGd2CN2Tbpd8oSWul9Q=s128-h128-e365
// @homepage https://github.com/fantasygamery/Anti-Roblox-Ads
// @github https://github.com/fantasygamery/Anti-Roblox-Ads
// @include http://*/*
// @include https://*/*
// @version      0.1
// @author       Kelvin G.
// @match        http://tampermonkey.net/scripts.php
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

          try{var elem = document.getElementById('Skyscraper-Abp-Right');
        elem.parentNode.removeChild(elem);}catch(z){console.log(z);};
        try{var elem = document.getElementById('Skyscraper-Abp-Left');
        elem.removeChild(elem.childNodes[0]);}catch(z){console.log(z);};
        try{var elem = document.getElementById('ProfilePageAdDiv1');
        elem.parentNode.removeChild(elem);}catch(z){console.log(z);};
        try{var elem = document.getElementById('ProfilePageAdDiv2');
        elem.removeChild(elem.childNodes[0]);}catch(z){console.log(z);}
        $('#GamesPageRightColumnSidebar').remove();
        $('#Leaderboard-Abp').remove();
        $('#AdvertisingLeaderboard').remove();

})();
