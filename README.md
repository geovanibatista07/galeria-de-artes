# 🎨 Galeria de Arte Interativa — Desenvolvedor Front-End

> **Projeto Integrador** desenvolvido para a disciplina de **Front-End** do curso de Programador Front-End.

---

## 📌 Informações da Entrega
* **Aluno:** Geovani Batista
* **Professor:** Matheus Marques 
* **Turma:** QUA024920260076
* **Link do Site Publicado:** [https://galeria-de-artes-beta.vercel.app](https://galeria-de-artes-beta.vercel.app)

---

## 📄 Descrição do Projeto
A **Galeria de Arte Interativa** é uma *Single Page Application* (SPA) responsiva e intuitiva voltada para a exibição, consulta e preservação cultural de obras de arte consagradas e seus respectivos artistas (como Candido Portinari, Frida Kahlo, Vincent van Gogh e Leonardo da Vinci). 

O projeto combina uma arquitetura modular com foco em acessibilidade, usabilidade e engajamento cultural.

---

## 🛠️ Tecnologias Utilizadas
* **HTML5 Semântico:** Estruturação acessível com uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<dialog>`.
* **CSS3 & Bootstrap 5:** Estilização com tema escuro (*Dark Mode*), layout responsivo utilizando sistema de grid e componentes reutilizáveis.
* **JavaScript (ES6+):** Processamento dinâmico de dados com manipulação de arrays (`.filter()`, `.map()`, `Set()`).
* **React + Vite:** Ecossistema de desenvolvimento rápido com componentes reutilizáveis e *Hot Module Replacement* (HMR).
* **Hooks do React:**
  * `useState`: Controle de estados da aplicação (busca, filtros, modal e favoritos).
  * `useEffect`: Sincronização e persistência de dados.
* **LocalStorage:** Persistência de obras favoritadas no navegador do usuário.

---

## ✨ Funcionalidades Interativas
1. **Busca por Texto em Tempo Real:** Filtragem instantânea por título da obra ou nome do artista.
2. **Filtros Combinados Dinâmicos:**
   * **Por Museu / Localização:** Seleção por instituição cultural onde a obra está exposta.
   * **Por Época / Século:** Filtragem cronológica baseada no período histórico da obra.
3. **Sistema de Favoritos com Persistência:** Opção de favoritar obras com salvamento automático no `localStorage`.
4. **Modal de Biografia do Artista (`ArtistModal`):** Exibição de contexto histórico e biografia detalhada do artista.
5. **Modal de Ampliação de Imagem (`ImageModal`):** Visualização em alta resolução da obra selecionada.
6. **Geolocalização Integrada:** Links diretos com redirecionamento seguro para as coordenadas dos museus no Google Maps.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js instalado na máquina (versão 18 ou superior).

### Passo a Passo
1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/geovanibatista07/galeria-de-artes.git](https://github.com/geovanibatista07/galeria-de-artes.git)
