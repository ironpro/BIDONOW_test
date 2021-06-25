// Global 


document.getElementById("svg_password_show_text").style.display = "none";
let Password_type = document.getElementById("password_hiden_text").type;



//
var username = false;
var password = false;
var firstname = false;
var lastname = false;

//Enable/Disabl Submit Button
const EnableOrDisable = ()=>{
    console.log(password);
    let Mem_Mobile = document.getElementById('Mem_Mobile').value;
    let Referral_UserName = document.getElementById('Referral_UserName').value;
    let flag  = false;
    for (var k in data["words"]) {
        if(data["words"][k] == Referral_UserName){
            flag = true;
        }
    }

    if(!username || !password|| !firstname||!lastname||flag||Mem_Mobile.length == 0||Referral_UserName.length==0){
  
        document.getElementById('btn-submit').disabled = true;
        document.getElementById('btn-submit').style.background="grey";
    }else{
  
        document.getElementById('btn-submit').disabled = false;
        document.getElementById('btn-submit').style.background="blue";
    }
};
EnableOrDisable();
// end


// validate phone number start 
const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
    EnableOrDisable();

};
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const Mem_Mobile = document.getElementById('Mem_Mobile');
Mem_Mobile.addEventListener('keydown',enforceFormat);
Mem_Mobile.addEventListener('keyup',formatToPhone);
// validate phone number end 


//validate the Mem_F_Name,Mem_L_Name start



const Mem_F_Name  = document.getElementById('Mem_F_Name');
const Mem_L_Name  = document.getElementById('Mem_L_Name');


const firstNameCheck  = (value)=>{
    if (document.getElementById('Mem_F_Name').value.length < 30 && document.getElementById('Mem_F_Name').value.length > 2) {
        firstname = true;
      
   } else {
        firstname = false;
   }
   EnableOrDisable();
};
const lastNameCheck = ()=>{
    if (document.getElementById('Mem_L_Name').value.length < 30 && document.getElementById('Mem_L_Name').value.length > 2) {
        lastname = true;
      
   } else {
        lastname = false;
   }
   EnableOrDisable();
}

Mem_F_Name.addEventListener('input',firstNameCheck);
Mem_L_Name.addEventListener('input',lastNameCheck)
//validate the Mem_F_Name,Mem_L_Name end

//validate user name [Referral_UserName] start

const onCheckuserName = (value)=>{
    let character4 = false;
    let letterallow = false;
    let numberallow = false;
    let character21 = false;
    if (value.length > 3) {
        character4 = true;
        document.getElementById('at_least_4_user_name').style["color"] = "#356AB3";

    } else {
         character4 = false;
        document.getElementById('at_least_4_user_name').style["color"] = "black";
    }
    if (value.length < 21 && value.length > 3) {
         character21 = true;
        document.getElementById('less_than_21_user_name').style["color"] = "#356AB3";
    } else {
         character21 = false;
        document.getElementById('less_than_21_user_name').style["color"] = "black";
    }

    if (new RegExp("^(?=.*[A-Za-z]).+$").test(value)) {
        letterallow = true;
        document.getElementById('Letters_allow_user_name').style["color"] = "#356AB3";
    } else {
        letterallow = false;
        document.getElementById('Letters_allow_user_name').style["color"] = "black";
    }
    //
    if (new RegExp("^(?=.*[0-9]).+$").test(value)) {
        numberallow = true;
        document.getElementById('Number_allow_user_name').style["color"] = "#356AB3";
    } else {
        numberallow = false;
        document.getElementById('Number_allow_user_name').style["color"] = "black";
    }

    if(character4&&letterallow&&numberallow&&character21){
        username = true;
    }else{
        username = false;
    }
    EnableOrDisable();
}

//validate user name [Referral_UserName] end


