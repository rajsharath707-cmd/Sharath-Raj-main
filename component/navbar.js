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
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                :host(.dark) {
                    background-color: rgba(17, 24, 39, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #3b82f6;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                :host(.dark) .nav-link {
                    color: #d1d5db;
                }
                
                .nav-link:hover {
                    color: #3b82f6;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: #3b82f6;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #4b5563;
                    cursor: pointer;
                }
                
                :host(.dark) .mobile-menu-btn {
                    color: #d1d5db;
                }
                
                .theme-toggle {
                    background: none;
                    border: none;
                    color: #4b5563;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                :host(.dark) .theme-toggle {
                    color: #d1d5db;
                }
                
                .theme-toggle:hover {
                    background-color: rgba(59, 130, 246, 0.1);
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: white;
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem;
                        gap: 1.5rem;
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                    }
                    
                    :host(.dark) .nav-links {
                        background-color: #1f2937;
                    }
                    
                    .nav-links.active {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
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