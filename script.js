const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.recipe-card');

function filterRecipes() {
  const searchText = searchInput.value.toLowerCase();
  const activeCategoryBtn = document.querySelector('.filters button.active');
  const category = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'all';

  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    const cardCategory = card.getAttribute('data-category');

    const matchesSearch = title.includes(searchText);
    const matchesCategory = category === 'all' || category === cardCategory;

    card.style.display = (matchesSearch && matchesCategory) ? '' : 'none';
  });
}

searchInput.addEventListener('input', filterRecipes);

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterRecipes();
  });
});
