const recipes = {
  pusryciai: [
    { title: "Blynai su uogomis", img: "images/pusryciai1.jpg", link: "receptai/pusryciai1.html" },
    { title: "Kiaušinienė su daržovėmis", img: "images/pusryciai2.jpg", link: "receptai/pusryciai2.html" }
  ],
  pietus: [
    { title: "Daržovių sriuba", img: "images/pietus1.jpg", link: "receptai/pietus1.html" },
    { title: "Kepta vištiena su ryžiais", img: "images/pietus2.jpg", link: "receptai/pietus2.html" }
  ],
  desertai: [
    { title: "Šokoladinis pyragas", img: "images/desertai1.jpg", link: "receptai/desertai1.html" },
    { title: "Varškės apkepas", img: "images/desertai2.jpg", link: "receptai/desertai2.html" }
  ]
};

function getRandomRecipe(category) {
  const items = recipes[category];
  return items[Math.floor(Math.random() * items.length)];
}

function displayRandomRecipes() {
  const container = document.getElementById('recipeList');
  Object.keys(recipes).forEach(category => {
    const recipe = getRandomRecipe(category);
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <a href="${recipe.link}">
        <img src="${recipe.img}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <p>Kategorija: ${category}</p>
      </a>
    `;
    container.appendChild(card);
  });
}

displayRandomRecipes();
