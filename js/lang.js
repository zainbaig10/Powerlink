// Get current language (from localStorage or default to 'en')
let currentLang = localStorage.getItem('selectedLang') || 'en';

// Your full translations object goes here...
const translations = {
  home: {
    navbar: {
      en: ["Home", "About Us", "Services", "Products", "Contact Us"],
      ar: ["الرئيسية", "من نحن", "الخدمات", "المنتجات", "اتصل بنا"]
    }
  },
  navbar: {
    dropdown: {
      en: ["All Products", "Mechanical", "Electrical", "Safety", "Labels"],
      ar: ["جميع المنتجات", "الميكانيكية", "الكهربائية", "السلامة", "الملصقات"]
    }
  }
};

// Translation function
function applyTranslations() {
  const navLinks = document.querySelectorAll('.navbar-nav a:not(.dropdown-toggle):not(.language-option)');
  navLinks.forEach((link, index) => {
    if (index < translations.home.navbar[currentLang].length) {
      link.textContent = translations.home.navbar[currentLang][index];
    }
  });

  const productsDropdown = document.querySelector('#productsDropdown');
  if (productsDropdown) {
    productsDropdown.textContent = translations.home.navbar[currentLang][3];
  }

  const dropdownItems = document.querySelectorAll('.dropdown-item:not(.language-option)');
  dropdownItems.forEach((item, index) => {
    if (translations.navbar.dropdown[currentLang][index]) {
      item.textContent = translations.navbar.dropdown[currentLang][index];
    }
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', applyTranslations);
