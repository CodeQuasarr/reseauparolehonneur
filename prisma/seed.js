import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import * as argon2 from "argon2";

async function seedUsers () {
    try {
        const firstNames = ["John", "Jane", "Michael", "Emily", "William", "Sophia", "David", "Olivia", "Robert", "Ava"];
        const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];
        const languages = ["en", "fr", "es", "de", "it", "pt", "ru"];
        const cities = ["Paris", "Bordeaux", "Dax", "Lyon", "Rennes", "Biarritz", "Pau", "Tours", "Bayonne", "Toulouse"];
        const countries = ["France", "United States", "United Kingdom", "Japan", "Germany", "Italy", "Australia", "Canada", "China", "Spain"];
        const hashedPassword = await argon2.hash("password");


        for (let i = 0; i < 50; i++) {
            const isVerified = Math.random() >= 0.5;

            // Calculate birthdate to represent an age between 20 and 70
            const currentDate = new Date();
            const birthYear = currentDate.getFullYear() - Math.floor(Math.random() * 51) - 20;
            const birthDate = new Date(birthYear, 0, 1);

            await prisma.user.create({
                data: {
                    role: "USER",
                    email: `user${i + 1}@example.com`,
                    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
                    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
                    password: hashedPassword,
                    isVerified: isVerified,
                    isBanned: false,
                    birthDate: birthDate,
                    job: "Developer",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
                    address: `${i + 1} rue de la paix 75000 ${cities[Math.floor(Math.random() * cities.length)]}`,
                    city: cities[Math.floor(Math.random() * cities.length)],
                    country: "France",
                    phone: "0" + Math.floor(Math.random() * 1000000000).toString().padStart(9, '0'),
                    avatar: "default.png",
                    language_1: languages[Math.floor(Math.random() * languages.length)],
                    language_2: languages[Math.floor(Math.random() * languages.length)],
                }
            });
        }

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

seedUsers();
