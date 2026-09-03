// ============================================
// FUNCIONALIDADE DE ÁUDIO ACESSÍVEL (TTS)
// ============================================

class AudioAccessibility {
    constructor() {
        this.audioBtn = document.getElementById('audioBtn');
        this.isPlaying = false;
        this.currentUtterance = null;
        this.selectedText = '';

        // Verificar se o navegador suporta Web Speech API
        const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;
        this.supportsSpeech = 'speechSynthesis' in window;

        if (!this.supportsSpeech) {
            this.audioBtn.disabled = true;
            this.audioBtn.textContent = '🔇 Áudio não disponível neste navegador';
            this.audioBtn.style.opacity = '0.5';
            this.audioBtn.style.cursor = 'not-allowed';
            return;
        }

        this.setupEventListeners();
        this.addKeyboardShortcuts();
        this.announcePageReady();
    }

    setupEventListeners() {
        this.audioBtn.addEventListener('click', () => this.toggleAudio());
        document.addEventListener('keydown', (e) => {
            // Alt + A para ativar/desativar áudio
            if (e.altKey && e.key.toLowerCase() === 'a') {
                e.preventDefault();
                this.toggleAudio();
            }
        });

        // Parar áudio quando clicar em links de navegação
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                if (this.isPlaying) {
                    window.speechSynthesis.cancel();
                    this.isPlaying = false;
                    this.updateButtonState();
                }
            });
        });
    }

    addKeyboardShortcuts() {
        // Adicionar informação de atalhos no botão
        this.audioBtn.title += ' (Atalho: Alt+A)';
    }

    announcePageReady() {
        // Anunciar quando página carrega para usuários de screen reader
        const announcement = document.createElement('div');
        announcement.className = 'sr-only';
        announcement.textContent = 'Página de Segurança Digital carregada. Use Alt+A para ativar leitura em voz alta.';
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        document.body.appendChild(announcement);
    }

    toggleAudio() {
        if (this.isPlaying) {
            this.stopAudio();
        } else {
            this.startAudio();
        }
    }

    startAudio() {
        // Coletar todo o texto da página
        const textContent = this.collectPageText();

        if (!textContent.trim()) {
            alert('Nenhum conteúdo para ler');
            return;
        }

        this.isPlaying = true;
        this.updateButtonState();

        // Criar utterance (enunciado)
        const utterance = new SpeechSynthesisUtterance(textContent);

        // Configurar propriedades de fala
        utterance.lang = 'pt-BR';
        utterance.rate = 1; // velocidade normal
        utterance.pitch = 1; // tom normal
        utterance.volume = 1; // volume máximo

        // Event listeners
        utterance.onend = () => {
            this.isPlaying = false;
            this.updateButtonState();
        };

        utterance.onerror = (event) => {
            console.error('Erro ao falar:', event.error);
            this.isPlaying = false;
            this.updateButtonState();
        };

        this.currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);

        // Anunciar para screen reader
        this.announceStatus('Leitura iniciada');
    }

    stopAudio() {
        window.speechSynthesis.cancel();
        this.isPlaying = false;
        this.updateButtonState();
        this.announceStatus('Leitura pausada');
    }

    updateButtonState() {
        if (this.isPlaying) {
            this.audioBtn.classList.add('playing');
            this.audioBtn.textContent = '⏸️ Pausar áudio';
            this.audioBtn.setAttribute('aria-pressed', 'true');
        } else {
            this.audioBtn.classList.remove('playing');
            this.audioBtn.textContent = '🔊 Ativar áudio';
            this.audioBtn.setAttribute('aria-pressed', 'false');
        }
    }

    collectPageText() {
        // Coletar texto principal (excluir navegação e rodapé)
        const main = document.querySelector('main');
        if (!main) return '';

        // Clonar para não afetar o DOM
        const clone = main.cloneNode(true);

        // Remover elementos não desejados
        clone.querySelectorAll('script, style, .sr-only').forEach(el => el.remove());

        // Extrair texto
        let text = clone.textContent;

        // Limpar espaços em branco
        text = text.replace(/\s+/g, ' ').trim();

        return text;
    }

    announceStatus(message) {
        const announcement = document.createElement('div');
        announcement.className = 'sr-only';
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.textContent = message;
        document.body.appendChild(announcement);

        // Remover após anúncio
        setTimeout(() => announcement.remove(), 1000);
    }
}

