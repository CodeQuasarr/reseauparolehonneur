class HelperService {




    public static convertNumberToHours(startDateTimestamp: number) {


// Convertir le timestamp en millisecondes
        const startDateMilliseconds: number = startDateTimestamp * 1000;

// Créer un objet Date à partir des millisecondes
        const startDateObject: Date = new Date(startDateMilliseconds);

// Formater la date comme "15 janvier 2024"
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedStartDate: string = startDateObject.toLocaleDateString('fr-FR', options);

        return formattedStartDate;
    }

}
export default HelperService;
