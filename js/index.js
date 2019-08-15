const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let midPageAccent = document.getElementById("middle-img");
midPageAccent.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navItems = document.querySelectorAll('a');
navItems[0].innerHTML = siteContent.nav['nav-item-1'];
navItems[1].innerHTML = siteContent.nav['nav-item-2'];
navItems[2].innerHTML = siteContent.nav['nav-item-3'];
navItems[3].innerHTML = siteContent.nav['nav-item-4'];
navItems[4].innerHTML = siteContent.nav['nav-item-5'];
navItems[5].innerHTML = siteContent.nav['nav-item-6'];

let prependA = document.createElement('a')
prependA.innerHTML = 'Sign In'
prependA.href = 'https://endless.horse'
document.querySelector("nav").prepend(prependA)

let appendA = document.createElement('a')
appendA.innerHTML = 'Newsletter'
appendA.href = 'https://endless.horse'
document.querySelector("nav").append(appendA)

navItems.forEach((el)=>{el.href = 'https://endless.horse';})

let ctaClass = document.getElementsByClassName("cta-text")[0]
ctaClass.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaClass.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let featuresText = document.getElementsByClassName("text-content")[0]
featuresText.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
featuresText.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];

let aboutText = document.getElementsByClassName("text-content")[1]
aboutText.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
aboutText.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];

let servicesText = document.getElementsByClassName("text-content")[2]
servicesText.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
servicesText.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];

let productText = document.getElementsByClassName("text-content")[3]
productText.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
productText.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];

let visionText = document.getElementsByClassName("text-content")[4]
visionText.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
visionText.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let contactClass = document.getElementsByClassName("contact")[0]
contactClass.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contactClass.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contactClass.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contactClass.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

let footerClass = document.getElementsByTagName("footer")[0]
footerClass.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"]

let greenNav = document.querySelectorAll('nav a')
greenNav.forEach(function(el) {
  el.style.color = "green";
})

 
