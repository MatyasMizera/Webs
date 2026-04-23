const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.querySelector(".nazev").textContent.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const form = document.getElementById("form");
const cardsContainer = document.querySelector(".cards");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("nazevReceptu").value;

    const newCard = document.createElement("div");
    newCard.classList.add("card");

    newCard.innerHTML = `
        <h3 class="nazev">${name}</h3>
        <button>Ingredience</button>
    `;

    cardsContainer.appendChild(newCard);

    form.reset();
});