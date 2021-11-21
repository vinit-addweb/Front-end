function validation() {


    //Personal Details
    var appe = document.getElementById("appw").value;
    if (appe == "") {
        document.getElementById('appq').innerHTML = "**Required";
        return false;
    }
    //console.log(appli);
    var name = document.getElementById("name").value;

    if (name == "") {
        document.getElementById('nam').innerHTML = email;
        return false;
    }

    //email
    var email = document.getElementById("text1").value;
    console.log(email);
    var cEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById('email').innerHTML = "**Required";
        return false;
    }

    
   
    else if(!Email.match(cEmail)){
        let ee= document.getElementById("email1");
        ee.innerHTML = "Please Enter a Valid Email Address";
        return false;
    }

    //mobile
    var mobile = document.getElementById("mobile").value;
    
    var cMobile = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (mobile == "") {
        document.getElementById('mobi').innerHTML = "**Required";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('mobi').innerHTML = "** Characters not allowed";
        return false;

    }
    else if(!mobile.match(cMobile)){
        let me = document.getElementById("mobi");
        me.innerHTML = "Incorrect Mobile Number";
        return false;
    }
  


    var Dob = document.getElementById("date").value;
    if(Dob == ""){
        let dob1= document.getElementById("dobi1");
        dob1.innerHTML = "required field";
        return false;
    }

    var Gender = document.getElementById("gender").value;
    if(Gender == ""){
        let gen = document.getElementById("gen");
        gen.innerHTML = "required field";
        return false;
    }

    
    
 
    var Aadhar = document.getElementById("aadhar").value;
    if(Aadhar == ""){
        let addha = document.getElementById("addha");
        addha.innerHTML = "Requried Field";
        return false;
    }
    var father = document.getElementById("father").value;
    if(father == ""){
        let fa = document.getElementById("fa");
        fa.innerHTML = "Empty Field";
        return false;
    }
    var mother = document.getElementById("mother").value;
    
    
    if(mother == ""){
        let ma= document.getElementById("ma");
        ma.innerHTML = "Empty Field";
        return false;
    }
    var Category = document.getElementById("Category").value;
    if(Category == ""){
        let catt = document.getElementById("spancategory");
        catt.innerHTML = "Required Field";
        return false;
    }

    var religion = document.getElementById("religion").value;
    var Nationality = document.getElementById("Nationality").value;

    // Address Details
    var Address = document.getElementById("Address").value;
 
    if(Address == ""){
        let add = document.getElementById("spanaddress");
        add.innerHTML = "Required Field";
        return false;
    }

    var State = document.getElementById("state").value;
    if(State == ""){
        let sapnde = document.getElementById("sapnde");
        sapnde.innerHTML = "Empty Field";
        return false;
    }

    var City = document.getElementById("city").value;
    if(City == ""){
        let sapnde = document.getElementById("sapnde");
        sapnde.innerHTML = "Empty Field";
        return false;
    }
    var Pincode = document.getElementById("pincode").value;
    if(Pincode == ""){
        let sapnde = document.getElementById("spanpincode");
        sapnde.innerHTML = "Empty Field";
        return false;
    }
    //Course Details
    var Discipline = document.getElementById("Discipline").value;
    var Specialization = document.getElementById("Specialization").value;

    // Ecducation Details.........
    var xStatus = document.getElementById("xStatus").value;
    var xBoard = document.getElementById("xBoard").value;
    var xyear = document.getElementById("xyear").value;
    var xpercentage = document.getElementById("xpercentage").value;
    var xsubject = document.getElementById("xsubject").value;

    var xiistatus = document.getElementById("xiistatus").value;
    var xiiborad = document.getElementById("xiiborad").value;
    var xiipercentage = document.getElementById("xiipercentage").value;
    var xiiyear = document.getElementById("xiiyear").value;
    var xiisub = document.getElementById("xiisub").value;

    var ugstatus = document.getElementById("ugstatus").value;
    var ugborad = document.getElementById("ugborad").value;
    var ugpercentage = document.getElementById("ugpercentage").value;
    var ugyear = document.getElementById("ugyear").value;
    var ugsub = document.getElementById("ugsub").value;








}