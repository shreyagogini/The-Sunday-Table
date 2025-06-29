const recipes = [
    { name: "Jasmine Rice", url: "jasminericeR.html" },
    { name: "Double Chocolate Cookies", url: "chococookiesR.html" },
    { name: "Pumpkin Pie", url: "pumpkinpieR.html" },
    { name: "Teriyaki Chicken", url: "teriyakichickenR.html" },
    { name: "Chicken Spinach Dumplings", url: "spinachchickendumpR.html" },
    { name: "Sourdough Bread", url: "sourdoughR.html" },
    { name: "Yogurt Parfait", url: "yogurtparfaitR.html" },
    { name: "Rotisserie Chicken", url: "chickenR.html" },
    { name: "Mango Sticky Rice", url: "mangoriceR.html" },
    { name: "Trail Mix", url: "trailmixR.html" },
    { name: "Caesar Salad", url: "caesarsaladR.html" },
    { name: "Pasta al la Vodka", url: "vodkapastaR.html" },
];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        searchResults.innerHTML = "";

        if (query === "") return;

        const matches = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            searchResults.innerHTML = "<div>No results</div>";
        } else {
            matches.forEach(recipe => {
                const item = document.createElement("div");
                item.textContent = recipe.name;
                item.addEventListener("click", () => {
                    window.location.href = recipe.url;
                });
                searchResults.appendChild(item);
            });
        }
    });

    document.addEventListener("click", (e) => {
        if (!document.querySelector(".search-bar").contains(e.target)) {
            searchResults.innerHTML = "";
        }
    });
});
