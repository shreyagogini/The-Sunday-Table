const recipes = [
    { name: "Jasmine Rice", url: "jasminericeR.html" },
    { name: "Mango Rice", url: "mangoriceR.html" },
    { name: "Chocolate Cookies", url: "chococookiesR.html" },
    { name: "Pumpkin Pie", url: "pumpkinpieR" },
    { name: "Chicken", url: "chickenR.html" },
    // Add more recipes here
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
