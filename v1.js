/// All images to edited once I have the right content 
// Build localStorage 

/******************** Changes to show women content ***************************/

function landingPageWomens_190() {
    let womenBanner = document.querySelector('.top-banner-image.banner-full-width');
    womenBanner.style.backgroundImage = 'url(/file/v1325942531035543607/general/2500x1184_Gender_Banner_Stargaze_V3_220922.jpg';
    womenBanner.setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-new-arrivals');

    // Trade Tiles Gender Upsells Womens 
    let categoryBanner = document.querySelectorAll('#cc_img__resize_wrapper>img');
    categoryBanner[0].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBanner[0].setAttribute('a', 'https://www.russellandbromley.co.uk/men/mens-all-boots');
    ///
    categoryBanner[1].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBanner[1].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-flats');
    //////////
    categoryBanner[2].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBanner[2].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-sneakers');

    let cta = document.querySelectorAll('.category-banner-text-wrapper>h3');
    cta[0].innerHTML = 'Womens Boots';
    cta[1].innerHTML = 'Womens Flats';
    cta[2].innerHTML = 'Womens Sneakers';

    //Product cutouts - Womens Favourites 
    categoryBanner[3].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBanner[3].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-ankle-boots');
    /////
    categoryBanner[4].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBanner[4].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-knee-high-boots');
    /////////
    categoryBanner[5].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBanner[5].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-heels');
    ////////////
    categoryBanner[6].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBanner[6].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-heeled-sandals');

    // Editing Trade Tile Trending 
    categoryBanner[7].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBanner[7].setAttribute('a', 'https://www.russellandbromley.co.uk/men/mens-all-casual-shoes');
    /////////
    categoryBanner[8].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBanner[8].setAttribute('a', 'https://www.russellandbromley.co.uk/men/mens-formal-shoes');
    ////////
    categoryBanner[9].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBanner[9].setAttribute('a', 'https://www.russellandbromley.co.uk/bags/shoulder-bags');
    ///////
    categoryBanner[10].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBanner[10].setAttribute('a', 'https://www.russellandbromley.co.uk/bags/crossbody-bags');

    ///womens Favourites

    let womensFavourites = document.querySelectorAll('#homepageSubCat_v1-wi5300012 .subcategory-title');
    womensFavourites[0].innerHTML = 'Ankle Boots';
    womensFavourites[1].innerHTML = 'High Boots';
    womensFavourites[2].innerHTML = 'Heels';
    womensFavourites[3].innerHTML = 'Sandals';
    // Editing Trade Tile Trending 


    let womensTrendingNow = document.querySelectorAll('#WomenBeInspired_v1-wi5300032 h4');
    womensTrendingNow[0].innerHTML = 'Men\'s Casual Shoes';
    womensTrendingNow[1].innerHTML = 'Men\'s Formal Shoes';
    womensTrendingNow[2].innerHTML = 'Women\'s Shoulder Bags';
    womensTrendingNow[3].innerHTML = 'Women\'s Crossbody Bags';
}
landingPageWomens_190();



// let womensFavourites = document.querySelectorAll('#WomenBeInspired_v1-wi5300032 h4');
// womensFavourites[0].innerHTML = 'Men\'s Casual Shoes';
// womensFavourites[1].innerHTML = 'Men\'s Formal Shoes';
// womensFavourites[2].innerHTML = 'Women\'s Shoulder Bags';
// womensFavourites[3].innerHTML = 'Women\'s Crossbody Bags';




/************** Changes to show Mens content *****************************/

