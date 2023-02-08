const { SubjectsAPI } = require("../src/subjects");

test('Test SubjectsAPI.getSubjectWorks without publication date range', async () => {
    const subjects = new SubjectsAPI();

    const testData = require("./testdata/subjectslove.json");

    const data = await subjects.getSubjectWorks("love", 0);

    expect(data).toStrictEqual(testData);
});

test('Test getSubjectWorks with publication date range', async () => {
    const subjects = new SubjectsAPI();

    const testData = require("./testdata/subjectsloverange.json");

    const data = await subjects.getSubjectWorks("love", 0, "1500-1600");

    expect(data).toStrictEqual(testData);
})

test('Test getSubjectWorks with details and ebooks', async () => {
    const subjects = new SubjectsAPI(true, true, 50);

    const testData = require("./testdata/subjectslovedetailebooks.json");

    const data = await subjects.getSubjectWorks("love", 0);

    expect(data).toStrictEqual(testData);
});

test('Test getSubjectWorks with details, ebooks, and publication date range', async () => {
    const subjects = new SubjectsAPI(true, true, 50);

    const testData = require("./testdata/subjectslovedetailebooksrange.json");

    const data = await subjects.getSubjectWorks("love", 0, "1500-1600");

    expect(data).toStrictEqual(testData);
});