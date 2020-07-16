function readEmployeeDetails() {
    var employeedetails = {};
 employeedetails.readData = function(){
    employeedetails.name = document.querySelector("#emp_name").value;
    
    if(!employeedetails.name){
        document.querySelector(".empname").style.display = 'block';
    }
    else{
        document.querySelector(".empname").style.display = 'none';
    }

    employeedetails.age = document.querySelector("#emp_age").value;
    
    if(!employeedetails.age){
        document.querySelector(".empage").style.display = 'block';
    }
    else{
        document.querySelector(".empage").style.display = 'none';
    }

    employeedetails.gender = document.querySelector('input[name="gender"]:checked').value;


    employeedetails.department = document.querySelector("#emp_dept").value;

    

    employeedetails.basicsalary = document.querySelector("#emp_basicsalary").value;
    employeedetails.basicsalary = parseInt(employeedetails.basicsalary);

    if(!employeedetails.basicsalary){
        document.querySelector(".salary").style.display = 'block';
    }
    else{
        document.querySelector(".salary").style.display = 'none';
    }
        employeedetails.getPfHraTotal();

 }
    

    console.log(employeedetails);
    

    employeedetails.getPfHraTotal = function (){
     this.pf = (12 * employeedetails.basicsalary) / 100;
     this.hra = (25 * employeedetails.basicsalary) / 100;
     this.total = this.pf + this.hra + this.basicsalary;

     
     employeedetails.getTaxdetails();
    }

employeedetails.getTaxdetails = function () {
    
    if(employeedetails.gender == "male")
    {
        if (this.total >= 50000){
             this.taxpercent = 15;
            
         }
         else if(this.total >= 25000)
         {
             this.taxpercent = 10;
         }
         else{
             this.taxpercent = 0;
         }
    }
    else{

        if(employeedetails.gender == "female")
         {
            if (this.total >= 50000){
                    this.taxpercent = 10;
            
             }
            else if(this.totalsalary >= 25000){ 
                this.taxpercent = 5;
            }
            else{   
                    this.taxpercent = 0;
            }
        }
    }
     this.tax = (this.taxpercent * this.total) / 100;
     console.log(this.tax);
    

     
     
}

employeedetails.displayPayslip = function (){

    
    employeedetails.readData();
    document.querySelector(".displayPaySlip").style.display = 'block';

    var heading = document.createElement("h3");
    heading.innerText = "Employee Pay Slip";
    document.querySelector(".displayPaySlip").append(heading);

    var ulTag = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.innerText = "Employee Name:" + this.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = "Employee age:" + this.age;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = "Employee Gender:" + this.gender;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = "Employee Department:" + this.department;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    li5.innerText = "Employee BasicSalary:" + this.basicsalary;
    ulTag.append(li5);

    var li6 = document.createElement("li");
    li6.innerText = "Employee Pf:" + this.pf;
    ulTag.append(li6);

    var li7 = document.createElement("li");
    li7.innerText = "Employee Hra:" + this.hra;
    ulTag.append(li7);

    var li8 = document.createElement("li");
    li8.innerText = "Employee TotalSalary:" + this.total;
    ulTag.append(li8);

    var li9 = document.createElement("li");
    li9.innerText = "Employee TaxPercentage:" + this.taxpercent;
    ulTag.append(li9);

    var li10 = document.createElement("li");
    li10.innerText = "Employee Tax:" + this.tax;
    ulTag.append(li10);

    document.querySelector(".displayPaySlip").append(ulTag);
}
    employeedetails.displayPayslip();
}

  function validateEmpName(event) {
    console.log(event);
    console.log("user types a key");

    var isvalidchar = false;

    if(event.charCode >= 48 && event.charCode <= 57){
        isvalidchar = false;
    }
    else{
        isvalidchar = true;
    }

    if(isvalidchar)
    {
        return true;
    }
    else{
        return false;
    }
}

function validateAgeSalary(event){
    console.log(event);
    
    var isvalidchar = true;

    if(event.charCode >= 48 && event.charCode <= 57)
    {
        isvalidchar = true;
    }
    else{
        isvalidchar = false;
    }

    if(isvalidchar)
    {
        return true;
    }
    else{
        return false;
    }

}



