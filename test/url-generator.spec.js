describe('Url Generator', function() {
	
	beforeEach(module('urlGenerator'));
	
	var urlGenerator;
	
	beforeEach(inject(function(UrlGenerator) {
		urlGenerator = UrlGenerator;
	}));
	
	describe('when generating a URL', function(){
		var model;
		var generatedUrl;
		var expectedResults;
		
		beforeEach(function() {
			model = { 
				baseUrl: "http://example.com",
				arguments: [
				    { 
				    	name: 'argument1', 
				    	value: 10 
				    }, 
				    { 
				    	name: 'datetimeArgument', 
				    	value: '01/03/2017 12:12',
				    	type: 'datetime',
				    	datetimeFormat: 'YYYY-MM-DDHH:mm:ss:SSS'
				    }
				]
			};
			
			generatedUrl = urlGenerator.generate(model);
			expectedResults = model.baseUrl + '?argument1=10&datetimeArgument=2017-01-0312:12:00:000';
			
		});
		
		it('should return a url string', function() {
			expect(typeof generatedUrl).toBe('string');
		});
		
		it('should return a url string with the expected parameters', function() {
			expect(expectedResults == generatedUrl).toBe(true);
		});
	});
});