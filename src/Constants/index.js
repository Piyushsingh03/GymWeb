import { facebook, instagram, twitter } from "../assets/icons"
import { customer1, customer2, customer3, diet, weightlifting, womanfitness, yoga } from "../assets/images"


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about_us", label: "About Us" },
    { href: "#contact_us", label: "Contact Us" },
]


export const products = [
    {
        imgURL: weightlifting,
        name: "Body Building",
        slogan: "Forge Your Strength, Sculpt Your Victory: Elevate Your Body, Elevate Your Life!",
        price: "Rs. 3000"
    },
    {
        imgURL: yoga,
        name: "Yoga",
        slogan: "Harmony Within, Peace Throughout: Unleash the Power of Yoga, Embrace Your True Self.",
        price: "Rs. 2000"
    },
    {
        imgURL: womanfitness,
        name: "Female Fitness",
        slogan: "Empowered, Strong, Unstoppable: Unleash Your Potential with Female Fitness!",
        price: "Rs. 4000"
    },
    {
        imgURL: diet,
        name: "Free Nutrition Plan",
        slogan: "Nourish Your Body, Elevate Your Mood: Savor the Goodness, Embrace a Healthier You!",
        price: " Free"

    }
]

export const services = [
    {
        label: "Friendly Environment",
        subtext: "Building Strength, Fostering Unity: Your Journey to Fitness in a Gym Where Support is Standard."
    },
    {
        label: "Secure with Servilience",
        subtext: "Secure with Servilience: Safeguarding Wellness, Embracing Resilience."
    },
    {
        label: "Workout with Music",
        subtext: "Beat the Grind, Move to Your Groove: Elevate Your Workout with the Power of Music!"
    }
]

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Sam",
        rating: "⭐⭐⭐⭐⭐",
        feedback: "Fantastic gym with a motivating atmosphere, friendly staff, and top-notch cleanliness. Classes and trainers are a big plus – highly recommend!"
    },
    {
        imgURL: customer2,
        customerName: "Gewen",
        rating: "⭐⭐⭐⭐⭐",
        feedback: "Balanced gym with modern equipment and a welcoming community. Variety of classes and helpful staff. Parking can be tight at peak times."
    },
    {
        imgURL: customer3,
        customerName: "Chandler",
        rating: "⭐⭐⭐⭐",
        feedback: "Best gym experience! 24/7 access, caring trainers, and impeccable cleanliness. Diverse equipment for varied workouts. A fitness sanctuary – highly recommended!"
    },
]

export const footerLinks = [
    {
        title: "Get in touch",
        links: [
            { name: "customer@fitflex.com", link: "mailto:customer@fitflex.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
]



export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];