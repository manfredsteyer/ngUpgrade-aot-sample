describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('http://localhost:8081/');
    });

    it('should load page and read title', function() {
      var expectedTitle = 'FlightApp';

      expect(browser.getTitle()).toBe(expectedTitle);
    });
   
    it('should load 3 flights', function() {

        var vonFilter = element(by.name("from"));
        var nachFilter = element(by.name("to"));
        var suchen = element(by.css("button"));

        vonFilter.clear();
        nachFilter.clear();
        vonFilter.sendKeys("Hamburg");
        nachFilter.sendKeys("Graz");
        suchen.click();

        var fluege = element.all(by.repeater("f in vm.flights"));

        expect(fluege.count()).toBe(3); 
        
    });
    
    it('should load 3 flights, containing flight #3 starting at HAM', function() {

        var vonFilter = element(by.name("from"));
        var nachFilter = element(by.name("to"));
        var suchen = element(by.css("button"));
        
        vonFilter.clear();
        nachFilter.clear();
        vonFilter.sendKeys("Hamburg");
        nachFilter.sendKeys("Graz");
        suchen.click();
        
        var fluege = element.all(by.repeater("f in vm.flights"));
        
        var count = fluege.count();
        var firstFlug = fluege.first(); // <tr>...</tr>
        var tds = firstFlug.all(by.tagName("td"));
        var firstId = tds.first();
        var firstVon = tds.get(1);
        
        // browser.pause();
        
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'info.png');
        });

        expect(fluege.count()).toBe(3); 
        expect(firstId.getText()).toBe("3");
        expect(firstVon.getText()).toBe("HAM");
        
    });
    
    
    function writeScreenShot(data, filename) {
        
        var fs = require("fs");
        
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    
});