// ============================================
// FUNCIONALIDADES ADICIONAIS DE INTERATIVIDADE
// ============================================

class PageInteractivity {
    constructor() {
        this.initCheckboxes();
        this.initSmoothScroll();
        this.initCardAnimations();
        this.initAccessibilityFeatures();
    }

    initCheckboxes() {
        // Tornar checkboxes interativas com feedback visual
        document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(checkbox => {
            checkbox.disabled = false;
            checkbox.addEventListener('change', (e) => {
                const label = e.target.nextElementSibling;
                if (e.target.checked) {
                    label.style.opacity = '0.6';
                    label.style.textDecoration = 'line-through';
                } else {
                    label.style.opacity = '1';
                    label.style.textDecoration = 'none';
                }
            });
        });
    }

    initSmoothScroll() {
        // Melhorar scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }

    initCardAnimations() {
        // Adicionar efeito de aparição gradual aos cards
        const cards = document.querySelectorAll('.card, .step, .denunciation-card, .tips-list li');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    initAccessibilityFeatures() {
        // Adicionar atributos ARIA para melhor suporte a screen readers
        document.querySelectorAll('[role="status"]').forEach(el => {
            el.setAttribute('aria-live', 'polite');
            el.setAttribute('aria-atomic', 'true');
        });

        // Adicionar skip link para pular navegação
        this.addSkipLink();

        // Melhorar foco visível
        this.improveKeyboardNavigation();
    }

    addSkipLink() {
        // Criar link "Pular para conteúdo principal"
        const skipLink = document.createElement('a');
        skipLink.href = '#inicio';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Pular para conteúdo principal';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background-color: #000;
            color: #fff;
            padding: 8px;
            z-index: 100;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    improveKeyboardNavigation() {
        // Adicionar estilos personalizados para focus
        const style = document.createElement('style');
        style.textContent = `
            :focus-visible {
                outline: 3px solid #ff6b6b;
                outline-offset: 2px;
            }

            .skip-link:focus {
                top: 0;
                transition: top 0.2s ease-out;
            }

            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// ESTATÍSTICAS DE ENGAJAMENTO
// ============================================

class EngagementTracker {
    constructor() {
        this.trackPageViews();
        this.trackScrollDepth();
        this.trackTimeOnPage();
    }

    trackPageViews() {
        // Registrar visualização de página
        const pageView = {
            timestamp: new Date().toISOString(),
            page: 'Segurança Digital',
            referrer: document.referrer || 'direct'
        };
        
        console.log('Página visitada:', pageView);
    }

    trackScrollDepth() {
        let maxScroll = 0;
        
        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage > maxScroll) {
                maxScroll = scrollPercentage;
            }
        });

        window.addEventListener('beforeunload', () => {
            console.log('Profundidade máxima de scroll:', Math.round(maxScroll) + '%');
        });
    }

    trackTimeOnPage() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            console.log('Tempo na página:', timeSpent + ' segundos');
        });
    }
}

// ============================================
// MODO NOTURNO (Opcional)
// ============================================

class DarkModeToggle {
    constructor() {
        this.setupDarkMode();
    }

    setupDarkMode() {
        // Verificar preferência do sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (prefersDark) {
            document.body.style.colorScheme = 'dark';
        }

        // Detectar mudanças nas preferências do sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            document.body.style.colorScheme = e.matches ? 'dark' : 'light';
        });
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🛡️ Página de Segurança Digital carregada');
    
    // Inicializar módulos
    const audioAccess = new AudioAccessibility();
    const interactivity = new PageInteractivity();
    const tracker = new EngagementTracker();
    const darkMode = new DarkModeToggle();

    // Mensagem de boas-vindas acessível
    const welcome = document.createElement('div');
    welcome.className = 'sr-only';
    welcome.setAttribute('role', 'status');
    welcome.textContent = 'Bem-vindo à página de Segurança Digital. Use Alt+A para ativar leitura em voz alta ou navegue com a seta para cima ou para baixo.';
    document.body.appendChild(welcome);
});

// ============================================
// HANDLER DE ERROS
// ============================================

window.addEventListener('error', (event) => {
    console.error('Erro na página:', event.error);
});

// ============================================
// SERVICE WORKER (para uso offline)
// ============================================

if ('serviceWorker' in navigator) {
    // Implementação opcional do service worker
    // navigator.serviceWorker.register('sw.js').catch(() => {
    //     console.log('Service Worker não disponível');
    // });
}