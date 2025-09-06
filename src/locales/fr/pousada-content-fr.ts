import imagensPousada from "../../data/imagens-pousada";

const descTerreo = {
    casal: "Suite Double",
    triplo: "Suite Triple",
    quad: "Suite Quadruple",
    sex: "Suite Sextuple",
    subtitle: "",
    description: "Salle de bain privée, Climatisation, Balcon avec Hamac et Vue",
}

const descSuperior = {
    casal: "Suite Double",
    triplo: "Suite Triple",
    quad: "Suite Quadruple",
    sex: "Suite Sextuple",
    subtitle: "",
    description: "Salle de bain privée, Climatisation, Balcon avec Hamac et Vue",
}

export const pousadaContent = {
    geral: {
        pousada: {
            slug: "pousada",
            title: "Pousada Toa Toa à Pipa",
            subtitle: "Maison d’hôtes à 30 mètres de la Praia do Amor à Pipa RN",
            description: "Suites complètes, piscine, parking, cuisine partagée",
            imagesPaths: imagensPousada.areasComuns,
        },
        piscina: {
            slug: "piscine",
            title: "",
            subtitle: "",
            description: "",
            imagesPaths: "",
        },
        cozinha: {
            slug: "cuisine",
            title: "",
            subtitle: "",
            description: "",
            imagesPaths: "",
        },
        estacionamento: {
            slug: "parking",
            title: "",
            subtitle: "",
            description: "",
            imagesPaths: "",
        },
    },
    qrtsTerreos : {
        azul : {
            slug: "azul",
            title: descTerreo.triplo,
            subtitle: descTerreo.description,
            description: descTerreo.description,
            imagesPaths: imagensPousada.qrtoazul,
            cover: imagensPousada.qrtoazul[0]
        },
        chale : {
            slug: "chale",
            title: descTerreo.triplo,
            subtitle: descTerreo.description,
            description: descTerreo.description,
            imagesPaths: imagensPousada.qrtochale,
            cover: imagensPousada.qrtochale[0]
        },
        laranja : { 
            slug: "laranja",
            title: descTerreo.casal,
            subtitle: descTerreo.description,
            description: descTerreo.description,
            imagesPaths: imagensPousada.qrtolaranja,
            cover: imagensPousada.qrtolaranja[0]
        },
    },
    qrtsSuperiores : {
        rosa : {
            slug: "rosa",
            title: descSuperior.triplo,
            subtitle: descSuperior.description,
            description: descSuperior.description,
            imagesPaths: imagensPousada.qrtorosa,
            cover: imagensPousada.qrtorosa[0]
        },
        verde : { 
            slug: "verde",
            title: descSuperior.sex,
            subtitle: descSuperior.description,
            description: descSuperior.description,
            imagesPaths: imagensPousada.qrtoverde,
            cover: imagensPousada.qrtoverde[0]
        }
    }
}
