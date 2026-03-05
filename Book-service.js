//import { environment } from "./environment/environment.js"; // importo la costante environment da environment.js
import { environment } from "./environment/environment.dev.js"; // importo la costante environment da environment.dev.js per utilizzare l'url di sviluppo durante lo sviluppo e l'url di produzione durante la produzione

export class BookService{  // BookService è una classe che contiene i metodi per interagire con l'API dei libri

    //static url = "https://gutendex.com/books/";  

    constructor(){}

    getBooks(){
        //const url = "https://gutendex.com/books/";

        //return fetch(url)
        //return fetch(BookService.url) // utilizzo la proprietà statica
        return fetch(environment.apiUrl) // utilizzo la costante importata da environment.js
        .then(resp => resp.json())
        .then(result => result);
    }

    getBookById(id){  //metodo per prendere il dettaglio di un singolo libro
       // return fetch(BookService.url + id) // id è il parametro che passo alla funzione ed è l'id del libro
        return fetch(environment.apiUrl + id) // id è il parametro che passo alla funzione ed è l'id del libro
        .then(resp => resp.json()) //converto la risposta in json
        .then(result => result);  //ritorno il risultato 
    }

    searchBooks(query){  //*   
        //const searchUrl = BookService.url + '?search=' + encodeURIComponent(query); //creo l'url di ricerca
        const searchUrl = environment.apiUrl + '?search=' + encodeURIComponent(query); //creo l'url di ricerca
        return fetch(searchUrl)
        .then(resp => resp.json())
        .then(result => result);
    }
}