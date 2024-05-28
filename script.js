const data = [
    {
        "Nom": "Restos du coeur",
        "Nombre d'adhérents": "21 adhérents collaborant",
        "Cible": "Personnes en situation de précarité, sans-abri, familles en difficulté",
        "Périmètre": "National (France)",
        "Actions": "Distribution de repas, aide à l'hébergement, insertion professionnelle, soutien scolaire",
        "Lien": "https://www.restosducoeur.org"
    },
    {
        "Nom": "Dons solidaires",
        "Nombre d'adhérents": "5 adhérents collaborant",
        "Cible": "Personnes en situation de précarité, enfants, familles",
        "Périmètre": "National (France)",
        "Actions": "Redistribution de produits neufs invendus, aide matérielle",
        "Lien": "https://www.donsolidaires.fr"
    },
    {
        "Nom": "Banques alimentaires",
        "Nombre d'adhérents": "19 adhérents collaborant",
        "Cible": "Personnes en situation de précarité, familles",
        "Périmètre": "National (France), réseau international",
        "Actions": "Collecte et distribution de denrées alimentaires, lutte contre le gaspillage alimentaire",
        "Lien": "https://www.banquealimentaire.org"
    },
    {
        "Nom": "Association Nationale des Épiceries Solidaires",
        "Nombre d'adhérents": "4 adhérents collaborant",
        "Cible": "Personnes en situation de précarité",
        "Périmètre": "National (France)",
        "Actions": "Épiceries solidaires, accès à une alimentation de qualité à moindre coût",
        "Lien": "https://andes-france.com"
    },
    {
        "Nom": "Secours Populaire",
        "Nombre d'adhérents": "15 adhérents collaborant",
        "Cible": "Personnes en situation de précarité, enfants, familles, personnes âgées",
        "Périmètre": "National (France), International",
        "Actions": "Aide alimentaire, aide vestimentaire, soutien scolaire, accès aux vacances, aide d'urgence",
        "Lien": "https://www.secourspopulaire.fr"
    },
    {
        "Nom": "Croix Rouge",
        "Nombre d'adhérents": "9 adhérents collaborant",
        "Cible": "Personnes en situation de précarité, enfants, familles, personnes âgées, sans-abri",
        "Périmètre": "National (France), International",
        "Actions": "Secours d'urgence, aide alimentaire, formation aux premiers secours, aide à l'hébergement, soutien psychologique",
        "Lien": "https://www.croix-rouge.fr"
    },
    {
        "Nom": "Agence du Don en Nature",
        "Nombre d'adhérents": "6 adhérents collaborant",
        "Cible": "Personnes en situation de précarité",
        "Périmètre": "National (France)",
        "Actions": "Redistribution de produits de première nécessité, lutte contre le gaspillage, aide matérielle",
        "Lien": "https://www.adnfrance.org/7"
    }
];

