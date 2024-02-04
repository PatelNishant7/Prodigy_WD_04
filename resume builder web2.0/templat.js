// ---------------SKILL ADD BUTTON-----------
function addnewSKILLField() {

    let newNode = document.createElement('textarea');
    newNode.setAttribute('placeholder', 'Enter Here');
    // newNode.setAttribute("col",10);
    newNode.classList.add('mt-3');
    // newNode.classList.add('about-section');
    newNode.classList.add('skillField');

    let SKILLOB = document.getElementById("SKILL");
    let skillAddbuttonOB = document.getElementById("skillAddbutton");
    SKILLOB.insertBefore(newNode, skillAddbuttonOB);

}
// ---------------LANGUAGE ADD BUTTON-----------
function addnewLNGField() {

    let newNode = document.createElement('textarea');
    newNode.setAttribute('placeholder', 'Enter Here');
    // newNode.setAttribute("col",10);
    newNode.classList.add('mt-3');
    // newNode.classList.add('about-section');
    newNode.classList.add('lngField');

    let LNGOB = document.getElementById("LNG");
    let lngAddbuttonOB = document.getElementById("lngAddbutton");
    LNGOB.insertBefore(newNode, lngAddbuttonOB);

}
// ---------------HOBBY ADD BUTTON-----------
function addnewhobbyField() {

    let newNode = document.createElement('textarea');
    newNode.setAttribute('placeholder', 'Enter Here');
    // newNode.setAttribute("col",10);
    newNode.classList.add('mt-3');
    // newNode.classList.add('about-section');
    newNode.classList.add('hobbyField');

    let HOBBYOB = document.getElementById("HOBBY");
    let hobbyAddbuttonOB = document.getElementById("hobbyAddbutton");
    HOBBYOB.insertBefore(newNode, hobbyAddbuttonOB);

}
// ---------------EDUCATION ADD BUTTON-----------
function addnewEDUField() {

    let newNode = document.createElement('textarea');
    newNode.setAttribute('placeholder', 'Enter Here');
    // newNode.setAttribute("col",10);
    newNode.classList.add('mt-3');
    // newNode.classList.add('about-section');
    newNode.classList.add('eduField');

    let EDUOB = document.getElementById("EDU");
    let EDUAddbuttonOB = document.getElementById("EDUAddbutton");
    EDUOB.insertBefore(newNode, EDUAddbuttonOB);

}
// ---------EXPERIENCE ADD BUTTON---------
function addnewEXPField() {

    let newNode = document.createElement('textarea');
    newNode.setAttribute('placeholder', 'Enter Here');
    // newNode.setAttribute("col",10);
    newNode.classList.add('mt-3');
    // newNode.classList.add('about-section');
    newNode.classList.add('expField');

    let EXPOB = document.getElementById("EXP");
    let EXPAddbuttonOB = document.getElementById("EXPAddbutton");
    EXPOB.insertBefore(newNode, EXPAddbuttonOB);

}
// ---------PROJECT ADD BUTTON---------
function addnewPRJField() {

    let newNode = document.createElement('textarea');
    newNode.setAttribute('placeholder', 'Enter Here');
    // newNode.setAttribute("col",10);
    newNode.classList.add('mt-3');
    // newNode.classList.add('about-section');
    newNode.classList.add('prjField');

    let PRJOB = document.getElementById("PRJ");
    let prjAddbuttonOB = document.getElementById("prjAddbutton");
    PRJOB.insertBefore(newNode, prjAddbuttonOB);
}



function GenerateCV() {

    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    let phoneField = document.getElementById("phoneField").value;
    let phoneT = document.getElementById("phoneT");
    phoneT.innerHTML = phoneField;

    let emailField = document.getElementById("emailField").value;
    let emailT = document.getElementById("emailT");
    emailT.innerHTML = emailField;

    let cobj = document.getElementById("cobj").value;
    let cobjT = document.getElementById("cobjT");
    cobjT.innerHTML = cobj;


    // -------Skill------

    let skills = document.getElementsByClassName("skillField");
    let str01 = ''

    for (let e of skills) {
        str01 = str01 + `<li> ${e.value} </li>`;
    }
    document.getElementById("SkillT").innerHTML = str01;

    // -------Language------

    let lngs = document.getElementsByClassName("lngField");
    let str02 = ''

    for (let e of lngs) {
        str02 = str02 + `<li> ${e.value} </li>`;
    }
    document.getElementById("LanguageT").innerHTML = str02;

    // -------Hobby------

    let hobbys = document.getElementsByClassName("hobbyField");
    let str03 = ''

    for (let e of hobbys) {
        str03 = str03 + `<li> ${e.value} </li>`;
    }
    document.getElementById("HobbyT").innerHTML = str03;
    // -------education------

    let edus = document.getElementsByClassName("eduField");
    let str = ''

    for (let e of edus) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("eduT").innerHTML = str;


    // -------Experience------

    let exps = document.getElementsByClassName("expField");
    let str1 = ''

    for (let e of exps) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("ExpT").innerHTML = str1;

    // -------Project------

    let prjs = document.getElementsByClassName("prjField");
    let str2 = ''

    for (let e of prjs) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("PrjT").innerHTML = str2;

    // document.getElementById("CV-form").style.display="none";
    // document.getElementById("CV-template").style.display="block";
let file = document.getElementById('imageField').files[0];
console.log(file);
let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
// document.getElementById('imgT').src = reader.result;
reader.onloadend = function() {
    document.getElementById('imgT').src = reader.result;
}

    document.getElementById('cvform').style.display = 'none';
    document.getElementById('cvtemplate').style.display = 'block';
}

function printcv() {
    window.print();
}