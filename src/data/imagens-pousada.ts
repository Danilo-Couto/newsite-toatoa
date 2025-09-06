
const areasComunsArr: string[] = [];

for (let index = 1; index <= 11 ; index++) {   
    areasComunsArr.push(`/pousada/areas-comuns/toatoa${index}.jpg`);
}

const imagensPousada: { [key: string]: string[] } = {
    areasComuns: areasComunsArr
};

const generateImagePaths = (folder: string): string[] => {
    const filePaths: string[] = [];
    for (let index = 1; index <= 5; index++) {
        filePaths.push(`/pousada/${folder}/${folder}${index}.jpg`);
    }    
    return filePaths;
};

const folders = ['azul', 'chale', 'laranja', 'rosa', 'verde'];

folders.forEach(f => {
    imagensPousada[`qrto${f}`] = generateImagePaths(f);
})

export default imagensPousada;
