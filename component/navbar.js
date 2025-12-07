class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: color-mix(in srgb, var(--card) 95%, var(--bg) 5%);
                    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
                    transition: all 0.28s ease;
                }

                :host(.dark) {
                    background-color: color-mix(in srgb, var(--card) 92%, black 8%);
                    box-shadow: 0 6px 24px rgba(0,0,0,0.35);
                }

                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0.9rem 1.25rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--accent);
                    text-decoration: none;
                    letter-spacing: 0.2px;
                }

                .nav-links {
                    display: flex;
                    gap: 1.25rem;
                }

                .nav-link {
                    color: var(--muted);
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.22s ease;
                }

                :host(.dark) .nav-link { color: var(--muted); }

                .nav-link:hover { color: var(--accent); }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: color-mix(in srgb, var(--accent) 78%, var(--muted) 22%);
                    transition: width 0.26s ease;
                }

                .nav-link:hover::after { width: 100%; }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: var(--muted);
                    cursor: pointer;
                }

                :host(.dark) .mobile-menu-btn { color: var(--muted); }

                .theme-toggle {
                    background: none;
                    border: none;
                    color: var(--muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.45rem;
                    border-radius: 50%;
                    transition: background-color 0.18s ease, transform 0.18s ease;
                }

                :host(.dark) .theme-toggle { color: var(--muted); }

                .theme-toggle:hover { background-color: color-mix(in srgb, var(--accent) 10%, transparent 90%); }

                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 66px;
                        left: 0;
                        right: 0;
                        background-color: var(--card);
                        flex-direction: column;
                        align-items: center;
                        padding: 1.5rem;
                        gap: 1rem;
                        box-shadow: 0 12px 30px -6px rgba(15, 23, 42, 0.06);
                        transform: translateY(-150%);
                        transition: transform 0.28s ease;
                    }

                    :host(.dark) .nav-links { background-color: color-mix(in srgb, var(--card) 88%, black 8%); }

                    .nav-links.active { transform: translateY(0); }

                    .mobile-menu-btn { display: block; }
                }
            </style>
            
            <div class="navbar-container">
                <a href="#home" class="logo">SHARATH RAJ</a>
                
                <div class="nav-links">
                    <a href="#about" class="nav-link">About</a>
                    <a href="#skills" class="nav-link">Skills</a>
                    <a href="#education" class="nav-link">Education</a>
                    <a href="#certifications" class="nav-link">Certifications</a>
                    <a href="#experience" class="nav-link">Experience</a>
                    <a href="#youtube" class="nav-link">YouTube</a>
                    <a href="#contact" class="nav-link">Contact</a>
                    <button class="theme-toggle">
                        <i data-feather="moon"></i>
                    </button>
                </div>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </div>
        `;
        
        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            feather.replace();
        });
        
        // Close mobile menu when clicking a link
        this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Initialize icons
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);