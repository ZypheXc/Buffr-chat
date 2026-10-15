const express = require('express');
const server = express()
server.set('view engine', 'ejs'); 

const ejsDefault = { 
    pageTitle: "Buffrchat — Game Together. Stay Private.",
    user: null,
    os: "Windows",
    currentLanguage: "English (US)",

    navLinks: [
        { name: "Privacy", url: "/privacy" },
        { name: "Support", url: "/support" }
    ],

    heroTitle: "Built by Gamers. Powered by Community.",
    heroSubtitle: "Buffrchat brings gamers together with voice chat, messaging, and communities built around what matters most: your games, your friends, and your privacy. No selling your personal data. Just gaming.",

    features: [
        {
            title: "Your Community. Your Rules.",
            description: "Create gaming communities, organize your squads, share strategies, and make new friends in a space built for gamers."
        },
        {
            title: "Stay Connected In-Game",
            description: "Jump into voice chats, send messages, and coordinate your next match with the people who make gaming better."
        },
        {
            title: "Privacy Isn't an Upgrade",
            description: "Your personal data isn't a product. Buffrchat puts privacy first, so you can focus on your community without worrying about your information being sold."
        },
        {
            title: "Made for the Way Gamers Play",
            description: "From casual hangouts to competitive team play, Buffrchat gives your squad a place to connect, communicate, and grow together."
        }
    ],

    footerMenu: {
        Product: [
            "Features",
            "Communities",
            "What's New"
        ],
        Company: [
            "About Buffrchat",
            "Our Mission",
            "Contact",
            "Newsroom"
        ],
        Resources: [
            "Support",
            "Privacy Policy",
            "Community Guidelines",
            "Security"
        ]
}}

server.get("/", (req, res) => {
    res.render('home', ejsDefault);

})

server.get("/app", (req, res) => {
    res.render('account', ejsDefault);

})

server.listen(3000, () => {
    console.log("Listening bro.")
})