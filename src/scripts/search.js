document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const autocompleteList = document.getElementById("autocomplete-list");
  const searchButton = document.getElementById("search-button");

  const suggestions = [
    { text: "Novidades", link: "#news" },
    { text: "Atualização da Laborus 2.0", link: "#news" },
    { text: "Plataformas Compatíveis", link: "#platforms" },
    { text: "Instagram", link: "https://www.instagram.com/laborus_/" },
    {
      text: "YouTube",
      link: "https://www.youtube.com/channel/UCc4dx8tBcm-H9sY8GBID1ng",
    },
    { text: "GitHub", link: "https://github.com/Laborus" },
    { text: "Time Laborus", link: "https://github.com/Laborus" },
    { text: "Documentação API", link: "https://github.com/Laborus" },
    { text: "Footer", link: "#footer" },
  ];

  let selectedLink = "";

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    autocompleteList.innerHTML = "";

    if (!query) return;

    const filteredSuggestions = suggestions.filter((item) =>
      item.text.toLowerCase().includes(query)
    );

    filteredSuggestions.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item.text;
      li.addEventListener("click", function () {
        searchInput.value = item.text;
        selectedLink = item.link; // Guarda o link associado

        // Verifica se o link é externo ou interno
        if (selectedLink.startsWith("http")) {
          window.open(selectedLink, "_blank"); // Abre em uma nova guia
        } else {
          window.location.href = selectedLink; // Redireciona na mesma página
        }

        autocompleteList.innerHTML = ""; // Limpa a lista de sugestões
      });
      autocompleteList.appendChild(li);
    });
  });

  searchButton.addEventListener("click", function () {
    if (!selectedLink) {
      const userInput = searchInput.value.toLowerCase();
      const matchedSuggestion = suggestions.find(
        (item) => item.text.toLowerCase() === userInput
      );
      if (matchedSuggestion) {
        selectedLink = matchedSuggestion.link;
      }
    }

    // Verifica se o link é externo ou interno
    if (selectedLink) {
      if (selectedLink.startsWith("http")) {
        window.open(selectedLink, "_blank"); // Abre em uma nova guia
      } else {
        window.location.href = selectedLink; // Redireciona na mesma página
      }
    }
  });

  // Fecha a lista de autocomplete se o usuário clicar fora
  document.addEventListener("click", function (e) {
    if (e.target !== searchInput) {
      autocompleteList.innerHTML = "";
    }
  });
});
