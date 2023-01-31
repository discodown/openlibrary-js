const { BookIdentifiers, BooksAPI , WorksAPI, EditionsAPI, IsbnAPI} = require('../src/books')

test('tests BooksAPI ISBN query', async () => {
    const books = new BooksAPI('json', 'data')

    const batch = ["2757827944", "0746062354"]
    
    const testData = require("./testdata/booksisbndata.json");
    const data = await books.getBooksByISBN(batch);
    expect(data).toStrictEqual(testData);
});

test('tests BooksAPI OCLC query', async () => {
    const books = new BooksAPI('json', 'data')

    const batch = ["27082333", "12488200"]
    
    const testData = require("./testdata/booksoclcdata.json");
    const data = await books.getBooksByOCLC(batch);
    expect(data).toStrictEqual(testData);
});

test('tests BooksAPI LCCN query', async () => {
    const books = new BooksAPI('json', 'data')

    const batch = ["89000956", "2014487074"]
    
    const testData = require("./testdata/bookslccndata.json");
    const data = await books.getBooksByLCCN(batch);
    expect(data).toStrictEqual(testData);
});

test('tests BooksAPI OLID query', async () => {
    const books = new BooksAPI('json', 'data');

    const batch = ["OL20443644M"];
    
    const testData = require("./testdata/booksoliddata.json");
    const data = await books.getBooksByOLID(batch);
    expect(data).toStrictEqual(testData);
});

test('test getBooks function with json data', async () => {
    const books = new BooksAPI('json', 'data')
    const batch = new BookIdentifiers(["2757827944", "0746062354"],["27082333", "12488200"], ["89000956", "2014487074"], ["OL20443644M"])

    const testData = require("./testdata/getJson.json");
    const data = await books.getBooks(batch);
    expect(data).toStrictEqual(testData);
});

test('test getting work by ID with WorksAPI', async () => {
    const works = new WorksAPI();
    const workID = "OL45804W";

    const testData = require("./testdata/workdata.json");
    const data = await works.getWork(workID);
    expect(data).toStrictEqual(testData);
});

test('test getting editions with WorksAPI', async () => {
    const works = new WorksAPI();
    const workID = "OL18020194W";

    const testData = require("./testdata/workeditionsdata.json");
    const data = await works.getEditions(workID);
    expect(data).toStrictEqual(testData);
});

test('test getting ratings with WorksAPI', async () => {
    const works = new WorksAPI();
    const workID = "OL18020194W";

    const testData = require("./testdata/workratingsdata.json");
    const data = await works.getRatings(workID);
    expect(data).toStrictEqual(testData);
});

test('test getting bookshelves with WorksAPI', async () => {
    const works = new WorksAPI();
    const workID = "OL18020194W";

    const testData = require("./testdata/workbookshelvesdata.json");
    const data = await works.getBookshelves(workID);
    expect(data).toStrictEqual(testData);
});

test('test getting edition with EditionsAPI', async () => {
    const editions = new EditionsAPI();
    const editionID = "OL7353617M";

    const testData = require("./testdata/editionsdata.json");
    const data = await editions.getEdition(editionID);
    expect(data).toStrictEqual(testData);
});

test('test getting edition with IsbnAPI', async () => {
    const isbn = new IsbnAPI();
    const editionID = "9780140328721";

    const testData = require("./testdata/isbndata.json");
    const data = await isbn.getEdition(editionID);
    expect(data).toStrictEqual(testData);
});