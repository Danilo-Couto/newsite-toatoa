import imagensPousada from "../../data/imagens-pousada";

const descTerreo = {
    casal: "Suite Double Suite",
    triplo: "Suite for 3 People",
    quad: "Suite for 4 People",
    sex: "Suite for 6 People",
    subtitle: "",
    description: "Private Bathroom, Air-Conditioning, Balcony with Hammock and View",
}

const descSuperior = {
    casal: "Suite Casal",
    triplo: "Suite 3 People",
    quad: "Suite 4 People",
    sex: "Suite 6 People",
    subtitle: "",
    description: "Private Bathroom, Air-Conditioning, Balcony with Hammock and View",
}

export const pousadaContent = {
    geral: {
        pousada: {
            slug: "pousada",
            title: "Pousada Toa Toa em Pipa",
            subtitle: "Guesthouse 30 meters from the of Praia do Amor in Pipa RN",
            description: "Complete suites, pool, parking, shared kitchen",
            imagesPaths: imagensPousada.areasComuns,
        },
        piscina: {
            slug: "pool",
            title: "",
            subtitle: "",
            description: "",
            imagesPaths: "",
        },
        cozinha: {
            slug: "kitchen",
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