function landingPageMens_190() {
    // Hero Image
    let mensBanner = document.querySelector('.top-banner-image.banner-full-width');
    mensBanner.style.backgroundImage = 'url(/file/v4236941521683707120/general/2500x1184_Gender_Banner_ConquerM_Updated_160922.jpg)';
    mensBanner.setAttribute('a', 'https://www.russellandbromley.co.uk/women/mens-new-arrivals');


    //Trade Tiles Gender Upsells Mens
    let categoryBannerMens = document.querySelectorAll('#cc_img__resize_wrapper>img');
    categoryBannerMens[0].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBannerMens[0].setAttribute('href', 'https://www.russellandbromley.co.uk/men/mens-all-boots');

    categoryBannerMens[1].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBannerMens[1].setAttribute('a','https://www.russellandbromley.co.uk/men/mens-formal-shoes');

    categoryBannerMens[2].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBannerMens[2].setAttribute('a', 'https://www.russellandbromley.co.uk/men/mens-sneakers');

    // Mens CTA
    let ctaMens = document.querySelectorAll('.category-banner-text-wrapper>h3');
    ctaMens[0].innerHTML = 'Men\'s Boots';
    ctaMens[1].innerHTML = 'Men\'s Flats';
    ctaMens[2].innerHTML = 'Men\'s Sneakers';

    //Products cutouts - Mens Favourites 
    document.querySelector('h3.main-title').innerHTML = 'Mens Favourites';
    categoryBannerMens[3].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBannerMens[3].setAttribute('a', 'https://www.russellandbromley.co.uk/men/mens-chelsea-boots');

    categoryBannerMens[4].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBannerMens[4].setAttribute('a', 'https://www.russellandbromley.co.uk/men/mens-all-casual-shoes')

    categoryBannerMens[5].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBannerMens[5].setAttribute('a', 'https://www.russellandbromley.co.uk/men/mens-loafers');

    categoryBannerMens[6].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=217&width=217');
    categoryBannerMens[6].setAttribute('a', 'https://www.russellandbromley.co.uk/men/belts');
    //Mens FAVOURITES PRODUCT NAME 
    let mensFavourites = document.querySelectorAll('#homepageSubCat_v1-wi5300012 .subcategory-title');
    mensFavourites[0].innerHTML = 'Chelsea Boots';
    mensFavourites[1].innerHTML = 'Casual Shoes';
    mensFavourites[2].innerHTML = 'Loafers';
    mensFavourites[3].innerHTML = 'Belts';

    // Editing Trade Tile Trending 
    categoryBannerMens[7].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBannerMens[7].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-all-boots');

    categoryBannerMens[8].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBannerMens[7].setAttribute('a', 'https://www.russellandbromley.co.uk/women/womens-all-shoes');

    categoryBannerMens[9].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBannerMens[9].setAttribute('a', 'https://www.russellandbromley.co.uk/bags/shoulder-bags');

    categoryBannerMens[10].setAttribute('src', '/ccstore/v1/images/?source=/file/v3507640963798475019/general/400x600_SqueakV3_140922.jpg&height=525&width=350');
    categoryBannerMens[10].setAttribute('a', 'https://www.russellandbromley.co.uk/bags/crossbody-bags');
}

landingPageMens_190();





/*********** LocalStorage to determine if is women or men ************/



// window.location.pathname == '/' || window.location.pathname == '/home';

// let textBreadCrumbs = document.querySelector("div.catBreadcrumbs-widget").innerText.toUpperCase();
// let stringValidations = [ "MEN", "BAGS", "WOMEN"];

// stringValidations.forEach((item, index)=>{ 
//    if(textBreadCrumbs.includes(item)){
//         console.log("Contem o texto ", item);
//         return;
//     }  

// })


/** BREADCRUMBS vALIDATION**/
let stringValidations = ["WOMEN", "MEN", "BAGS", ];

function validationBreadCrumbs() {
    let index = -1;

    function getTextBdc() {
        return (
            document.querySelector("div.catBreadcrumbs-widget") ||
            document.querySelector("ul.breadcrumb")
        ).innerText.toUpperCase();
    }

    let textBreadCrumbs = getTextBdc();

    for (let i = 0; i < stringValidations.length; i++) {
        const item = stringValidations[i];
        if (textBreadCrumbs.includes(item)) {
            console.log("Contem o texto ", item);
            index = i;
            break;
        }
    }

    return index;
}

validationBreadCrumbs();

/**** URL VALIDATION ********/
let textURL = ['WOMEN', 'MEN', 'BAGS'];
function validationUrl() {
    let index = -1;

    function getTextURL() {

        let initial_url = window.location.pathname;
        let url = initial_url.split('/')[1];
        return url.toUpperCase();
    }


    let url2 = getTextURL();

    for (let i = 0; i < stringValidations.length; i++) {
        const item1 = stringValidations[i];
        if (url2.includes(item1)) {
            console.log('contem item', item1);
            index = i;
            break;
        }
    }
    return index;
}

validationUrl();

/*

items[0].setAtt("src", urlImg);
items[0].closest(".category-banner-link").setAtt("url","url")*/

/**VALIDATION PAGE**/
let index = validationBreadCrumbs();
if (index < 0) {
    //validação pela URL
    index = validationUrl();
}
/**SEGURANÇA PARA CARREGAR ITEM DO ARRAY QUE NÃO EXISTE**/
if (index > -1) {
    localStorage.setItem("lastPageVisited190", stringValidations[index]);
}


let isHome = 'https://www.russellandbromley.co.uk/' || 'https://www.russellandbromley.co.uk/home';

function setLastPage() {
     if (!isHome) {
     console.log('homepage');
        /**VERIFICA O LOCALSTORAGE PARA CARREGAR AS IMAGENS REFERENTES**/
        if (localStorage.getItem("lastPageVisited190")) {
            let itemSeter = localStorage.getItem("lastPageVisited190");
            if (itemSeter == "MEN") {
                //carregar itens men
                landingPageMens_190();
                console.log("items MEN")
            } else if (itemSeter == "WOMEN" || itemSeter == "BAGS") {
                //carregar items women
                landingPageWomens_190();
                console.log("items women")
            }
        }
    }
} 
setLastPage();    

