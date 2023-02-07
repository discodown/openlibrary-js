const { LibraryID, Request, ReadAPI } = require("../src/read");

test('tests Request.toString', () => {
    const r = new Request([new LibraryID("0596156715", "isbn"), new LibraryID("9780596156718", "isbn")]);
    expect(r.toString()).toBe("isbn:0596156715;isbn:9780596156718");
});

test('tests LibraryID.toString', () => {
    const id = new LibraryID("0596156715", "isbn");
    expect(id.toString()).toBe("isbn:0596156715");
});

test('tests ReadAPI.getSingleRequest', async () => {
    const read = new ReadAPI();

    const testData = require("./testdata/readsinglerequest.json");
    const data = await read.getSingleRequest("0596156715", "isbn");
    expect(data).toStrictEqual(testData);
});

test('tests ReadAPI.getMultiRequest', async () => {
    const read = new ReadAPI();
    const reqs = [new Request([new LibraryID("1", "id"), new LibraryID("50006784", "lccn")]), new Request([new LibraryID("OL6179000M", "olid"), new LibraryID("55011330", "lccn")])];
    const testData = require("./testdata/readmultirequest.json");
    const data = await read.getMultiRequest(reqs);
    expect(data).toStrictEqual(testData);
});