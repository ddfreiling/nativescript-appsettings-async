var AppsettingsAsync = require("nativescript-appsettings-async").AppsettingsAsync;
var appsettingsAsync = new AppsettingsAsync();

describe("greet function", function() {
    it("exists", function() {
        expect(appsettingsAsync.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(appsettingsAsync.greet()).toEqual("Hello, NS");
    });
});