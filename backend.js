function validate() {
    var fname=document.form_1.firstname.value;
    var lname=document.form_1.lastname.value;
    var age_1=document.form_1.age.value;
    var pn_no=document.form_1.phoneno.value;
    var email_valid=document.form_1.email.value;
    var web_url = document.form_1.website.value;
    var pwd = document.form_1.password.value;
    var conpwd = document.form_1.conpassword.value;
    var b_date = document.form_1.date.value;

    var form_data = new FormData(document.querySelector("form_1"));

    var range = document.getElementById("range").value;
    document.getElementById("rangevalue").value=range;

    var color = document.getElementById("color").value;
    document.getElementById("colorcode").value=color;

    var img_input = document.getElementById("myphoto");
    var imgpath = img_input.value;
    var allowedexet = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    var status=false; 
    var phonecode = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    var emailcode =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var urlcode = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    var pwdcode = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var datecode = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;

    if(fname.length<1) {
        document.getElementById("first_name").innerHTML="* Please enter First Name";
        status=false;
    }

    if(lname.length<1) {
        document.getElementById("last_name").innerHTML="* Please enter Last Name";
        status=false;
    }

    if(!(isNaN(age_1))) {
        document.getElementById("ageno").innerHTML="* please enter valid age";
        status=false;
    } 

    if(!(pn_no.match(phonecode))) {
        document.getElementById("phone_no").innerHTML="* please enter a valid phone number";
        status=false;
    }

    if(!(email_valid.match(emailcode))) {
        document.getElementById("emailenter").innerHTML="* please enter a valid email";
        status=false;
    }

    if(!(web_url.match(urlcode))) {
        document.getElementById("weburl").innerHTML="* please enter a valid website";
        status=false;
    }

    if(!(pwd.match(pwdcode)) && !(conpwd.match(pwdcode))) {
        document.getElementById("passwd").innerHTML="* please enter a valid password";
        document.getElementById("conpasswd").innerHTML="* please enter a valid password";
        status=false;
    } else if(pwd == conpwd) {
        document.getElementById("pwdmatch").innerHTML="* PASSWORDS ARE NOT MATCHING";
        status=false;
    } else {
        document.getElementById("pwdmatch").innerHTML=" ";
        status=false;
    }

    if(!(b_date.match(datecode))) {
        document.getElementById("birthdate").innerHTML="* Invalid date";
        status=false;
    }

    if(!form_data.has("cslang")) {
        document.getElementById("chkbox_valid").innerHTML="* Please select an option";
    }

    if(range==0) {
        document.getElementById("rangealert").innerHTML="* select range greater than 0";
        status=false;
    }

    if(color=="#000000") {
        document.getElementById("coloralert").innerHTML="* select a light color";
        status=false;
    }

    if(!(imgpath.match(allowedexet))) {
        document.getElementById("img_valid").innerHTML="* invalid file type";
        status=false;
    }
    alert("Form submitted successful..!");
    status=true;
}