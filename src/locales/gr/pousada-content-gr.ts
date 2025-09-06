import imagensPousada from "../../data/imagens-pousada";

const descTerreo = {
    casal: "Doppelzimmer-Suite",
    triplo: "Dreibettzimmer-Suite",
    quad: "Vierbettzimmer-Suite",
    sex: "Sechsbettzimmer-Suite",
    subtitle: "",
    description: "Eigenes Bad, Klimaanlage, Balkon mit Hängematte und Ausblick",
}

const descSuperior = {
    casal: "Doppelzimmer-Suite",
    triplo: "Dreibettzimmer-Suite",
    quad: "Vierbettzimmer-Suite",
    sex: "Sechsbettzimmer-Suite",
    subtitle: "",
    description: "Eigenes Bad, Klimaanlage, Balkon mit Hängematte und Ausblick",
}

export const pousadaContent = {
    geral: {
        pousada: {
            slug: "pousada",
            title: "Pousada Toa Toa in Pipa",
            subtitle: "Gästehaus 30 Meter vom Praia do Amor in Pipa RN entfernt",
            description: "Komplett ausgestattete Suiten, Pool, Parkplatz, Gemeinschaftsküche",
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
            slug: "küche",
            title: "",
            subtitle: "",
            description: "",
            imagesPaths: "",
        },
        estacionamento: {
            slug: "parkplatz",
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
