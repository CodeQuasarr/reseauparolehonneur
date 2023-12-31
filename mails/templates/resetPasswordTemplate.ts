const verifyEmailTemplate = (name: string, url: string) => {
    return `
    <!DOCTYPE html>
    <html lang="fr">
    
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    
    <body style="padding: 40px;">
        <div style=" display: flex; flex-direction: column; align-items: center; justify-content: center ">
            <img height="150 " width="150 " src="https://cdn.pixabay.com/photo/2021/10/20/16/07/forgot-password-6726499_1280.png " alt="pixabay azmeyart-design ">
            <h1>Vous avez oublié votre mot de passe ?</h1>
            <p style="color: #797979">
                Il vous suffit d'appuyer sur le bouton ci-dessous et de suivre les instructions.
            </p>
            <a style=" font-size: 17px; text-transform: uppercase;text-decoration: none; font-weight: 500;border-radius: 5px; padding: 17px; background-color: #4338ca; color: white " href="${url}" target="_blank ">réinitialiser votre mot de passe</a>
        </div>
    
    </body>
    
    </html>
    `;
};

export default verifyEmailTemplate;
