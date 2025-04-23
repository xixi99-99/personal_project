// ALL
// ALL
// ALL

// 載入header and footer (homepage, product list, product page 引用)
document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// 淡入效果
function fadeIn(element) {
    element.style.opacity = "1"
}

// Homepage
// Homepage
// Homepage

// login page
function openLogin() {
    document.getElementById("login").style.display = "flex"
}

function closeLogin() {
    document.getElementById("login").style.display = "none"
}

function switchTab(tabId) {
    document.querySelectorAll(".form-container").forEach(el => el.classList.remove("active"))
    document.querySelectorAll(".tab").forEach(el => el.classList.remove("active"))
    document.getElementById(tabId).classList.add("active");
    document.querySelector(`[onclick="switchTab('${tabId}')"]`).classList.add("active")
}

function submitOk() {
    alert('歡迎加入!')
}

function loginOk() {
    alert('登入成功')
}

// 漢堡選單
function openMenu() {
    document.getElementById("overlay").style.display = "flex"
    // document.body.style.background = "rgba(0,0,0,0.2)"
    document.getElementsByClassName("hidden-menu").style.right = "0"
}

function closeMenu() {
    document.getElementById("overlay").style.display = "none"
}



// Homepage section 1 輪播圖

let index = 0, timer;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot"), slider = document.getElementById("slider")

function showSlide(n) {
    slides.forEach((s, i) => {
        s.classList.toggle("active-slide", i === n);
    });
    dots.forEach((d, i) => d.classList.toggle("active-dot", i === n));
    index = n;
}

function changeSlide(n) {
    showSlide((index + n + slides.length) % slides.length);
    resetTimer();
}

function setSlide(n) {
    showSlide(n);
    resetTimer();
}

function startTimer() {
    timer = setInterval(() => changeSlide(1), 1500);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", startTimer);

showSlide(index);
startTimer();

// Homepage sectin 2 card group 滾動效果
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".hp2CardGroup");
    let isDown = false;
    let startX;
    let scrollLeft;

    // mouse down strat scrolling
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    // mouse leave stop scrolling
    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    // mouse up stop scrolling
    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    // 滑鼠移動時滾動
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 4;
        slider.scrollLeft = scrollLeft - walk;
    });

    // 滑鼠滾輪滾動 (左右滾動)
    slider.addEventListener("wheel", (e) => {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 1;
    });
})

// Homepage section 2 卡片到展品頁面
function toProductPage() {
    window.open('http://127.0.0.1:5500/pp_01.html')
}


// 淡入淡出效果

// 優惠跑馬燈效果


// to top
document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.querySelector(".totop")

    window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
            backToTop.style.display = "block"
        } else {
            backToTop.style.display = "none"
        }
    })
})





// Product List
// Product List
// Product List

// pl1 tab page effect
function pl1showContent(activeTab, contentId) {
    const tabs = document.querySelectorAll('.pl1tab')
    const content = document.querySelectorAll('.pl1content')
    let i = 0
    while (i < tabs.length) {
        tabs[i].classList.remove('show')
        content[i].classList.remove('show')
        i++
    }

    activeTab.classList.add('show')
    document.getElementById(contentId).classList.add('show')
}



//pp2 tab page effect
function showContent(activeTab, contentId) {
    var tabs = document.querySelectorAll('.pp2tab')
    var content = document.querySelectorAll('.pp2content')
    i = 0
    while (i < tabs.length) {
        tabs[i].classList.remove('pp2show')
        content[i].classList.remove('pp2show')
        i++
    }
    activeTab.classList.add('pp2show')
    document.getElementById(contentId).classList.add('pp2show')
}


// footer social media link
function toline() {
    window.open('https://page.line.me/jwv3010k')
}

function toig() {
    window.open('https://www.instagram.com/explore/locations/610933542/-/')
}

function tofb() {
    window.open('https://www.facebook.com/IIIDEITc/?locale=zh_TW')
}