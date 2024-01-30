// ==UserScript==
// @name         -自用
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ddys.art/*
// @namespace    https://greasyfork.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @license           Anti 996 License; https://github.com/axetroy/anti-redirect/blob/master/LICENSE
// @run-at      document-end
// ==/UserScript==

(function () {
    var url = document.URL;

    if (url.indexOf('ddys.') != -1) {
        console.log("======================================================  start..")
        let ad_corner = document.querySelector("#fkasjgf > span:nth-child(1) > a:nth-child(1) > img:nth-child(1)");
        while (ad_corner) {
            console.info('detect ad_corner')
            ad_corner.setAttribute('src', '')
            break;
        }
        console.info('remove empty frame')
        document.getElementById("afc_sidebar_2842").style.position = 'static';
        // document.getElementById("notification-1501").remove();

        let ad_header = document.querySelector("#kasjbgih > a:nth-child(1) > img:nth-child(1)");
        while (ad_header) {
            console.info('detect ad_header')
            ad_header.removeAttribute("src");
            break;
        }
    } else if (url.indexOf('taobao.com') != -1) {
        const observer = new MutationObserver(() => {
                console.log("监听变动");
                let adElement = document.querySelector('[class^="SalesPoint--subIconWrapper"] > img');
                if (adElement) {
                    console.log("执行清除 total" + topEle.childNodes.length);
                    // var itemList = document.querySelector('[class^="Content--contentInner--"]');
                    // itemList.childNodes[2].remove();
                    // itemList.childNodes[1].remove();
                    // itemList.childNodes[0].remove();
                    // for (let i = 0; i < 3; i++) {
                    //     let childNode = itemList.childNodes[i];
                    //     childNode.innerHTML = '';
                    // }
                    let allAdElement = document.querySelectorAll('[class^="SalesPoint--subIconWrapper"] > img');
                    allAdElement.forEach(value => {
                        value.parentElement.parentElement.parentElement.parentElement.innerHTML = '';
                    })
                    console.log("执行清除,finished  total" + topEle.childNodes.length);
                    // observer.disconnect();
                }
            }
        );
        const topEle = document.querySelector('[class^="Content--contentInner--"]');
        const config = {childList: true, subtree: true} // 对哪些更改做出反应
        observer.observe(topEle, config);
    } else if (url.indexOf('jd.com') != -1) {
        const observerJd = new MutationObserver(() => {
                console.log("adObserver: 监听变动");
                let adElement = document.querySelector('[class="p-promo-flag"]');
                if (adElement) {
                    console.log("adObserver: 执行清除 total" + topEle.childNodes.length);
                    let allAdElement = document.querySelectorAll('[class="p-promo-flag"]');
                    allAdElement.forEach(value => {
                        value.parentElement.parentElement.remove();
                    })
                    console.log("执行清除,finished  total" + topEle.childNodes.length);
                    // observer.disconnect();
                }

            }
        );

        const topEle = document.getElementById("J_main");
        const config = {childList: true, subtree: true} // 对哪些更改做出反应
        observerJd.observe(topEle, config);

    }

})();