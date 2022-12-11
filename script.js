var tabs = document.getElementsByClassName('tab-info');
var tabcontents = document.getElementsByClassName('tab-content');
function opentab(tabname) {
    for(tab of tabs){
        tab.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("skill");
    }
    //event.currentTarget.classlist.add("active");
    document.getElementById(tabname).classList.add("skill");
}

//function validate()
    var contactForm = document.getElementById('contact-form');
    contactForm.onsubmit = function() {
        //event.preventDefault();
        console.log('success');
        let name = document.getElementById("Name").value;
        let email = document.getElementById("Email").value;
        let feedback = document.getElementById("Feedback").value;
        //regex to perform email validation
        var ereg=/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/g;

        //check the name is not null
        document.getElementById("Name").required = true;
        if (name == "" ) {
        window.alert("Please enter your Name.");
        document.getElementById("Name").focus();   
        return false;
        }

        document.getElementById("Email").required = true;
        //check the email is valid or not null
        if (email == "" || !ereg.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        document.getElementById("Email").focus();
        return false;
        }

        document.getElementById("Feedback").required = true;
        if (feedback=="") {
        document.getElementById("Feedback").focus();
        return false;
        }
        //when all the validation was success then return true

        return true;
    }

    // side menu
    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }