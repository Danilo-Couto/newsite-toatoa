import imagensPousada from "../../data/imagens-pousada";

const descTerreo = {
    casal: "Suíte Casal ou até 4 Pessoas",
    triplo: "Suíte para até 3 Pessoas",
    sex: "Suíte para até 6 Pessoas",
    description: "Suíte com banheiro privativo, ar-condicionado e sacada com rede a apenas 30 metros da Praia do Amor e 500 metros do centrinho de Pipa. Nossa pousada é ideal para jovens casais, famílias, grupos de amigos e surfistas."
}

const descSuperior = {
    casal: "Suíte Casal ou até 4 Pessoas",
    triplo: "Suíte para até 3 Pessoas",
    apto: "Apto Completo para até 4 Pessoas",
    description: "Suíte com banheiro privativo, ar-condicionado e sacada com rede a apenas 30 metros da Praia do Amor e 500 metros do centrinho de Pipa. Nossa pousada é ideal para jovens casais, famílias, grupos de amigos e surfistas."
}

export const pousadaContent = {
    geral: {
        pousada: {
            slug: "pousada",
            title: "Pousada Toa Toa em Pipa",
            subtitle: "Pousada a 30 metros da Praia do Amor em Pipa RN",
            description: "Suítes completas, piscina, estacionamento, cozinha compartilhada",
            imagesPaths: imagensPousada.areasComuns,
        },
        piscina: {
            slug: "piscina",
            title: "",
            subtitle: "",
            imagesPaths: "",
        },
        cozinha: {
            slug: "cozinha",
            title: "",
            subtitle: "",
            imagesPaths: "",
        },
        estacionamento: {
            slug: "estacionamento",
            title: "",
            subtitle: "",
            imagesPaths: "",
        },
    },
    qrtsTerreos : {
        azul : {
            slug: "azul",
            title: descTerreo.sex,
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
            title: descSuperior.apto,
            subtitle: descSuperior.description,
            description: descSuperior.description,
            imagesPaths: imagensPousada.qrtorosa,
            cover: imagensPousada.qrtorosa[0]
        },
        verde : { 
            slug: "verde",
            title: descSuperior.casal,
            subtitle: descSuperior.description,
            description: descSuperior.description,
            imagesPaths: imagensPousada.qrtoverde,
            cover: imagensPousada.qrtoverde[0]
        }
    }
}
