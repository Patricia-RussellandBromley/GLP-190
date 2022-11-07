//console.log('GLP Loading');
(function v1() {

    (function (win) {
        'use strict';

        var listeners = [],
            doc = win.document,
            MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
            observer;

        function ready(selector, fn) {
            // Store the selector and callback to be monitored
            listeners.push({
                selector: selector,
                fn: fn
            });
            if (!observer) {
                // Watch for changes in the document
                observer = new MutationObserver(check);
                observer.observe(doc.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
            // Check if the element is currently in the DOM
            check();
        }

        function check() {
            // Check the DOM for elements matching a stored selector
            for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
                listener = listeners[i];
                // Query for elements matching the specified selector
                elements = doc.querySelectorAll(listener.selector);
                for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
                    element = elements[j];
                    // Make sure the callback isn't invoked with the
                    // same element more than once
                    if (!element.ready) {
                        element.ready = true;
                        // Invoke the callback with the element
                        listener.fn.call(element, element);
                    }
                }
            }
        }

        // Expose 'ready'
        win.optiReady = ready;

    })(this);

    const waitUntil = (predicate, time = 10000) => {
        return new Promise(((resolve) => {
            let int = setInterval(() => {
                if (predicate()) {
                    resolve(predicate());
                    clearInterval(int);
                    int = null;
                }
            }, 500);
            setTimeout(() => {
                if (int !== null) {
                    clearInterval(int);
                }
            }, time);
        }));
    };

    /*_________________________________CODE TESTER 190_________________________________________*/

    /** DEFINITIONS **/

    /*STRINGS PARA VALIDAR AS PAGINAS*/
    const STRING_VALIDATIONS = ["WOMEN", "MEN", "BAGS"];

    /*NOME DA VAR NO LOCAL STORAGE*/
    const STRING_ITEM_STORAGE = "lastPageVisited190";

    /*
    flag para sinalizar qual a pagina está sendo processada
    assim o observer não execulta o código muitas vezes;
    */
    let PATH_UNDER_ANALISES = "";

    /* EXIBIR OU NÃO CONSOLE LOGS*/
    const IS_DEPURATION = true;

    /** FUNCTIONS **/
    const getPathName = () => window.location.pathname;
    const isHomePage = () => getPathName() == '/' || getPathName() == '/home';

    /******* Changes to show women content **********/
    const landingPageWomens_190 = () => {
        let womenBanner = document.querySelector('.top-banner-image.banner-full-width');
        womenBanner.style.backgroundImage = 'url(/file/v1325942531035543607/general/2500x1184_Gender_Banner_Stargaze_V3_220922.jpg';
        womenBanner.closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-new-arrivals');

        // Trade Tiles Gender Upsells Womens 
        let categoryBanner = document.querySelectorAll('#cc_img__resize_wrapper>img');
        categoryBanner[3].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[3].setAttribute('data-lazy-loading', 'true');
        categoryBanner[3].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[3].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-all-boots');

        
        categoryBanner[4].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[4].setAttribute('data-lazy-loading', 'true');
        categoryBanner[4].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[4].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-flats');
        
        categoryBanner[5].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[5].setAttribute('data-lazy-loading', 'true');
        categoryBanner[5].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[5].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-sneakers');

         // Gender CTA's
        let cta = document.querySelectorAll('.category-banner-text-wrapper>h3');
        cta[0].innerHTML = 'Womens Boots';
        cta[1].innerHTML = 'Womens Flats';
        cta[2].innerHTML = 'Womens Sneakers';

        //Product cutouts - Womens Favourites 
        let womensFavourites = document.querySelectorAll('#homepageSubCat_v1-wi5300012 .subcategory-title');
        womensFavourites[0].innerHTML = 'Ankle Boots';
        womensFavourites[1].innerHTML = 'High Boots';
        womensFavourites[2].innerHTML = 'Heels';
        womensFavourites[3].innerHTML = 'Sandals';

        categoryBanner[6].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[6].setAttribute('data-lazy-loading', 'true');
        categoryBanner[6].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[6].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-ankle-boots');
       
        categoryBanner[7].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[7].setAttribute('data-lazy-loading', 'true');
        categoryBanner[7].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[7].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-knee-high-boots');
       
        categoryBanner[8].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[8].setAttribute('data-lazy-loading', 'true');
        categoryBanner[8].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[8].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-heels');
        
        categoryBanner[9].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[9].setAttribute('data-lazy-loading', 'true');
        categoryBanner[9].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[9].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-heeled-sandals');

        // Editing Trade Tile Trending 
        categoryBanner[10].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[10].setAttribute('data-lazy-loading', 'true');
        categoryBanner[10].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[10].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-all-casual-shoes');
        
        categoryBanner[11].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[11].setAttribute('data-lazy-loading', 'true');
        categoryBanner[11].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[11].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-formal-shoes');
        
        categoryBanner[12].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[12].setAttribute('data-lazy-loading', 'true');
        categoryBanner[12].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[12].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/bags/shoulder-bags');

        categoryBanner[13].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[13].setAttribute('data-lazy-loading', 'true');
        categoryBanner[13].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBanner[13].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/bags/crossbody-bags');

        // Editing Trade Tile Trending 


        let womensTrendingNow = document.querySelectorAll('#WomenBeInspired_v1-wi5300032 h4');
        womensTrendingNow[0].innerHTML = 'Men\'s Casual Shoes';
        womensTrendingNow[1].innerHTML = 'Men\'s Formal Shoes';
        womensTrendingNow[2].innerHTML = 'Women\'s Shoulder Bags';
        womensTrendingNow[3].innerHTML = 'Women\'s Crossbody Bags';
    };

    /***** Changes to show Mens content **********/

    const landingPageMens_190 = () => {
        // Hero Image
        let mensBanner = document.querySelector('.top-banner-image.banner-full-width');
        mensBanner.style.backgroundImage = 'url(/file/v4236941521683707120/general/2500x1184_Gender_Banner_ConquerM_Updated_160922.jpg)';
        mensBanner.closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/mens-new-arrivals');


        //Trade Tiles Gender Upsells Mens
        let categoryBannerMens = document.querySelectorAll('#cc_img__resize_wrapper>img');
        categoryBannerMens[3].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[3].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[3].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[3].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-all-boots');
        
        categoryBannerMens[4].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[4].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[4].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[4].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-formal-shoes');

        categoryBannerMens[5].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[5].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[5].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[5].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-sneakers');

        // Mens CTA
        let ctaMens = document.querySelectorAll('.category-banner-text-wrapper>h3');
        ctaMens[0].innerHTML = 'Men\'s Boots';
        ctaMens[1].innerHTML = 'Men\'s Flats';
        ctaMens[2].innerHTML = 'Men\'s Sneakers';

        //Products cutouts - Mens Favourites 
        document.querySelector('h3.main-title').innerHTML = 'Mens Favourites';
        categoryBannerMens[6].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[6].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[6].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[6].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-chelsea-boots');

        categoryBannerMens[7].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[7].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[7].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[7].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-all-casual-shoes');

        categoryBannerMens[8].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[8].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[8].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[8].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-loafers');
        
        categoryBannerMens[9].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[9].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[9].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[9].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/men/belts');

        //Mens FAVOURITES PRODUCT NAME 
        let mensFavourites = document.querySelectorAll('#homepageSubCat_v1-wi5300012 .subcategory-title');
        mensFavourites[0].innerHTML = 'Chelsea Boots';
        mensFavourites[1].innerHTML = 'Casual Shoes';
        mensFavourites[2].innerHTML = 'Loafers';
        mensFavourites[3].innerHTML = 'Belts';

        // Editing Trade Tile Trending 
       
        categoryBannerMens[10].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[10].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[10].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[10].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-all-boots');
        
        categoryBannerMens[11].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[11].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[11].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[11].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/women/womens-all-shoes');
        
        categoryBannerMens[12].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[12].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[12].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[12].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/bags/shoulder-bags');

        categoryBannerMens[13].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[13].setAttribute('data-lazy-loading', 'true');
        categoryBannerMens[13].setAttribute('data-src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
        categoryBannerMens[13].closest('a').setAttribute('href', 'https://www.russellandbromley.co.uk/bags/crossbody-bags');

    };


    /* VERIFICA SE A PAGINA PERTENCE ALGUM ITEM DO ARRAY STRING_VALIDATIONS */
    const handlePage = () => {
        let index = -1;

        const textInValidations = (text) => {
            depuration(" Analisando texto :: " + text);
            for (let i = 0; i < STRING_VALIDATIONS.length; i++) {
                const item = STRING_VALIDATIONS[i];
                if (text.includes(item)) {
                    depuration(text + " ::: Contem o texto ::: " + item);
                    index = i;
                    return true;
                }
            }
            return false;
        };//AND textInValidations

        /*BREADCRUMB*/
        const textBdc = (document.querySelector("div.catBreadcrumbs-widget") || document.querySelector("ul.breadcrumb")).innerText.toUpperCase();

        /*
        TENTA VALIDAR PELA BDC
        SE NÃO CONSEGUIR, TENTA VALIDAR PELA URL
        */
        depuration("validando pelo bdc....");
        if (!textInValidations(textBdc)) {
            depuration("validando pelo URL....");

            const textURL = (getPathName().split('/')[1]).toUpperCase();

            textInValidations(textURL);
        }
        /*URL*/

        /* SE VALIDO, SALVA STRING DO ARRAY NO STORAGE */
        if (index > -1) {
            depuration("salvando string no storage");
            /* REGISTRA/ATUALIZA NO LOCAL STORAGE A INFORMAÇÃO */
            localStorage.setItem(STRING_ITEM_STORAGE, STRING_VALIDATIONS[index]);
        }

        depuration("finish handlePage");
    };//AND HANDLE PAGE

    const handleHomePage = () => {
        /* PEGA INFORMAÇÃO DO DO LOCAL_STORAGE */
        const STORAGE_INFORMATION = localStorage.getItem(STRING_ITEM_STORAGE);

        /* VERIFICA SE A INFORMAÇÃO EH VALIDA */
        if (STORAGE_INFORMATION) {
            /*
                VERIFICA SE A INFORMAÇÃO EH DE MEN OU WOMEN
                E CARREGA A VIEW RESPECTIVA
            */
            if (STORAGE_INFORMATION === "MEN") {
                //carregar itens men
                depuration("items MEN");
                landingPageMens_190();
            } else if (STORAGE_INFORMATION === "WOMEN" || STORAGE_INFORMATION === "BAGS") {
                //carregar items women
                depuration("items women");
                landingPageWomens_190();
            }

        }//AND IF STORAGE_INFORMATION
    };

    const depuration = (msg) => {
        if (IS_DEPURATION) {
            console.log("TESTER_190 :: " + msg);
        }
    };

    const main_190 = () => {
        depuration("start");
        depuration("PATH UNDER ANALISES " + PATH_UNDER_ANALISES);

        /*VERIFICAR SE ESTAMOS NA HOME PAGE E REALIZA AS MODIFICAÇÕES*/
        if (isHomePage()) {

            depuration("IS HOME PAGE ENTER");

            waitUntil(() => {
                depuration("HOME PAGE WAIT");
                return document.querySelectorAll("div#main").length > 0;
            }).then(() => {
                depuration("HOME PAGE ENTER");
                handleHomePage();
            });

        } else {

            depuration("IS HANDLE PAGE ENTER");

            waitUntil(() => {

                depuration("HANDLE PAGE WAIT");
                return document.querySelectorAll("div.catBreadcrumbs-widget").length > 0 ||
                    document.querySelectorAll("ul.breadcrumb").length > 0 &&
                    typeof window.jQuery === "function";

            }).then(() => {

                depuration("HANDLE PAGE ENTER");
                /* VALIDAR SE A PAGINA EH MEN OU WOMEN E SETA NO STORAGE */
                setTimeout(handlePage, 3000);

            });

        }
    };

    /*___________________END CODES TESTER 190_______________________________*/

    waitUntil(() => {

        depuration("Wait load");
        return document.querySelectorAll(".navbar .navbar-rb").length == 0 && typeof window.jQuery === "function";

    }).then(() => {

        optiReady('#headerBar', () => {
            depuration('%cObserver-190', 'color: green; background: yellow; font-size: 10px');

            /*SOMENTE ENTRA NA CONDITION SE A VAR FOR DIFERENTE*/
            if (PATH_UNDER_ANALISES !== getPathName()) {
                PATH_UNDER_ANALISES = getPathName();
                main_190();
            }
        });
    });
})();