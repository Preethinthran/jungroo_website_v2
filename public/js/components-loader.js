/**
 * Components Loader
 * Dynamically loads and injects common HTML components (header, footer).
 */

async function loadComponent(id, url) {
    const element = document.getElementById(id);
    if (!element) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const html = await response.text();
        element.innerHTML = html;
        
        // Dispatch custom event when component is loaded
        const event = new CustomEvent('componentLoaded', { detail: { id, url } });
        document.dispatchEvent(event);
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Mobile Menu logic toggle (needs to be available globally)
let mobileMenuOpen = false;
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('mobile-menu-toggle');
    if (!menu || !toggle) return;

    const spans = toggle.querySelectorAll('span');
    mobileMenuOpen = !mobileMenuOpen;
    
    if(mobileMenuOpen) {
        menu.classList.remove('translate-x-full');
        spans[0].style.transform = 'translateY(4px) rotate(45deg)';
        spans[1].style.transform = 'translateY(-4px) rotate(-45deg)';
    } else {
        menu.classList.add('translate-x-full');
        spans[0].style.transform = 'none';
        spans[1].style.transform = 'none';
    }
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    // Header and Footer are now inlined for better performance (LCP optimization)
    // We still keep the active nav highlighting logic
    const path = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        // Handle both / and /index.html etc.
        const cleanPath = path === '/' ? '/' : path.replace('.html', '');
        const cleanHref = href === '/' ? '/' : href.replace('.html', '');
        
        if (cleanPath === cleanHref) {
            item.classList.add('text-theme-text');
            item.classList.remove('text-theme-muted');
        } else {
            item.classList.remove('text-theme-text');
            item.classList.add('text-theme-muted');
        }
    });

    // Handle initial scroll if hash exists
    if (window.location.hash) {
        setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
});