function onChangeType(changeType) {
    document.getElementById("password_hiden_text").type = changeType;
    if (changeType == "text") {
        document.getElementById("svg_password_show_text").style.display = "flex";
        document.getElementById("svg_password_hiden_text").style.display = "none";
    } else if (changeType == "password") {
        document.getElementById("svg_password_show_text").style.display = "none";
        document.getElementById("svg_password_hiden_text").style.display = "flex";
    } else {
        document.getElementById("svg_password_show_text").style.display = "none";
        document.getElementById("svg_password_hiden_text").style.display = "flex";
    }
}




//validate password start
const onCheckPassword = (value)=>{

    let character8 = false;
    let capital = false;
    let number = false;
    let special = false;
    let character33 = false;
    if (value.length > 0) {
        document.getElementById('svg_password_hiden_text').style["color"] = "#356AB3";
        document.getElementById('svg_password_show_text').style["color"] = "#356AB3";
    } else {
        document.getElementById('svg_password_hiden_text').style["color"] = "black";
        document.getElementById('svg_password_show_text').style["color"] = "black";
    }
    if (value.length > 7) {
        character8 = true;
        document.getElementById('at_least_8_chater_password').style["color"] = "#356AB3";
    } else {
        character8 = false;
        document.getElementById('at_least_8_chater_password').style["color"] = "black";
    }
    if (value.length < 34 && value.length > 7) {
        character33 = true;
        document.getElementById('less_than_33_chater_password').style["color"] = "#356AB3";
    } else {
        character33 = false;
        document.getElementById('less_than_33_chater_password').style["color"] = "black";
    }


    if (new RegExp("^(?=.*[A-Z]).+$").test(value)) {
        capital = true;
        document.getElementById('at_least_letter_chater_password').style["color"] = "#356AB3";
    } else {
        capital = false;
        document.getElementById('at_least_letter_chater_password').style["color"] = "black";
    }

    if (new RegExp("^(?=.*[0-9]).+$").test(value)) {
        number = true;
        document.getElementById('at_least_number_chater_password').style["color"] = "#356AB3";

    } else {
        number = false;
        document.getElementById('at_least_number_chater_password').style["color"] = "black";
    }
    if (new RegExp('^(?=.*[!@#$%^&*"\\[\\]\\{\\}<>/\\(\\)=\\\\\\-_´+`~\\:;,\\.€\\|])').test(value)) {
         special = true;
         document.getElementById('at_least_special_letter_chater_password').style["color"] = "#356AB3";

         if(new RegExp("^(?=.*[\\(\\)$<>&^!/\\[\\]*\\\\])").test(value)){
            special = false;
            document.getElementById('at_least_special_letter_chater_password').style["color"] = "black";
         }
    } else {
        special = false;
        document.getElementById('at_least_special_letter_chater_password').style["color"] = "black";
    }


    if(character8&&capital&&number&&special&&character33){
    
        password = true;
    }else{
        password = false;
    }
    EnableOrDisable();
}

//validate password end

const onSubmit  = ()=>{

    let Mem_Mobile = document.getElementById('Mem_Mobile').value;
    let Mem_F_Name = document.getElementById('Mem_F_Name').value;
    let Mem_L_Name = document.getElementById('Mem_L_Name').value;
    let Referral_UserName = document.getElementById('Referral_UserName').value;
    let flag  = false;
    for (var k in data["words"]) {
        if(data["words"][k] == Referral_UserName){
            flag = true;
        }
    }
    if(flag){
        alert("Don't use Bad Word.");
        return;
    }

    if(Mem_Mobile.length == 0){
        alert("correct input phone number.");
        return;
    }
    if(Mem_F_Name.length == 0){
        alert("correct input First Name.");
        return;
    }
    if(Mem_L_Name.length == 0){
        alert("correct input Last Name.");
        return;
    }
    if(!username){
        alert("correct input UserName.");
        return;
    }
    if(!password){
        alert("correct input Password.");
        return;
    }
    alert("Successfull");

}