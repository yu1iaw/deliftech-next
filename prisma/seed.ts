import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});


const shopData: Prisma.ShopCreateInput[] = [
    {
        name: "McDonny",
        rating: 4.5,
    },
    {
        name: "CFK",
        rating: 3.5,
    },
];

const categoryData: Prisma.CategoryCreateInput[] = [
    { name: "burgers" },
    { name: "desserts" },
    { name: "drinks" }
]

const itemData: Prisma.ItemCreateInput[] = [
    {
        name: "Classic Smash",
        price: 5.99,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Bacon Cheddar",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Spicy Jalapeno",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Double Stack",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Avocado Ranch",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Brie & Fig",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Korean BBQ",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Breakfast Stack",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Loaded Chili",
        price: 4.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Veggie Deluxe",
        price: 3.99,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Mushroom Swiss",
        price: 6.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Hawaiian Pineapple",
        price: 6.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Truffle Burger",
        price: 6.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Tex-Mex Fiesta",
        price: 6.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Black Bean Burger",
        price: 5.99,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Chimichurri Beef",
        price: 6.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Blue Cheese Crunch",
        price: 6.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "BBQ Smokehouse",
        price: 6.50,
        category: { connect: { id: 4 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Chocolate Fudge",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Lemon Tart",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Salted Caramel",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Berry Crumble",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Cheesecake Slice",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Warm Brownie",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Vanilla Bean Panna",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Mango Sorbet",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Sticky Toffee",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Nutella Crepe",
        price: 3.50,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Apple Pie",
        price: 2.89,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Key Lime Pie",
        price: 2.89,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Tiramisu Cup",
        price: 2.89,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Pistachio Gelato",
        price: 2.89,
        category: { connect: { id: 5 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Caramel Macchiato",
        price: 1.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Ginger Ale Twist",
        price: 1.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Cucumber Cooler",
        price: 1.49,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Cold Brew",
        price: 1.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Spiced Chai",
        price: 1.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 4 } }
    },
    {
        name: "Berry Refresher",
        price: 2.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Mango Lassi",
        price: 2.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Coconut Smoothie",
        price: 2.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Pineapple Punch",
        price: 2.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Maple Latte",
        price: 2.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 5 } }
    },
    {
        name: "Horchata",
        price: 2.99,
        category: { connect: { id: 6 } },
        shop: { connect: { id: 5 } }
    },
]



export async function main() {
    await Promise.allSettled([
        ...shopData.map(async item => await prisma.shop.create({ data: item })),
        ...categoryData.map(async item => await prisma.category.create({ data: item })),
        ...itemData.map(async i => await prisma.item.create({ data: i }))

    ])
    console.log('DONE!');
}

main();