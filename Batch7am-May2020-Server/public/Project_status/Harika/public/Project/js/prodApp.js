var details = [];

function ShowProductDetails(ProductDetails) {
	
	$(".container").loadTemplate( $("#ProdInfoTmplt"), ProductDetails, {append:true});
}

function getProductDetails(){
	$(".loadingBlock").show();
	$.ajax({
		url: "http://localhost:8082/get/all/product/details",
		method: "GET",
		dataType: "JSON",
		//corssDomain: true,
		jsonpCallback: 'parseProdData',
		success: function(res){
			$(".loadingBlock").hide();
			LoadProductdetails(res.ProductDetails);
		},
		error: function(err){
			$(".loadingBlock").hide();
			$(".errBlock").show();
		}
	})
}

function LoadProductdetails(details) {
	for (var i = 0; i < details.length; i++){
		ShowProductDetails(details[i]);
	}
}

$(document).ready(function (){
	$("#btn").on('click', () => {
		getProductDetails();
	});
})
