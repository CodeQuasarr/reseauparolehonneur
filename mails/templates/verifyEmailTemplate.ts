const verifyEmailTemplate = (name: string, url: string) => {
    return `
        <!doctype html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Confirmation d'email de connexion</title>
        </head>
        <body class="flex items-center justify-center">
            <div class="p-5 w-5/12">
                <div class="flex items-center mb-5">
                    <div><img class="img-responsive w-12 h-12" src="http://localhost:3000/_nuxt/assets/images/logos/logo.png" alt=""></div>
                    <div>
                        <h1 class="text-xl font-bold ms-3">RESEAU PAROLE D'HONNEUR</h1>
                    </div>
                </div>
                <p class="mb-5 text-sm">Bonjour ${name}</p>
                <p class="mb-5 text-sm">Vous avez demandé à utiliser cette adresse électronique pour accéder à votre compte Réseau Parole d'Honneur.</p>
                <p class="mb-5 text-sm">Cliquez sur le lien ci-dessous pour vérifier cette adresse électronique.</p>
        
                <a class="p-2 bg-[#D444B5] hover:bg-[#bf3da3] text-white rounded-md" href="${url}" target="_blank">VÉRIFIER L'ADRESSE ÉLECTRONIQUE</a>
                
                <div class="mt-10 text-gray-400 text-sm" >
                    © 2023 Réseau Parole d'Honneur. Tous droit reserver
                </div>
            </div>
        </body>
        </html>
    `;
};

export default verifyEmailTemplate;
