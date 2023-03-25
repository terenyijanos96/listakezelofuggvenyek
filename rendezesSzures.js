export function rendez(lista, kulcs, irany = "asc") {
  let szorzo = undefined;
  switch (irany) {
    case "asc":
      szorzo = 1;
      break;
    case "desc":
      szorzo = -1;
      break;
    default:
      szorzo = 0;
      break;
  }
  lista.sort((a, b) => {
    if (a[kulcs] > b[kulcs]) {
      return 1 * szorzo;
    }

    return -1 * szorzo;
  });
}
