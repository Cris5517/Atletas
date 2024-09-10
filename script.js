// Seleciona os elementos HTML
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

// Adiciona um ouvinte de evento ao botão
searchButton.addEventListener('click', () => {
  // Obtém o termo de pesquisa
  const searchTerm = searchInput.value.toLowerCase();

  // Simula uma lista de resultados (substitua por sua fonte de dados real)
  const results = ['Resultado 1', 'Resultado 2', 'Resultado 3'];

  // Limpa a lista de resultados antes de adicionar novos
  resultsList.innerHTML = '';

  // Filtra os resultados e cria os elementos da lista
  results.forEach(result => {
    if (result.toLowerCase().includes(searchTerm)) {
      const li = document.createElement('li');
      li.textContent = result;
      resultsList.appendChild(li);
    }
  });
});
