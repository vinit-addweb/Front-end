function validation(){
            

    //Personal Details
    var appe=document.getElementById("appw").value;
    if(appe ==""){
        document.getElementById('appq').innerHTML="**Required";
        return false;
    }
    //console.log(appli);
   var name=document.getElementById("name").value;
   
   if(name=="")
   {
        document.getElementById('nam').innerHTML="**Required";
        return false;
           }

//email
   var email=document.getElementById("mail").value;
   
   if(email==""){
    document.getElementById('email').innerHTML="**Required";
    return false;
}
   var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (mail.test(mail)) {
    
    return true;
}
else {
    // mail.style.border = "red solid 3px";
document.getElementById("email").innerHTML="** Please enter a vaild email id"
    return false;
}
   if(email==""){
    document.getElementById('email').innerHTML="**Required";
    return false;
}

//mobile
   var mobile=document.getElementById("mobile").value;
   if(mobile=="")
   {
    document.getElementById('mobi').innerHTML="**Required";
    return false;
}
if(isNaN(mobile)){
    document.getElementById('mobi').innerHTML="** Characters not allowed";
    return false;

  }
var mob = /^([9]{1})([234789]{1})([0-9]{8})$/;
if (mob.test(mobile)) {
    
    return true;
}
else {
    // mail.style.border = "red solid 3px";
document.getElementById("mobi").innerHTML="** Please enter a vaild Mobile No."
    return false;
}


   var gender = document.getElementById("gender").value;
   if(gender=="")
   {
    document.getElementById('gen').innerHTML="**Required";
    return false;
}

   var date=document.getElementById("date").value;
   var aadhar=document.getElementById("aadhar").value;
   var father=document.getElementById("father").value;
   var mother=document.getElementById("mother").value;
   var Category=document.getElementById("Category").value;
   var religion=document.getElementById("religion").value;
   var Nationality=document.getElementById("Nationality").value;
   
   // Address Details
   var Address=document.getElementById("Address").value;
   var state=document.getElementById("state").value;
   var city=document.getElementById("city").value;
   var pincode=document.getElementById("pincode").value;
 
   //Course Details
   var Discipline=document.getElementById("Discipline").value;
   var Specialization=document.getElementById("Specialization").value;
  
   // Ecducation Details.........
   var xStatus=document.getElementById("xStatus").value;
   var xBoard =document.getElementById("xBoard").value;
   var xyear=document.getElementById("xyear").value;
   var xpercentage=document.getElementById("xpercentage").value;
   var xsubject=document.getElementById("xsubject").value;

   var xiistatus=document.getElementById("xiistatus").value;
   var xiiborad=document.getElementById("xiiborad").value;
   var xiipercentage=document.getElementById("xiipercentage").value;
   var xiiyear=document.getElementById("xiiyear").value;
   var xiisub=document.getElementById("xiisub").value;

   var ugstatus=document.getElementById("ugstatus").value;
   var ugborad=document.getElementById("ugborad").value;
   var ugpercentage=document.getElementById("ugpercentage").value;
   var ugyear=document.getElementById("ugyear").value;
   var ugsub=document.getElementById("ugsub").value;
   
        
       
           

      
       
       
        }