/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 *  
 */


/*
 *  Text editor component 
 */
define(function(){


    var wd = wd || {};
    wd.cfrUI = wd.cfrUI ||{
        

        siteMap: [
            /*{
                name: "Home",
                link: "home",
                sublinks: []
            },*/
            {
                name: "File Upload",
                link: "home",
                sublinks: []
            },
            {
                name: "File Browser",
                link: "browser",
                sublinks: []
            },
            {
                name: "About",
                link: "about",
                sublinks: []
            }
        ]    
    };

    return wd;
});
