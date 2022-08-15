const devilFruitsData = [
    {
        id: 1,
        name: "Gomu Gomu no Mi",
        signification: "Le fruit du caoutchouc",
        user: "Monkey D. Luffy",
        utilities: "Confère le pouvoir de l'élasticité",
        type: "Zoan",
    },
    {
        id: 2,
        name: "Bara Bara no Mi",
        signification: "Le fruit de la fragmentation",
        user: "Baggy le clown",
        utilities: "Capacité de divisé son corps",
        type: "Paramecia",
    },
    {
        id: 3,
        name: "Ushi Ushi no Mi",
        signification: "Le fruit du bovin : version Girafe",
        user: "Kaku",
        utilities:
            "Permet à son utilisateur de se transformer complètement en girafe, ou en être hybride mi-humain mi-girafe",
        type: "Zoan",
    },

    {
        id: 4,
        name: "Awa Awa no Mi",
        signification: "Le fruit Bubulle",
        user: "Kalifa",
        utilities:
            "permet à son utilisateur d'émettre et de contrôler des bulles de savon qui peuvent non seulement servir à nettoyer mais aussi à vider sa victime de son énergie",
        type: "Paramecia",
    },
    {
        id: 5,
        name: "Yami Yami no Mi",
        signification: "Le fruit des ténèbres",
        user: "Marshall D. Teach",
        utilities:
            "permet à son utilisateur de produire, devenir et contrôler les ténèbres",
        type: "Logia",
    },
    {
        id: 6,
        name: "Sara Sara no Mi",
        signification: "Le fruit de la Salamandre",
        user: "Smiley",
        utilities:
            "permet à son utilisateur de se transformer en un Axolotl ou en une forme hybride",
        type: "Zoan",
    },
    {
        id: 7,
        name: "Mera Mera no Mi",
        signification: "Le fruit du feu",
        user: "Portgas D. Ace et Sabo",
        utilities:
            "permet à son utilisateur de créer, contrôler et de se transformer en feu à volonté",
        type: "Logia",
    },
    {
        id: 8,
        name: "Ope Ope no Mi",
        signification: "Le fruit du bistouri",
        user: "Trafalgar D. Water Law",
        utilities:
            "permet à son utilisateur de créer une sphère d'aura bleue claire translucide, où l'utilisateur peut contrôler comme bon lui semble le placement et l'orientation des objets et des êtres vivants à l'intérieur",
        type: "Paramecia",
    },
    {
        id: 9,
        name: "Ito Ito no Mi",
        signification: "Le fruit du file",
        user: "Don Quichotte Doflamingo",
        utilities:
            "permet à son utilisateur de créer et de manipuler des fils invisibles afin de les utiliser pour contrôler ses adversaires tels des marionnettes, découper toute chose, des personnes ou des bâtiments et même s'en servir pour voler dans le ciel en accrochant ces fils aux nuages",
        type: "Paramecia",
    },
    {
        id: 10,
        name: "Hana Hana no Mi",
        signification: "Le fruit des éclosions",
        user: "Nico Robin",
        utilities:
            "permet à son utilisateur, en l'ocurrence son utilisatrice, de copier des parties de son corps pour les faire éclore comme des fleurs. L'utlisatrice peut faire apparaître ces parties du corps n'importe où dans son champ de vision et au-delà",
        type: "Paramecia",
    },
    {
        id: 11,
        name: "Hito Hito no Mi",
        signification: "Le fruit de l'humain",
        user: "Tony Tony Chopper",
        utilities:
            "permet à son utilisateur de se transformer en hybride humain ou en humain à part entière",
        type: "Zoan",
    },
    {
        id: 12,
        name: "Yomi Yomi no Mi",
        signification: "Le fruit de la résurrection",
        user: "Brook",
        utilities: "permet à son utilisateur de revenir à la vie après sa mort",
        type: "Paramecia",
    },
    {
        id: 13,
        name: "Kage Kage no Mi",
        signification: "Le fruit de l'ombre",
        user: "Gecko Moria",
        utilities:
            "donne à son utilisateur le pouvoir de rendre tangible et de contrôler les ombres",
        type: "Paramecia",
    },
    {
        id: 14,
        name: "Hebi Hebi no Mi",
        signification: "Le fruit du serpent a 8 tête",
        user: "Kurozumi Orochi",
        utilities:
            "permet de se transformer en un serpent avec huit têtes, chacune possédant un long cou",
        type: "Zoan Mythique",
    },
    {
        id: 15,
        name: "Doru Doru no Mi",
        signification: "Le fruit du fumigène",
        user: "Galdino",
        utilities:
            "permet à son utilisateur de créer et de contrôler de la cire à volonté",
        type: "Paramecia",
    },
    {
        id: 16,
        name: "Moku Moku no Mi",
        signification: "Le fruit de la fragmentation",
        user: "Smoker",
        utilities:
            "permet à son utilisateur de maîtriser, de produire à volonté et de se transformer en fumée",
        type: "Logia",
    },
    {
        id: 17,
        name: "Sube Sube no Mi",
        signification: "Le fruit glisse-glisse",
        user: "Alvida",
        utilities:
            "rend le corps de l'utilisateur glissant, qui à son tour rend la plupart des attaques et tous les objets glissants hors de son corps, protégeant l'utilisateur contre tout mal dans la plupart des situations",
        type: "Paramecia",
    },
    {
        id: 18,
        name: "Bomu Bomu no Mi",
        signification: "Le fruit boum-boum",
        user: "Gem",
        utilities:
            "permet à son utilisateur de faire exploser toute partie de son corps",
        type: "Paramecia",
    },
    {
        id: 19,
        name: "Kilo Kilo no Mi",
        signification: "Le fruit du kilo",
        user: "Miss Valentine",
        utilities:
            "permet à son utilisateur de changer librement sa masse de 1 à 10 000 kg",
        type: "Paramecia",
    },
    {
        id: 20,
        name: "Ushi Ushi no Mi",
        signification: "Le fruit du bovin : version Bison",
        user: "Dalton",
        utilities:
            "permet à son utilisateur de se transformer soit en un hybride homme-bison ou en bison complet",
        type: "Zoan",
    },
    {
        id: 21,
        name: "Jiki Jiki no Mi",
        signification: "Le fruit de l'électromagnétisme",
        user: "Eustass Kid",
        utilities: "permet à son utilisateur de contrôler l'électromagnétisme.",
        type: "Paramecia",
    },
    {
        id: 22,
        name: "Mochi Mochi no Mi",
        signification: "Le fruit du mochi",
        user: "Charlotte Katakuri",
        utilities:
            "permet à son utilisateur de contrôler, de produire et de se transformer en Mochi",
        type: "Paramecia",
    },
    {
        id: 23,
        name: "Bijo Bijo no Mi",
        signification: "Le fruit des illusions",
        user: "Ann",
        utilities:
            "permet à son utilisateur de créer des illusions temporaires mais tangibles en touchant des images",
        type: "Paramecia",
    },
];

export default devilFruitsData;
