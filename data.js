const menuArray = [
    {
        id: 0,
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        img: "assets/pizza.png",
        alt: "pizza",
        qty: 1,
    },
    {
        id: 1,
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        img: "assets/hamburger.png",
        alt: "hamburger",
        qty:1
    },
    {
        id: 2,
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        img: "assets/beer.png",
        alt: "beer",
        qty:1
    }
]

const couponsArray = [
    {
        code: "DISCOUNT10",
        discount: 0.1
    },
    {
        code: "DISCOUNT20",
        discount: 0.2
    },
    {
        code: "DISCOUNT30",
        discount: 0.3
    }
]

export { menuArray, couponsArray }