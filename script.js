// Define os caminhos locais
        const localCSSPath = 'lib/bootstrap/css/bootstrap.min.css';
        const localJSPath = 'lib/bootstrap/js/bootstrap.min.js';
        
        // Função para carregar o arquivo CSS local
        function loadLocalCSS() {
            console.log("Falha ao carregar CDN. Carregando CSS local...");
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = localCSSPath;
            document.head.appendChild(link);
        }

        // Função para carregar o arquivo JS local
        function loadLocalJS() {
            console.log("Falha ao carregar CDN. Carregando JS local...");
            // Se estiver usando o Bootstrap 4, você precisaria carregar Popper.js e jQuery primeiro.
            
            const script = document.createElement('script');
            script.src = localJSPath;
            document.body.appendChild(script);
        }

        // 1. VERIFICAÇÃO DO CSS
        // Testa se a classe do CSS do Bootstrap foi aplicada corretamente no body
        // Se a internet falhar, o CSS CDN não será aplicado, e o 'height' será o padrão.
        // O método mais confiável é usar a verificação de integridade no elemento CDN diretamente
        // ou tentar acessar um objeto global do Bootstrap para o JS.

        // Uma verificação mais simples para o CSS:
        // Crie um elemento e verifique o estilo computado (precisa de um tempo para carregar o CDN)
        const cdnLink = document.getElementById('bootstrap-css-cdn');
        
        // Este evento dispara se o carregamento do recurso falhar (e a internet estiver fora)
        cdnLink.onerror = function() {
            loadLocalCSS();
        };

        // 2. VERIFICAÇÃO DO JAVASCRIPT
        // Verifica se o objeto global 'bootstrap' (ou 'jQuery' para versões antigas) existe.
        // Se a internet falhou e o script CDN não carregou, o objeto não existirá.
        
        window.addEventListener('load', function() {
            // Verifica a disponibilidade do objeto global 'bootstrap' (usado a partir da v5)
            if (typeof bootstrap === 'undefined') {
                loadLocalJS();
            }
        });