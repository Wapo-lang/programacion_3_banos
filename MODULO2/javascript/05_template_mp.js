const nombreDifunto = "Ana";
const apellidoDifunto = "García";
const edadAlMorir = 28;


console.log(`🔮 Extrayendo registro del ánima: ${nombreDifunto}`);





console.log(`Lápida Oficial: ${nombreDifunto.toUpperCase()} ${apellidoDifunto.toUpperCase()}`);


console.log(`Aniversario luctuoso: El próximo año cumplirá ${edadAlMorir + 1} años de descanso.`);


console.log(`¿Requiere fosa familiar? ${edadAlMorir >= 18 ? "Sí, sector adultos" : "No, sector infantes"}`);



const actaDefuncion = `
=========================================
      ACTA DE RECLUSIÓN PERPETUA        
=========================================
  Nombre Completo : ${nombreDifunto} ${apellidoDifunto}
  Edad Terrenal   : ${edadAlMorir} años
  Estado de Acceso: ${edadAlMorir >= 18 ? "PERMITIDO AL MAUSOLEO" : "DENEGADO"}
=========================================
`;

console.log(actaDefuncion);