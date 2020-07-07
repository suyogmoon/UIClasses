var data = [];

function calculateSalaryComponents(empdetails) {
    empdetails.empPF = (12/100)*empdetails.empBasicSalary;
    //console.log(empdetails.empPF);
    empdetails.empHRA = (25/100)*(empdetails.empBasicSalary);
    //console.log(empdetails.empHRA);
    empdetails.empPF =parseInt(empdetails.empPF);
    empdetails.empHRA =parseInt(empdetails.empHRA);
    empdetails.empBasicSalary =parseInt(empdetails.empBasicSalary);
    empdetails.empTotalSalary = empdetails.empPF+empdetails.empHRA+empdetails.empBasicSalary;
    //console.log(empdetails.empTotalSalary);
    empdetails.empPackage = empdetails.empTotalSalary*12;
    //console.log(empdetails.empPackage);
}

function calculateTax(empdetails){
    calculateSalaryComponents(empdetails);
    if(empdetails.empPackage>750000)
    {
        empdetails.empTax = (10/100)*empdetails.empPackage;
        //console.log(empdetails.empTax);
    }else if(empdetails.empPackage>500000 && empdetails.empPackage <750000)
    {
        empdetails.empTax = (5/100)*empdetails.empPackage
    }else if (empdetails.empPackage <31000)
    {
        console.log("No Tax");
    }
}

function getData(empdetails){
    calculateTax(empdetails);
    var ulList = document.createElement("ul");

    liImg = document.createElement("li");
    liImg.setAttribute("class", "li-img")
    liImage = document.createElement("img");
    liImage.setAttribute("class","studImg");
    liImage.setAttribute("src",empdetails.imagePath);
    liImg.append(liImage);
    ulList.append(liImg);

    var liempName = document.createElement("li");
    liempName.innerHTML = "Employee Name:"+" "+empdetails.empName;
    ulList.append(liempName);

    var liempAge = document.createElement("li");
    liempAge.innerHTML = "Employee Age:"+" "+empdetails.empAge;
    ulList.append(liempAge);

    var liempGender = document.createElement("li");
    liempGender.innerHTML = "Employee Gender:"+" "+empdetails.empGender;
    ulList.append(liempGender);

    var liempDepartment = document.createElement("li");
    liempDepartment.innerHTML = "Employee Department:"+" "+empdetails.empDepartment;
    ulList.append(liempDepartment);

    var liempbasicSalary = document.createElement("li");
    liempbasicSalary.innerHTML = "Employee Basic Salary:"+" "+empdetails.empBasicSalary;
    ulList.append(liempbasicSalary);

    var liempPf = document.createElement("li");
    liempPf.innerHTML = "Employee PF:"+" "+empdetails.empPF;
    ulList.append(liempPf);

    var liempHra = document.createElement("li");
    liempHra.innerHTML = "Employee HRA:"+" "+empdetails.empHRA;
    ulList.append(liempHra);

    var liempTotalSalary = document.createElement("li");
    liempTotalSalary.innerHTML = "Employee Monthly Salary:"+" "+empdetails.empTotalSalary;
    ulList.append(liempTotalSalary);

    var liempAnnualSalary = document.createElement("li");
    liempAnnualSalary.innerHTML = "Employee Annual Package:"+" "+empdetails.empPackage;
    ulList.append(liempAnnualSalary);

    var liempTotalTax = document.createElement("li");
    liempTotalTax.innerHTML = "Employee Total Tax:"+" "+empdetails.empTax;
    ulList.append(liempTotalTax);

    document.querySelector(".container1").append(ulList);
}

function displayData(){
    for (var i = 0 ; i < data.length; i++) {
        getData(data[i]);
    }
    
}

function getStudentData(){
    $(".loading").show();
    //document.querySelector(".loading").style.display = "block";
   $.ajax({
		url: "http://localhost:8081/info/empDetailsJsonp",
		method: 'POST',
        dataType: 'JSONP',
        crossDomain: true,
        jsonpCallback: "parseData",
		success: function(response) {
            $(".loading").hide();
			data = response.edata;
			displayData();
		}, 
		error: function(error) {
            console.log("error occured");
            $(".loading").hide();
		}
	});
    console.log("Ended");
}