const additionalData = [
    {
        "Nom": "Agir pour la Santé des Femmes (ADSF)",
        "Adhérents": "Essity France",
        "Cible": "Femmes en situation de précarité",
        "Périmètre": "National",
        "Actions": "Consultations médicales, distribution de kits d'hygiène, actions de prévention et d'éducation à la santé",
        "Lien": "https://adsfasso.org/"
    },
    {
        "Nom": "Association ICI Pass",
        "Adhérents": "Bel France",
        "Cible": "Enfants et adolescents",
        "Périmètre": "Local (principalement en région Île-de-France)",
        "Actions": "Soutien scolaire, activités culturelles et sportives, accompagnement social",
        "Lien": ""
    },
    {
        "Nom": "Association Sœur Emmanuelle",
        "Adhérents": "S.C. Johnson",
        "Cible": "Populations défavorisées, notamment en Afrique",
        "Périmètre": "International",
        "Actions": "Éducation, accès à l'eau potable, santé, développement économique",
        "Lien": "https://www.asmae.fr/"
    },
    {
        "Nom": "Banlieue Santé",
        "Adhérents": "L'Oréal",
        "Cible": "Personnes en situation de précarité dans les banlieues",
        "Périmètre": "National",
        "Actions": "Accès aux soins, prévention sanitaire, accompagnement social",
        "Lien": "https://banlieues-sante.org/"
    },
    {
        "Nom": "Carritas",
        "Adhérents": "General Mills",
        "Cible": "Familles en difficulté, sans-abri, réfugiés",
        "Périmètre": "International",
        "Actions": "Aide alimentaire, hébergement d'urgence, soutien psychologique",
        "Lien": "https://www.caritas.org/"
    },
    {
        "Nom": "COP1",
        "Adhérents": "Innocent Drinks, GB Foods",
        "Cible": "Étudiants en difficulté",
        "Périmètre": "National",
        "Actions": "Distribution de colis alimentaires, aide financière, accompagnement psychologique",
        "Lien": "https://cop1.fr/"
    },
    {
        "Nom": "Les apprentis d'Autueil",
        "Adhérents": "CCEP, L'Oréal",
        "Cible": "Jeunes en difficulté",
        "Périmètre": "National",
        "Actions": "Éducation, formation professionnelle, accompagnement social",
        "Lien": "https://www.apprentis-auteuil.org/"
    },
    {
        "Nom": "Oasis d'amour",
        "Adhérents": "Bel France",
        "Cible": "Personnes sans-abri",
        "Périmètre": "Local",
        "Actions": "Distribution de repas, hébergement d'urgence, aide à la réinsertion",
        "Lien": "https://www.oasis-damour.com/"
    },
    {
        "Nom": "Pharma Solidaires",
        "Adhérents": "L'Oréal",
        "Cible": "Personnes en grande précarité",
        "Périmètre": "Local",
        "Actions": "Collecte et distribution de médicaments, campagnes de sensibilisation à l'accès aux soins",
        "Lien": "https://www.pharmasolidaires.com/"
    },
    {
        "Nom": "Pacte 62",
        "Adhérents": "Bel France",
        "Cible": "Personnes en situation de précarité",
        "Périmètre": "Régional (Pas-de-Calais)",
        "Actions": "Aide alimentaire, accompagnement social, activités culturelles",
        "Lien": "https://dora.inclusion.beta.gouv.fr/structures/pacte-62"
    },
    {
        "Nom": "Revivre",
        "Adhérents": "Pepsico, GB Foods, Colgate Palmolive",
        "Cible": "Réfugiés et demandeurs d'asile",
        "Périmètre": "National",
        "Actions": "Aide à l'hébergement, soutien psychologique, intégration sociale",
        "Lien": "https://www.revivre-asso.com/"
    },
    {
        "Nom": "Rudy Gobert Academy",
        "Adhérents": "Kellogg France",
        "Cible": "Jeunes sportifs",
        "Périmètre": "National",
        "Actions": "Formation sportive, mentorat, soutien éducatif",
        "Lien": "https://www.rudygobertcamp.com/"
    },
    {
        "Nom": "Samu Social",
        "Adhérents": "L'Oréal",
        "Cible": "Personnes sans-abri",
        "Périmètre": "National",
        "Actions": "Maraudes, hébergement d'urgence, soins médicaux",
        "Lien": "https://www.samusocial.paris/"
    },
    {
        "Nom": "SPA",
        "Adhérents": "Materne France",
        "Cible": "Animaux abandonnés",
        "Périmètre": "National",
        "Actions": "Refuge, adoption, soins vétérinaires",
        "Lien": "https://www.la-spa.fr/"
    },
    {
        "Nom": "Tout le monde chante contre le cancer",
        "Adhérents": "Playmobil France",
        "Cible": "Enfants atteints de cancer",
        "Périmètre": "National",
        "Actions": "Événements musicaux, soutien aux familles, financement de la recherche",
        "Lien": "https://www.toutlemondechante.net/"
    },
    {
        "Nom": "Programme Malin",
        "Adhérents": "Danone France",
        "Cible": "Familles à faibles revenus avec jeunes enfants",
        "Périmètre": "National",
        "Actions": "Conseils nutritionnels, aide alimentaire, ateliers éducatifs",
        "Lien": "https://programme-malin.com/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const combinedData = [...data, ...additionalData];
    const select = document.getElementById('associationSelect');
    combinedData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.Nom;
        option.textContent = item.Nom;
        select.appendChild(option);
    });

    document.getElementById('searchInput').addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const filteredData = combinedData.filter(item => 
            item.Nom.toLowerCase().includes(query) ||
            (item.Adhérents && item.Adhérents.toLowerCase().includes(query)) ||
            item.Cible.toLowerCase().includes(query) ||
            item.Périmètre.toLowerCase().includes(query) ||
            item.Actions.toLowerCase().includes(query)
        );
        displayData(filteredData);
    });

    document.getElementById('associationSelect').addEventListener('change', filterByAssociation);
    document.getElementById('resetButton').addEventListener('click', resetFilter);

    function filterByAssociation() {
        const select = document.getElementById('associationSelect');
        const selectedAssociation = select.value;
        if (selectedAssociation) {
            const filteredData = combinedData.filter(item => item.Nom === selectedAssociation);
            displayData(filteredData);
        } else {
            resetFilter();
        }
    }

    function resetFilter() {
        displayData(combinedData);
    }

    function displayData(data) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';  // Effacer le contenu précédent
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML = `
                <strong>${item.Nom}</strong> - ${item["Nombre d'adhérents"] || item.Adhérents}
                <p>${item.Cible}</p>
                <p>${item.Périmètre}</p>
                <p>${item.Actions}</p>
                <a href="${item.Lien}" target="_blank">Visiter le site</a>
            `;
            contentDiv.appendChild(div);
        });
    }

    // Afficher toutes les données par défaut
    resetFilter();
});
