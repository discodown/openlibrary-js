const { BookIdentifiers, BooksAPI } = require('../src/books')

test('tests BooksAPI ISBN query URL formation', () => {
    const books = new BooksAPI('json', 'data')

    const batch = ["0451526537", "0451526530"]
    
    expect(books.getBooksByISBN(batch)).toStrictEqual(url);
});

test('tests BooksAPI OCLC query URL formation', () => {
    const books = new BooksAPI('json', 'data')

    const batch = ["379512789", "475892834"]
    
    expect(books.getBooksByOCLC(batch)).toStrictEqual(url);
});

test('tests BooksAPI LCCN query URL formation', () => {
    const books = new BooksAPI('json', 'data')

    const batch = ["379512789", "475892834"]
    
    expect(books.getBooksByLCCN(batch)).toStrictEqual(url);
});

test('tests BooksAPI OLID query URL formation', () => {
    const books = new BooksAPI('json', 'data');

    const batch = ["0L123M"];
    
    expect(books.getBooksByOLID(batch)).toStrictEqual(url);
});

test('test get function with json data', async () => {
    const books = new BooksAPI('json', 'data')
    const batch = new BookIdentifiers(["2757827944", "0746062354"],["27082333", "12488200"], ["89000956", "2014487074"], ["OL20443644M"])

    const testData = require("./testdata/getJson.json");
    const data = await books.getBooks(batch);
    expect(data).toStrictEqual(testData);
})