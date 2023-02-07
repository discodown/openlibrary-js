const fetch = require("node-fetch");

const idTypes = ["isbn", "lccn", "oclc", "olid"];

class LibraryID {
    constructor(id, idType) {
        this.id = id;
        this.idType = idType;
    }

    toString() {
        return `${this.idType}:${this.id}`;
    }
}

class Request {
    constructor(ids = []) {
        this.idList = ids;
    }

    toString() {
        let s = "";
        for (const id of this.idList) {
            s = s + id.toString() + ";";
        }

        s = s.substring(0, s.length-1);
        
        return s;
    }

    addLibraryId(id) {
        this.idList.push(id);
    }

    addId(type, id) {
        this.idList.push(new LibraryID(type, id));
    }
}

class ReadAPI {
    constructor(callback = null) {
        this.BASE_API_URL = "http://openlibrary.org/api/volumes/brief/";
        this.callback = callback;
    }

    async getSingleRequest(id, idType) {
        let req_url = this.BASE_API_URL + `${idType}/${id}.json`;

        if (this.callback != null) {
            req_url = req_url.concat(`?callback=${this.callback}`);
        }

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }

    async getMultiRequest(requests) {
        let req = "";

        for (const r of requests) {
            req = req + r.toString() + "|";
        }

        req = req.substring(0, req.length-1);

        let req_url = this.BASE_API_URL + `/json/${req}`;

        if (this.callback != null) {
            req_url = req_url.concat(`?callback=${this.callback}`);
        }

        const res = await fetch(req_url);
        const data = await res.json();

        return data;
    }
}

module.exports = { LibraryID, Request, ReadAPI };