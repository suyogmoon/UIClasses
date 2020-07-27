function getProductData() {
	var pDetailsURL = 'http://localhost:8081/data/productDetails';
	var productDataReq = $.ajax({
		url: pDetailsURL,
		method: 'GET',
		dataType: 'JSON'
	});
	productDataReq.done(function(res){
		console.log("done");
		loadProductDetailsToPage(res);
	})
	productDataReq.fail(function(err){
		//...
	});
}

function loadProductDetailsToPage(data) {
	console.log("loading")
	var templateSpec = Handlebars.compile($("#pDetailsTmplt").html());
	for (var i = 0 ; i < data.length; i++) {
		console.log(i);
		$('.pageContainer').append(templateSpec(data[i]));
	}
}