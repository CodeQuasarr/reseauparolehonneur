const surveyEmailTemplate = (url: string) => {
    return `
        <!doctype html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <title>Votre avis compte</title>
        </head>
        <body class="flex items-center justify-center">
        <div class="p-5 w-5/12">
            <div class="flex items-center mb-5">
                <div><img class="img-responsive w-12 h-12" src="http://localhost:3000/_nuxt/assets/images/logos/logo.png"
                          alt=""></div>
                <div>
                    <h1 class="text-xl font-bold ms-3">RESEAU PAROLE D'HONNEUR</h1>
                </div>
            </div>
            <p class="mb-5 text-sm">
                Nous espérons que vous avez apprécié le dernier cocktail business que nous avons organisé. Votre présence et votre participation ont grandement contribué au succès de l'événement, et nous tenons à vous exprimer notre gratitude.
            </p>
            <p class="mb-5 text-sm">
                Nous aimerions recueillir vos précieuses impressions sur le cocktail business afin d'améliorer nos futurs événements. Pour cela, nous vous invitons à prendre quelques instants pour répondre à notre sondage en cliquant sur le lien ci-dessous :
            </p>
            <p class="mb-5">
                <a class="p-2 bg-[#D444B5] hover:bg-[#bf3da3] text-white rounded-md" href="${url}" target="_blank">
                    SONDAGE EN LIGNE
                </a>
            </p>
            <p class="mb-5 text-sm">
                Vos commentaires sont essentiels pour nous, et nous sommes impatients de les recevoir. Votre retour d'expérience nous aidera à adapter nos futurs événements pour mieux répondre à vos attentes.
            </p>
        
            <p class="mb-5 text-sm">
                Encore une fois, merci d'avoir participé à notre dernier cocktail business. Nous sommes reconnaissants de votre soutien continu.
            </p>
            
            <div class="mt-10 text-gray-400 text-sm">
                © 2023 Réseau Parole d'Honneur. Tous droit reserver
            </div>
        </div>
        </body>
        </html>
    `;
};

export default surveyEmailTemplate;
