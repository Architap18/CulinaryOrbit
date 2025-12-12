// Get recipe ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Look up recipe in database
const recipe = recipes[id];

if (!recipe) {
    document.getElementById("recipe-container").innerHTML = "<h1>Recipe Not Found</h1>";
} else {
    // Title
    document.getElementById("recipe-title").innerText = recipe.title;

    // Image
    document.getElementById("recipe-image").src = recipe.image;

    // Meta info
    document.getElementById("recipe-meta").innerHTML = `
        <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
        <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
        <p><strong>Servings:</strong> ${recipe.servings}</p>
    `;

    // Ingredients
    const ingList = document.getElementById("recipe-ingredients");
    recipe.ingredients.forEach(item => {
        ingList.innerHTML += `<li>${item}</li>`;
    });

    // Steps
    const stepsList = document.getElementById("recipe-steps");
    recipe.steps.forEach(step => {
        stepsList.innerHTML += `<li>${step}</li>`;
    });
}
