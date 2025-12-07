class ThemeToggle extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                
                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                button:hover {
                    background-color: rgba(59, 130, 246, 0.1);
                }
                
                .dark button:hover {
                    background-color: rgba(96, 165, 250, 0.1);
                }
            </style>
            
            <button>
                <i data-feather="moon"></i>
            </button>
        `;
        
        const button = this.shadowRoot.querySelector('button');
        
        // Prefer a light theme by default. Only enable dark if user explicitly saved it.
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            button.innerHTML = '<i data-feather="sun"></i>';
        } else {
            // default to light theme to keep content clear and non-contrasting
            document.documentElement.classList.remove('dark');
            button.innerHTML = '<i data-feather="moon"></i>';
            if (!savedTheme) localStorage.setItem('theme', 'light');
        }
        
        // Toggle theme on button click
        button.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');

            if (isDark) {
                button.innerHTML = '<i data-feather="sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                button.innerHTML = '<i data-feather="moon"></i>';
                localStorage.setItem('theme', 'light');
            }

            feather.replace();
        });
        
        // Initialize icon
        feather.replace();
    }
}

customElements.define('theme-toggle', ThemeToggle);