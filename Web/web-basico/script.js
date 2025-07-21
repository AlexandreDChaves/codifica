document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector('.portfolio-grid');
    const languageFilter = document.getElementById('language-filter');
    const searchInput = document.querySelector('.filter-bar input');
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const headerContactLink = document.querySelector('.nav-right a[data-tab="contact"]');

    const username = 'AlexandreDChaves'; 

    let allProjects = []; // Para armazenar todos os projetos buscados

    // --- Funções de Busca da API do GitHub ---

    async function fetchRepositories() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
            if (!response.ok) {
                throw new Error(`Erro da API do GitHub: ${response.statusText}`);
            }
            const data = await response.json();
            return data.map(repo => ({
                title: repo.name,
                description: repo.description || 'Nenhuma descrição fornecida.',
                language: repo.language ? repo.language.toLowerCase() : 'other',
                stars: repo.stargazers_count,
                updated: new Date(repo.updated_at).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }),
                html_url: repo.html_url
            }));
        } catch (error) {
            console.error("Erro ao buscar repositórios:", error);
            
            document.getElementById('repositories-content').querySelector('.portfolio-grid').innerHTML = '<p>Erro ao carregar repositórios. Por favor, tente novamente mais tarde.</p>';
            return [];
        }
    }

    async function fetchUserProfile() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error(`Erro da API do GitHub: ${response.statusText}`);
            }
            const data = await response.json();
            document.getElementById('repo-count').textContent = data.public_repos;
            const totalStars = allProjects.reduce((sum, project) => sum + project.stars, 0);
            document.getElementById('star-count').textContent = totalStars;
        } catch (error) {
            console.error("Erro ao buscar perfil do usuário:", error);
            document.getElementById('repo-count').textContent = 'N/A';
            document.getElementById('star-count').textContent = 'N/A';
        }
    }

    // --- Funções de Renderização e Filtro ---

    function renderProjects(filteredProjects) {
        gridContainer.innerHTML = '';
        if (filteredProjects.length === 0) {
            gridContainer.innerHTML = '<p>Nenhum repositório encontrado com os filtros aplicados.</p>';
            return;
        }

        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            let languageClass = '';
            let languageName = project.language || 'Outra'; 
            
            switch(project.language) {
                case 'javascript': languageClass = 'language-javascript'; languageName = 'JavaScript'; break;
                case 'html': languageClass = 'language-html'; languageName = 'HTML'; break;
                case 'css': languageClass = 'language-css'; languageName = 'CSS'; break;
                case 'java': languageClass = 'language-java'; languageName = 'Java'; break;
                case 'python': languageClass = 'language-python'; languageName = 'Python'; break;
                case 'typescript': languageClass = 'language-typescript'; languageName = 'TypeScript'; break;
                case 'csharp': languageClass = 'language-csharp'; languageName = 'C#'; break;
                case 'go': languageClass = 'language-go'; languageName = 'Go'; break;
                case 'ruby': languageClass = 'language-ruby'; languageName = 'Ruby'; break;
                case 'php': languageClass = 'language-php'; languageName = 'PHP'; break;
                default:
                    languageClass = 'language-other';
                    languageName = project.language ? project.language.charAt(0).toUpperCase() + project.language.slice(1) : 'Outra';
                    break;
            }
            
            card.innerHTML = `
                <h3>
                    <a href="${project.html_url}" target="_blank" rel="noopener noreferrer">
                        <span class="octicon octicon-repo"></span>
                        ${project.title}
                    </a>
                </h3>
                <p>${project.description}</p>
                <div class="project-footer">
                    <span>
                        <span class="language ${languageClass}"></span>
                        ${languageName}
                    </span>
                    <span>
                        <span class="octicon octicon-star"></span>
                        ${project.stars}
                    </span>
                    <span>Última atualização: ${project.updated}</span>
                </div>
            `;
            
            gridContainer.appendChild(card);
        });
    }

    function filterProjects() {
        const selectedLanguage = languageFilter.value;
        const searchTerm = searchInput.value.toLowerCase();
        
        const filtered = allProjects.filter(project => {
            const matchesLanguage = selectedLanguage === 'all' || project.language === selectedLanguage;
            const matchesSearch = project.title.toLowerCase().includes(searchTerm) || 
                                 (project.description && project.description.toLowerCase().includes(searchTerm));
            
            return matchesLanguage && matchesSearch;
        });
        
        renderProjects(filtered);
    }

    // --- Funcionalidade das Abas ---

    function showTab(tabName) {
        // Remove a classe 'active' de todos os botões de aba
        tabs.forEach(tab => tab.classList.remove('active'));
        // Esconde todo o conteúdo das abas
        tabContents.forEach(content => content.classList.remove('active-content'));

        // Encontra o botão e o conteúdo correspondente e adiciona a classe 'active'/'active-content'
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(`${tabName}-content`);

        if (activeButton) activeButton.classList.add('active');
        if (activeContent) {
            activeContent.classList.add('active-content');
            
            // Ativa ou desativa a barra de filtro e busca apenas para a aba de repositórios
            const filterBar = document.querySelector('.filter-bar');
            if (tabName === 'repositories') {
                if (filterBar) filterBar.style.display = 'flex';
            } else {
                if (filterBar) filterBar.style.display = 'none';
            }
        }
    }

    // --- Inicialização ---

    // 1. Busca os repositórios e renderiza
    fetchRepositories().then(repos => {
        allProjects = repos;
        renderProjects(allProjects);
        
        // Preenche as opções do filtro de linguagem dinamicamente
        const languages = [...new Set(allProjects.map(p => p.language))].filter(Boolean).sort(); 
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
            languageFilter.appendChild(option);
        });

        // 2. Busca e atualiza as estatísticas do perfil
        fetchUserProfile(); 
    });

    // --- Listeners de Evento ---

    // Listener para os botões das abas
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            showTab(tabName);
        });
    });

    // Listener para o link "Contato" no cabeçalho
    if (headerContactLink) {
        headerContactLink.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            showTab('contact'); // Mostra a aba de contato
        });
    }

    // Listeners para filtro e busca (apenas funcionam na aba de repositórios)
    languageFilter.addEventListener('change', filterProjects);
    searchInput.addEventListener('input', filterProjects);
});