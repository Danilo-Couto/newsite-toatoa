import imagensPousada from "../../data/imagens-pousada";

const descTerreo = {
    casal: "Suite Doble",
    triplo: "Suite Triple",
    quad: "Suite Cuádruple",
    sex: "Suite Séxtuple",
    subtitle: "",
    description: "Baño Privado, Aire Acondicionado, Balcón con Hamaca y Vista",
}

const descSuperior = {
    casal: "Suite Doble",
    triplo: "Suite Triple",
    quad: "Suite Cuádruple",
    sex: "Suite Séxtuple",
    subtitle: "",
    description: "Baño Privado, Aire Acondicionado, Balcón con Hamaca y Vista",
}

export const pousadaContent = {
    geral: {
        pousada: {
            slug: "pousada",
            title: "Pousada Toa Toa en Pipa",
            subtitle: "Pousada a 30 metros de la Praia do Amor en Pipa RN",
            description: "Suites completas, piscina, estacionamiento, cocina compartida",
            imagesPaths: imagensPousada.areasComuns,
        },
        piscina: {
            slug: "piscina",
            title: "",
            subtitle: "",
            description: "",
            imagesPaths: "",
        },
        cozinha: {
            slug: "cocina",
            title: "",
            subtitle: "",
            description: "",
            imagesPaths: "",
        },
        estacionamento: {
            slug: "estacionamiento",
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
