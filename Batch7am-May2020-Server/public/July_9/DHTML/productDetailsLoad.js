var data = [];

function addProduct(pData, i) {
	if (i == 0 || i == 3) {
		$(".container").loadTemplate( $("#templt2"), pData, {append:true});
	} else {
		$(".container").loadTemplate( $("#productDataTmplt"), pData, {append:true});
	}
}

function showProductDetails() {
	for (var i = 0 ; i < data.length; i++) {
		addProduct(data[i], i);
	}
}

function getProductDetails() {
	$(".container").html("");
	//document.querySelector(".container").innerHTML = "";
	//document.querySelector(".loadingBlock").style.display = 'block';
	$(".loadingBlock").show();
	//.. code which is response of creating a aja req get data from instanceof,,and give it to show prodcut details method
	$.ajax({
		url: 'http://localhost:8081/data/product/info/details',
		method: 'GET',
		dataType: 'JSON',
		jsonpCallback: 'parseProductData',
		success: function(response) {
			$(".loadingBlock").hide();
			data = response.pdata;
			showProductDetails();
		}, 
		error: function(error) {
			console.log("error came");
			$(".loadingBlock").hide();
			$(".errorBlock").show();
		}
	});
	console.log("finished ajax call...");
}




