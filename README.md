Lezione di mercoledì 7 gennaio:

- Pacchetto fatto dal Prof. Asioli che abbiamo usato a lezione
 https://www.npmjs.com/package/@labstraction/random-color?activeTab=code

 - package.js mi dice versione che ho installata e versione minima
 
 - Una delle librerie JS più utilizzate: https://getbootstrap.com/
   https://italia.github.io/bootstrap-italia/

 - Altra libreria JS: https://material.angular.dev/

 - Pagination: https://getbootstrap.com/docs/5.3/components/pagination/


----------------------------------------------------------------------------------------------------------------

Lezione di giovedì 8 gennaio:

cartella environment:  
- environment.js: contiene l'url dell'API dei libri, in questo modo se voglio cambiare l'url dell'API basta che cambio il valore della proprietà apiUrl e non devo cercare in tutto il codice

//  Metto l'url dell'API in una costante per poterla modificare facilmente in futuro senza dover cercare in tutto il codice

// export const environment = {
//     apiUrl: "https://gutendex.com/books/"  // definisco una costante per l'url dell'API dei libri
// }

export const environment = {
    apiUrl: "https://gutendex.com/books/prod/"  // definisco una costante per l'url dell'API dei libri in produzione
}


- environment.dev.js: contiene l'url dell'API dei libri in sviluppo, in questo modo posso utilizzare l'url di sviluppo durante lo sviluppo e l'url di produzione durante la produzione

export const environment = {
    apiUrl: "https://gutendex.com/books/"  // definisco una costante per l'url dell'API dei libri in sviluppo
}