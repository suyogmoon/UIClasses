var data = [];

function addProduct(pData) {
	// var divTag = document.createElement("div");
	var divTag = $("<div></div>");
	divTag.addClass("details");
	
	var ulTag = $("<ul></ul>");

	var li1 = $("<li></li>");
	li1.html("<b>Product Name: " + pData.name + "</b>");
	ulTag.append(li1);

	var li2 = $("<li></li>");
	li2.html("Product Price : <span class='oldPrice'>" + pData.oldPrice + "</span>" + pData.price);
	ulTag.append(li2);

	var li3 = $("<li></li>");
	li3.text("Manufacturer :" + pData.manu);
	ulTag.append(li3)

	var li4 = $("<li></li>");
	var imgtag  = $("<img />");
	imgtag.attr("src", pData.imagePath);
	li4.append(imgtag);

	ulTag.append(li4);

	divTag.append(ulTag);

	$(".container").append(divTag);
}

function showProductDetails() {
	for (var i = 0 ; i < data.length; i++) {
		addProduct(data[i]);
	}
}

function getProductDetails() {
	
	//document.querySelector(".loadingBlock").style.display = 'block';
	$(".loadingBlock").show();
	//.. code which is response of creating a aja req get data from instanceof,,and give it to show prodcut details method
	$.ajax({
		url: 'http://localhost:8081/data/product/info/details',
		method: 'POST',
		dataType: 'JSONP',
		corssDomain: true,
		jsonpCallback: 'parseProductData1',
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




