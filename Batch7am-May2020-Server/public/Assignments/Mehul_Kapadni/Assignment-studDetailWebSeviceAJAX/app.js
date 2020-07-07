var data = [];

function getData(data){
    var ULlist = document.createElement("ul");

    
    liImg = document.createElement("li");
    liImg.setAttribute("class", "li-img")
    liImage = document.createElement("img");
    liImage.setAttribute("class","studImg");
    liImage.setAttribute("src",data.imagePath);
    liImg.append(liImage);
    ULlist.append(liImg);

    var liName = document.createElement("li");
    liName.innerHTML = "<b>Student Name:</b>"+" "+data.name;
    ULlist.append(liName);

    var liAge = document.createElement("li");
    liAge.innerHTML = "<b>Student Age:</b>"+" "+data.age;
    ULlist.append(liAge);

    var liGender = document.createElement("li");
    liGender.innerHTML = "<b>Student Gender:</b>"+" "+data.gender;
    ULlist.append(liGender);

    var liLocation = document.createElement("li");
    liLocation.innerHTML = "<b>Student Location:</b>"+" "+data.location;
    ULlist.append(liLocation)

    var liMob = document.createElement("li");
    liMob.innerHTML = "<b>Student Mobile:</b>"+" "+data.mobile;
    ULlist.append(liMob);

    document.querySelector(".container1").append(ULlist);

}

function displayData(){
    for (var i = 0 ; i < data.length; i++) {
        getData(data[i]);
    }
    
}

function getStudentData(){
    $(".loading").show();
   $.ajax({
		url: "http://localhost:8081/info/studDetails",
		method: 'GET',
		dataType: 'JSON',
		success: function(response) {
            $(".loading").hide();
			data = response.sData;
			displayData();
		}, 
		error: function(error) {
            $(".loading").hide();
			console.log("error occured");
		}
	});
    console.log("Ended");
}