const recipes = {

    chocochip: {
        title: "ChocoChip Cookie",
        image: "img/img3.jpg",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: "12 cookies",
        ingredients: [
            "1 cup flour",
            "1/2 cup sugar",
            "1/2 cup butter",
            "1 egg",
            "1/2 cup chocolate chips"
        ],
        steps: [
            "Mix butter and sugar.",
            "Add egg and whisk.",
            "Add flour and chocolate chips.",
            "Bake at 180°C for 12 minutes."
        ]
    },

    bread: {
        title: "Bread Loaf",
        image: "img/img5.jpg",
        prepTime: "1 hour",
        cookTime: "35 mins",
        servings: "1 loaf",
        ingredients: [
            "2 cups flour",
            "1 cup warm water",
            "1 tbsp yeast",
            "1 tsp sugar",
            "Salt"
        ],
        steps: [
            "Activate yeast.",
            "Mix ingredients and knead.",
            "Proof for 1 hour.",
            "Bake for 35 mins at 200°C."
        ]
    },

    VegKathiRolls: {
        title: "VegKathiRolls",
        image: "img/vegetable_kathi_roll.jpg",
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: "4 rolls",
        ingredients: [
            "4 tortillas",
            "1 cup mixed veggies",
            "1 tsp spices",
            "2 tbsp oil",
            "Salt"
        ],
        steps: [
            "Sauté veggies with spices.",
            "Warm tortillas.",
            "Fill tortillas with veggies.",
            "Roll and serve."
        ]
    },
    ChocolateMugCake: {
        title: "Chocolate MugCake",
        image: "img/mug.jpg",
        prepTime : "10 mins",
        cookTime: "5 mins",
        servings: "2 servings",
        ingredients: [
            "1 spoon choco powder",
            "1 teaspoon baking powder",
            "2 spoons sugar",
            "3 spoons flour",
            "1 cup milk"
        ],
        steps: [
            "Mix all ingredients in a bowl.",
            "Pour into a greased mug.",
            "Microwave for 2 minutes."
        ]
    },

    Cheesecake: {
        title: "Cheesecake",
        image: "img/easy-cheesecake.avif",
        prepTime: "30 mins",
        cookTime: "40 mins",
        servings: "8 slices",
        ingredients: [
            "200g cream cheese",
            "100g digestive biscuits",
            "50g butter",
            "100g sugar",
            "2 eggs"
        ],
        steps: [
            "Crush biscuits and mix with melted butter.",
            "Press into a cake tin for the base.",
            "Beat cream cheese and sugar.",
            "Add eggs and mix well.",
            "Pour over base and bake at 160°C for 40 mins."
        ]
    },

    Butterchicken: {
        title: "Butter Chicken",
        image: "img/chicken-butter-masala.jpg",
        prepTime: "20 mins",
        cookTime: "30 mins",
        servings: "4 servings",
        ingredients: [
            "500g chicken",
            "100g butter",
            "200ml cream",
            "2 tomatoes",
            "Spices"
        ],
        steps: [
            "Marinate chicken with spices.",
            "Cook chicken in butter until done.",
            "Prepare tomato gravy.",
            "Add cream and simmer.",
            "Combine chicken with gravy and serve."
        ]
    },
    Chessesand: {
        title: "Cheese Sandwich",
        image: "img/c.jpg",
        prepTime: "10 mins",
        cookTime: "5 mins",
        servings: "2 sandwiches",
        ingredients: [
            "4 slices bread",
            "100g cheese",
            "Butter",
            "Salt",
            "Pepper"
        ],
        steps: [
            "Butter the bread slices.",
            "Place cheese between two slices.",
            "Grill until golden brown."
        ]
    },
    Masaladosa: {
        title: "Masala Dosa",
        image: "img/d.jpeg",
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: "4 dosas",
        ingredients: [
            "2 cups dosa batter",
            "4 potatoes",
            "1 onion",
            "Spices",
            "Oil"
        ],
        steps: [
            "Prepare potato filling with spices.",
            "Heat a pan and pour dosa batter to form a thin layer.",
            "Cook until crispy, add filling, and fold.",
            "Serve with chutney."
        ]
    },  
    DalTadka: {
        title: "Dal Tadka",
        image: "img/dal.webp",
        prepTime: "10 mins",
        cookTime: "25 mins",
        servings: "4 servings",
        ingredients: [
            "1 cup lentils",
            "2 tomatoes",
            "1 onion",
            "Spices",
            "Ghee"
        ],
        steps: [
            "Cook lentils until soft.",
            "Prepare tadka with ghee and spices.",
            "Mix tadka into cooked lentils.",
            "Simmer for 5 minutes and serve."
        ]
    },  
    PavBhaji: {
        title: "Pav Bhaji",
        image: "img/pav.webp",
        prepTime: "20 mins",
        cookTime: "30 mins",
        servings: "4 servings",
        ingredients: [
            "4 pav buns",
            "2 cups mixed vegetables",
            "2 tomatoes",
            "Spices",
            "Butter"
        ],
        steps: [
            "Boil and mash mixed vegetables.",
            "Prepare bhaji with tomatoes and spices.",
            "Toast pav buns with butter.",
            "Serve bhaji with pav."
        ]
    },
    MalaiKofta: {
        title: "Malai Kofta",
        image: "img/m.jpeg",
        prepTime: "30 mins",
        cookTime: "25 mins",
        servings: "4 servings",
        ingredients: [
            "200g paneer",
            "100g potatoes",
            "200ml cream",
            "2 tomatoes",
            "Spices"
        ],
        steps: [
            "Make koftas with paneer and potatoes.",
            "Prepare tomato gravy with spices.",
            "Add cream and simmer.",
            "Serve koftas in gravy."
        ]
    },
    AglioE: {
        title: "Aglio E Olio",
        image: "img/s.webp",
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: "2 servings",
        ingredients: [
            "200g spaghetti",
            "4 cloves garlic",
            "1/4 cup olive oil",
            "Chili flakes",
            "Parsley"
        ],
        steps: [
            "Cook spaghetti until al dente.",
            "Sauté garlic in olive oil.",
            "Add chili flakes and cooked spaghetti.",
            "Toss with parsley and serve."
        ]
    },
    Gajarka: {
        title: "Gajar ka Halwa",
        image: "img/gajar.jpeg",
        prepTime: "15 mins",
        cookTime: "45 mins",
        servings: "4 servings",
        ingredients: [
            "4 cups grated carrots",
            "2 cups milk",
            "1 cup sugar",
            "1/2 cup ghee",
            "Cardamom"
        ],
        steps: [
            "Cook grated carrots in milk until soft.",
            "Add sugar and cook until dissolved.",  
            "Stir in ghee and cardamom.",
            "Cook until mixture thickens and serve."
        ]
    },
    MangoSmoothie: {
        title: "Mango Smoothie",
        image: "img/mango.jpg",
        prepTime: "5 mins",
        cookTime: "0 mins",     
        servings: "2 servings", 
        ingredients: [
            "2 ripe mangoes",
            "1 cup yogurt",
            "1/2 cup milk",
            "Honey"
        ],
        steps: [
            "Peel and chop mangoes.",
            "Blend mangoes, yogurt, milk, and honey until smooth.",
            "Serve chilled."
        ]
    },
    Parfait: {
        title: "Fruit Yogurt Parfait",
        image: "img/fruit.jpeg",  
        prepTime: "10 mins",
        cookTime: "0 mins",
        servings: "2 servings", 
        ingredients: [
            "1 cup yogurt",
            "1/2 cup granola",
            "1 cup mixed fruits",
            "Honey"
        ],
        steps: [
            "Layer yogurt, granola, and fruits in a glass.",
            "Drizzle honey on top.",
            "Repeat layers and serve."
        ]
    },
    QuinoaSalad: {
        title: "Quinoa Salad",
        image: "img/salad.jpg",
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: "2 servings",
        ingredients: [
            "1 cup quinoa",
            "1 cucumber",
            "1 tomato",
            "1/4 cup feta cheese",
            "Olive oil"
        ],
        steps: [
            "Cook quinoa and let it cool.",
            "Chop cucumber and tomato.",
            "Mix quinoa, vegetables, and feta cheese.",
            "Drizzle olive oil and serve."
        ]   
    },
    GarlicBread: {
        title: "Garlic Bread",
        image: "img/garlic.jpg",
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: "4 servings",
        ingredients: [
            "1 baguette",
            "100g butter",
            "4 cloves garlic",
            "Parsley"
        ],
        steps: [
            "Mix softened butter with minced garlic and parsley.",
            "Slice baguette and spread garlic butter mixture.",
            "Bake at 180°C for 15 minutes.",
            "Serve warm."
        ]
    },
    FrenchFries: {
        title: "French Fries",
        image: "img/fries.jpg",
        prepTime: "10 mins",
        cookTime: "20 mins",
        servings: "4 servings",
        ingredients: [
            "4 large potatoes",
            "Oil for frying",
            "Salt"
        ],  
        steps: [
            "Peel and cut potatoes into fries.",
            "Heat oil in a deep fryer.",
            "Fry potatoes until golden brown.",
            "Drain on paper towels and season with salt."
        ]
    },

    images: {
        title: "",
        image: "img/images.jpeg"
        
    },

    img4: {
        title: "",
        image: "img/img 4.jpeg"
    },

    img6: {
        title: "",
        image: "img/img 6.jpeg"
    },

    img7: {
        title: "",
        image: "img/img 7.jpeg"
    },

    img9: {
        title: "",
        image: "img/img 9.jpeg"
    },

    img1: {
        title: "",
        image: "img/img1.avif"
    },

    img2: {
        title: "",
        image: "img/img2.jpeg"
    },

    img3: {
        title: "",
        image: "img/img3.jpeg"
    },

    pavbhaji: {
        title: "",
        image: "img/pav bhaji.webp"
    },

    sandwich: {
        title: "",
        image: "img/sandwich.jpeg"
    }



};
