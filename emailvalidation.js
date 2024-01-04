function emailvalidation(){
    let fname=document.formName.fName.value;
    let email=document.formName.email.value;
    let mNumber=document.formName.mNumber.value;
    let Experience=document.formName.Experience.value;
    let gender=document.formName.gender.value;
    // let hobb=document.formName.hobb.value;
    let Country=document.formName.Country;
    let State=document.formName.State.value;
    let Distict=document.formName.Distict.value;
    let pincode=document.formName.pincode.value;
    let resume=document.formName.resume.value;
    let hobb=[];
    let checkboxes=document.getElementsByName("hobb[]");
   // document.write("All Values=>",+checkboxes[1]);
   console.log("gender=>",gender);

    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            hobb.push(checkboxes[i].value);
        }

    }
    
    //document.write("All Values=> "+name+""+email+""+number+""+Experience+""+Gender+""+hobb+""+Country+""+State+""+Distict+""+pincode+""+resume);

    if(fname==""){
        alert("Please Enter name ");
        return false;
    }else if(email==""){
        alert("Enter your valid email");
        return false;
    }else if(mNumber==""){
        alert("Please enter phone number");
        return false;
    }else if(Experience==""){
        alert("Enter experience level");
        return false;
    }
    else if(gender==""){
        alert("Enter your gender");
        return false;
    }else if(hobb==""){
        alert("Enter your hobbies");
        return false;
    }else if(Country==""){
        alert("Enter your country");
        return false;
    }
    else if(State==""){
        alert("Enter your state");
        return false;
    }
    else if(Distict==""){
        alert("Enter your distict");
        return false;
    }
    else if(pincode==""){
        alert("Enter your pincode");
        return false;
    }

}emailvalidation();