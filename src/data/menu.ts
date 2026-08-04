import pasta from "@/assets/dish-pasta.jpg";
import seafood from "@/assets/dish-seafood.jpg";
import steak from "@/assets/dish-steak.jpg";
import burger from "@/assets/dish-burger.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import coffee from "@/assets/dish-coffee.jpg";
import salad from "@/assets/dish-salad.jpg";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  badge?: "Popular" | "Chef's Pick";
};

export const categories = [
  "Pasta & Italian",
  "Steak & Grills",
  "Soup",
  "Salad",
  "Chinese Platter",
  "Seafood Set Menu",
  "Burgers & Sandwiches",
  "Dessert",
  "Coffee & Drinks",
] as const;

export const menuItems: MenuItem[] = [
  {
    name: "Pinewood Signature Pasta",
    description: "Creamy alfredo with grilled chicken, parmesan and fresh herbs.",
    price: 620,
    category: "Pasta & Italian",
    image: pasta,
    badge: "Chef's Pick",
  },
  {
    name: "Spaghetti Bolognese",
    description: "Slow-cooked beef ragu over al dente spaghetti.",
    price: 590,
    category: "Pasta & Italian",
  },
  {
    name: "Penne Arrabbiata",
    description: "Chilli-spiked tomato sauce, garlic and basil.",
    price: 520,
    category: "Pasta & Italian",
  },
  {
    name: "Chicken Lasagna",
    description: "Layered pasta, béchamel and a golden cheese crust.",
    price: 650,
    category: "Pasta & Italian",
  },
  {
    name: "Mexican Chicken",
    description: "Grilled chicken breast with smoky salsa, veggies and wedges.",
    price: 690,
    category: "Steak & Grills",
    image: steak,
    badge: "Popular",
  },
  {
    name: "Beef Tenderloin Steak",
    description: "Char-grilled tenderloin, mushroom sauce, buttered vegetables.",
    price: 1150,
    category: "Steak & Grills",
  },
  {
    name: "Chicken Cordon Bleu",
    description: "Crumbed chicken stuffed with cheese, served with mash.",
    price: 780,
    category: "Steak & Grills",
  },
  {
    name: "Cream of Mushroom Soup",
    description: "Silky mushroom soup finished with cream and thyme.",
    price: 260,
    category: "Soup",
  },
  {
    name: "Thai Thick Soup",
    description: "Chicken, prawn and vegetables in a tangy Thai broth.",
    price: 320,
    category: "Soup",
  },
  {
    name: "Sweet Corn Chicken Soup",
    description: "Comforting corn and shredded chicken soup.",
    price: 250,
    category: "Soup",
  },
  {
    name: "Seafood Salad",
    description: "Prawn, calamari and greens with a citrus dressing.",
    price: 560,
    category: "Salad",
    image: salad,
    badge: "Popular",
  },
  {
    name: "Garden Caesar Salad",
    description: "Crisp romaine, parmesan, croutons and creamy Caesar.",
    price: 420,
    category: "Salad",
  },
  {
    name: "Chinese Platter for Two",
    description: "Fried rice, chilli chicken, vegetables and prawn crackers.",
    price: 990,
    category: "Chinese Platter",
  },
  {
    name: "Chicken Chowmein",
    description: "Wok-tossed noodles with chicken and crunchy vegetables.",
    price: 450,
    category: "Chinese Platter",
  },
  {
    name: "Mixed Fried Rice",
    description: "Egg, chicken and prawn fried rice, wok finished.",
    price: 470,
    category: "Chinese Platter",
  },
  {
    name: "Grilled Seafood Set Menu",
    description: "Grilled prawn, fish fillet, rice, salad and a soft drink.",
    price: 1290,
    category: "Seafood Set Menu",
    image: seafood,
    badge: "Chef's Pick",
  },
  {
    name: "Prawn Butter Garlic",
    description: "Jumbo prawns in butter, garlic and lemon.",
    price: 890,
    category: "Seafood Set Menu",
  },
  {
    name: "Pinewood Beef Burger",
    description: "Double patty, cheddar, house sauce and fries.",
    price: 540,
    category: "Burgers & Sandwiches",
    image: burger,
    badge: "Popular",
  },
  {
    name: "Grilled Chicken Sandwich",
    description: "Toasted sourdough, grilled chicken, greens and aioli.",
    price: 430,
    category: "Burgers & Sandwiches",
  },
  {
    name: "Chocolate Fudge Cake",
    description: "Dense chocolate cake with berries and cream.",
    price: 320,
    category: "Dessert",
    image: dessert,
  },
  {
    name: "Classic Crème Brûlée",
    description: "Vanilla custard under a torched caramel crust.",
    price: 350,
    category: "Dessert",
  },
  {
    name: "Café Latte",
    description: "Double espresso with steamed milk and latte art.",
    price: 220,
    category: "Coffee & Drinks",
    image: coffee,
  },
  {
    name: "Cappuccino",
    description: "Espresso, milk and a thick velvety foam.",
    price: 210,
    category: "Coffee & Drinks",
  },
  {
    name: "Oreo Freezer",
    description: "Blended oreo, milk and ice cream, whipped cream top.",
    price: 280,
    category: "Coffee & Drinks",
  },
  {
    name: "Masala Tea",
    description: "Spiced milk tea brewed the slow way.",
    price: 120,
    category: "Coffee & Drinks",
  },
];
