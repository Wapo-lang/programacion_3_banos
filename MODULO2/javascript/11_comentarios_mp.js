const MAX_ALMAS_POR_FOSA = 5;





function registrarDefuncion(nombreDifunto, sectorCripta) {
    return `📜 Registro Oficial: El ánima de ${nombreDifunto} ha sido asignada al Sector ${sectorCripta}.`;
}


const actaFinal = registrarDefuncion("Ana García", 4);
console.log(actaFinal);