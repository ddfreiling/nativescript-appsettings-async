var AppsettingsAsync = require("nativescript-appsettings-async").AppsettingsAsync;
var appsettingsAsync = new AppsettingsAsync();

describe("greet function", function() {
    it("exists", function() {
        expect(appsettingsAsyns).toBeDefined();
    });

    it("returns a string", function() {
        expect(appsettingsAsync.has('Test')).toEqual(false);
    });
});