var modal1 = document.getElementById("myModal1");
var link = document.getElementById("openModal1");
var span = document.getElementsByClassName("close")[0];
var modalwindow = document.getElementsByClassName("modal")[0];

var modal2 = document.getElementById("myModal2");
var link2 = document.getElementById("openModal2");

var openModalauth = document.getElementById("openModalauth");
var openModalreg = document.getElementById("openModalreg");


link.onclick = function (event) {
    closeModal();
    event.preventDefault()
    modalwindow.style.display = "block";
    modal1.style.display = "block";
    modal1.style.opacity = "1";
}

link2.onclick = function (event) {
    closeModal();
    event.preventDefault()
    modalwindow.style.display = "block";
    modal2.style.display = "block";
    modal2.style.opacity = "1";
}

span.onclick = function () {
    modal1.style.display = "none";
    modal1.style.opacity = "0";

    modal2.style.display = "none";   
    modal2.style.opacity = "0";

    modalwindow.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalwindow) {
        modal1.style.display = "none";
        modal1.style.opacity = "0";

        modal2.style.display = "none";
        modal2.style.opacity = "0";

        modalwindow.style.display = "none";
    }
}

function closeModal() {
    modal1.style.display = "none";
    modal1.style.opacity = "0";

    modal2.style.display = "none";
    modal2.style.opacity = "0";

    modalwindow.style.display = "none";
}

function previewImage(event) {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const img = document.getElementById('imagePreview');
        img.src = e.target.result;
        img.style.display = 'block';
    }
    reader.readAsDataURL(image);
}
function showDiv(divToShow, divToHide, divToHide2) {
    document.getElementById(divToHide).style.display = 'none';
    document.getElementById(divToHide2).style.display = 'none';
   
    if (document.getElementById(divToShow).style.display == 'block')
        document.getElementById(divToShow).style.display = 'none';
    else
        document.getElementById(divToShow).style.display = 'block';
        
}

function authformActive() {
    var authform = document.getElementsByClassName("col-right")[0];
    if (authform.style.display == 'block')
        authform.style.display = 'none';
    else
        authform.style.display = 'block';
}

//document.querySelector('.menu-button').addEventListener('click', function () {
//    document.getElementById('col-3').style.display = 'none';
//    if (document.getElementById('col-1').style.display != 'flex')
//        document.getElementById('col-1').style.display = 'flex';
//    else
//        document.getElementById('col-1').style.display = 'none';
//});

//document.querySelector('.menu-button-right').addEventListener('click', function () {
//    document.getElementById('col-1').style.display = 'none';
//    if (document.getElementById('col-3').style.display != 'flex')
//        document.getElementById('col-3').style.display = 'flex';
//    else
//        document.getElementById('col-3').style.display = 'none';
//});

//document.getElementById('avatar-file').addEventListener('change', function () {
//    var fileName = this.files[0].name;
//    document.getElementById('file-name').textContent = fileName;
//});



