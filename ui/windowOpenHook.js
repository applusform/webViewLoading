/*

window.open hook : changes window.open to IFRAME creation.


Created by ApplusForm.com on 2015.01.07

Permission is granted to copy, distribute, modify under the terms of ApplusForm License.

Copyright (C) 2015 ApplusForm.com. All rights reserved.

*/

function woh_open(url, target, feature, replace) {
    //alert(url);
    if (url == "popup.htm") {
        var iframe = document.createElement("IFRAME");
        iframe.src = url;
        iframe.frameborder = "0";
        iframe.style.position = "fixed";
        iframe.style.top = "0px";
        iframe.style.left = "0px";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.background = "#ffffff";

        document.body.appendChild(iframe);

        iframe.contentWindow.opener = window;

        iframe.contentWindow.close = function () {
            this.opener.document.body.removeChild(iframe);
        }
        return;
    }

    return window.__oldOpen(url, target, feature, replace);
}

function woh_installHook() {
    if (typeof(window.__oldOpen) == "undefined") {
        window.__oldOpen = window.open;
        window.open = woh_open;
    }
}

woh_installHook()();
