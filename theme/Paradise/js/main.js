document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const scrollThreshold = 50;

    window.addEventListener("scroll", () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Price category calculator
document.getElementById('price')?.addEventListener('input', function(e) {
    const price = parseFloat(e.target.value);
    const categoryDiv = document.getElementById('priceCategory');
    let category = '';
    
    if (price === 0) category = 'Free';
    else if (price < 25) category = 'Cheap';
    else if (price <= 100) category = 'Affordable';
    else category = 'Expensive';
    
    categoryDiv.textContent = category;
});

// Cookie handling functions
function getCookie(name) {
    const cookie = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}

// Display last viewed category
function showLastCategory() {
    const lastCategory = getCookie('last_category');
    if (lastCategory) {
        try {
            const data = JSON.parse(decodeURIComponent(lastCategory));
            const notice = document.createElement('div');
            notice.className = 'category-notice';
            notice.textContent = `You last viewed ${data.name} products on ${data.time}`;
            document.querySelector('main').prepend(notice);
        } catch (e) {
            console.error('Error parsing category cookie:', e);
        }
    }
}

// Initialize on homepage
document.addEventListener('DOMContentLoaded', () => {
    // Only show reminder on homepage
    if (window.location.pathname === '/' || 
        window.location.pathname.endsWith('index.php')) {
        showLastCategory();
    }
});