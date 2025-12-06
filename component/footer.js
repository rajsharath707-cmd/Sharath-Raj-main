class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1e40af;
                    color: white;
                    padding: 3rem 1rem;
                }
                
                :host(.dark) {
                    background-color: #1e3a8a;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                
                .footer-section h3::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -8px;
                    width: 50px;
                    height: 2px;
                    background-color: #93c5fd;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #bfdbfe;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    display: flex;
                    align-items: center;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .footer-link i {
                    margin-right: 0.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-3px);
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: #bfdbfe;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <div class="footer-links">
                        <a href="#home" class="footer-link"><i data-feather="home"></i> Home</a>
                        <a href="#about" class="footer-link"><i data-feather="user"></i> About</a>
                        <a href="#skills" class="footer-link"><i data-feather="award"></i> Skills</a>
                        <a href="#contact" class="footer-link"><i data-feather="mail"></i> Contact</a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="footer-links">
                        <a href="mailto:rajsharath707@gmail.com" class="footer-link"><i data-feather="mail"></i> rajsharath707@gmail.com</a>
                        <a href="tel:+918448311723" class="footer-link"><i data-feather="phone"></i> +91 8448311723</a>
                        <div class="social-links">
                            <a href="https://linkedin.com/in/sharath-raj-b7116a311" target="_blank" class="social-link"><i data-feather="linkedin"></i></a>
                        <a href="https://www.instagram.com/backpack_scholar" target="_blank" class="social-link"><i data-feather="instagram"></i></a>
                        <a href="https://youtube.com/@BackpackScholar" target="_blank" class="social-link"><i data-feather="youtube"></i></a>
<a href="https://youtube.com/@BackpackScholar" target="_blank" class="social-link"><i data-feather="youtube"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Navigation</h3>
                    <div class="footer-links">
                        <a href="#education" class="footer-link"><i data-feather="book"></i> Education</a>
                        <a href="#certifications" class="footer-link"><i data-feather="file-text"></i> Certifications</a>
                        <a href="#experience" class="footer-link"><i data-feather="briefcase"></i> Experience</a>
                        <a href="#youtube" class="footer-link"><i data-feather="video"></i> YouTube</a>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} SHARATH RAJ. All rights reserved.
            </div>
        `;
        
        // Initialize icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);
