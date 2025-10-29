
const areasComunsArr: string[] = [];

for (let index = 1; index <= 9 ; index++) {   
    areasComunsArr.push(`/pousada/areas-comuns/toatoa${index}.webp`);
}

const imagensPousada: { [key: string]: string[] } = {
    areasComuns: areasComunsArr
};

const generateImagePaths = (folder: string): string[] => {
    const filePaths: string[] = [];
    for (let index = 1; index <= 5; index++) {
        filePaths.push(`/pousada/${folder}/${folder}${index}.webp`);
    }    
    return filePaths;
};

const suiteFolders = ['azul', 'chale', 'laranja', 'rosa', 'verde'];

suiteFolders.forEach(f => {
    imagensPousada[`qrto${f}`] = generateImagePaths(f);
})

export default imagensPousada;
