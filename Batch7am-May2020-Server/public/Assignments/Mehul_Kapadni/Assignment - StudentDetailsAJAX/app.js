// var data = {
//     "name":"Mehul Kapadni",
//     "image" : "http://dep-solutions.com/images/avatar.png",
//     "age" : 29,
//     "gender" : "Male",
//     "location" : "Pune",
//     "mobile" : 9922136231

// };

var data = [];

function getData(data){
    var ULlist = document.createElement("ul");

    
    liImg = document.createElement("li");
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
    console.log("Started");
   $.ajax({
		url: 'http://localhost:8081/Naresh_It/July-2020/06-07-2020/sdata.json',
		method: 'GET',
		dataType: 'JSON',
		async: false,
		success: function(response) {
			data = response.sData;
			displayData();
		}, 
		error: function(error) {
			console.log("error occured");
		}
	});
    console.log("Ended");
}