import fetch from "node-fetch";

class BooksAPI {
    constructor() {
        this.BASE_API_URL = "https://openlibrary.org/api/books?bibkeys="
    }

    async get({ identifiers = {}, format = 'javascript', callback = null, jscmd = 'viewapi'}) {
        let req_url = this.BASE_API_URL;

        if (isbn != null) {
            req_url = req_url.concat($`ISBN:{isbn}`);
        }
        if (oclc != null) {
            req_url =  req_url.concat($`OCLC:{oclc}`)
        }
        if (lccn != null) {
            req_url = req_url.concat($`LCCN:{lccn}`)
        }
        if (olid != null) {
            req_url =  req_url.concat($`OLID:{olid}`)
        }

        req_url = req_url.concat()
    }
}