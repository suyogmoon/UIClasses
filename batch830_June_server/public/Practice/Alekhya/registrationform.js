function userRegistraon() {
     var userregistratondetails = {};
    
     userregistratondetails.readData = function(){

         userregistratondetails.name= document.querySelector("#username").value;

         if(!userregistratondetails.name){
             document.querySelector(".user_name").style.display = 'block';
         }
         else{
            document.querySelector(".user_name").style.display = 'none';
         }

         userregistratondetails.password=document.querySelector("#password").value;

         if(!userregistratondetails.name){
            document.querySelector(".pwd").style.display = 'block';
        }
        else{
           document.querySelector(".pwd").style.display = 'none';
        }

         userregistratondetails.confirmpassword=document.querySelector("#cnfpassword").value;

         if(!userregistratondetails.name){
            document.querySelector(".cnf_pwd").style.display = 'block';
        }
        else{
           document.querySelector(".cnf_pwd").style.display = 'none';
        }

         userregistratondetails.phoneno=document.querySelector("#phoneno").value;

         if(!userregistratondetails.name){
            document.querySelector(".phone_no").style.display = 'block';
        }
        else{
           document.querySelector(".phone_no").style.display = 'none';
        }

         userregistratondetails.emailid=document.querySelector("#emailid").value;

         if(!userregistratondetails.name){
            document.querySelector(".email_id").style.display = 'block';
        }
        else{
           document.querySelector(".email_id").style.display = 'none';
        }
     }

     userregistratondetails.readData();
     console.log(userregistratondetails);
}

function validateUserName(event){
    var ischarCode = false;

    if((event.charCode >= 32 && event.charCode <=47) || (event.charCode >=58 && event.charCode <=64) ||(event.charCode >=91 && event.charCode <=96)){
        ischarCode = true;
    }
    else{
        ischarCode = false
    }

    if(ischarCode){
        return false
    }
    else{
        return true;
    }
}

function validatePassword(event){

     console.log("hi");
    var ischarCode = true;
    

    if((event.length = 8) && (event.charCode >= 32 && event.charCode <=47) || (event.charCode >=58 && event.charCode <=64) ||(event.charCode >=91 && event.charCode <=96) && (event.charCode >= 65 && event.charCode <= 95) ){
        ischarCode = true;
        
    }
    else{
        ischarCode = false;
    }

    if(ischarCode){
         return true;
    }
    else{
        return false;
    }

    

}