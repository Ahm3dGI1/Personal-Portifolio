/*nav*/
$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= $('#about').offset().top - 50) {
        document.getElementById("about").classList.add('.nav-active');
    }
});

/*Parallex*/

document.addEventListener("mousemove", parallex);

function parallex(e) {

    var speed = 2

    var x = (e.clientX - screen.width / 2) * speed / 100
    var y = (e.clientY - screen.height / 3) * speed / 100

    document.getElementById("pp").style.transform = "translateX(" + -x + "px) translateY(" + -y + "px)";
    document.getElementById("pp-solid").style.transform = "translateX(" + -x / speed + "px) translateY(" + -y / speed + "px)";
}

/*404*/

var $container = document.querySelector('.bola')
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
var camera = new THREE.PerspectiveCamera(80, 1, 0.1, 10000);
var scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(300, 300);
$container.append(renderer.domElement);

///////////////////////////////////////////////

// Camera
camera.position.z = 200;

// Material
var pinkMat = new THREE.MeshPhongMaterial({
    color: new THREE.Color("#C3073F"),
    specular: new THREE.Color("#C3073F"),
    shininess: 50,
    shading: THREE.FlatShading,
    transparent: 1,
    opacity: 1
});

var L1 = new THREE.PointLight(0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

var L2 = new THREE.PointLight(0xffffff, 0.8);
L2.position.z = 200;
L2.position.y = 400;
L2.position.x = -100;
scene.add(L2);

// IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(75, 1), pinkMat);
Ico.rotation.z = 0.5;
scene.add(Ico);

function update() {
    Ico.rotation.x += 2 / 100;
    Ico.rotation.y += 2 / 100;
}

// Render
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    update();
}

render();

/*projects grid*/
var projects = [
    'images/projects/github/doughnut.jpg',
    'images/projects/3d/doughnut.jpg',
    'images/projects/3d/character.jpg',
    'images/projects/3d/pistol.jpg',
    'images/projects/3d/rock.jpg',
    'images/projects/3d/Katana.jpg',
    'images/projects/gspj/gspj.jpg',
    'images/projects/minibook/minibook.jpg',
    'images/projects/github/login-page-cover.jpg'
],

    projectsCheck = [
        true,
        true,
        true,
        false,
        false,
        false,
        false
    ],

    project1 = document.getElementById('project1'),
    project2 = document.getElementById('project2'),
    project3 = document.getElementById('project3');

projectb1 = { num: 0 },
    projectb2 = { num: 1 },
    projectb3 = { num: 2 };

project1.style.backgroundImage = "url( images/projects/3d/doughnut.jpg )";
project2.style.backgroundImage = "url( images/projects/3d/character.jpg )";
project3.style.backgroundImage = "url( images/projects/3d/pistol.jpg )";

function shuffle(project, projectsCheck, projects, button, sec) {
    'use strict';

    var randomproject = 0,
        oldproject = 0;
    setInterval(function () {

        oldproject = randomproject;
        projectsCheck[randomproject] = false;

        while (projectsCheck[randomproject] == true || randomproject == oldproject) {
            randomproject = Math.floor(Math.random() * projects.length);
        }
        projectsCheck[randomproject] = true;
        project.style.backgroundImage = "url(" + projects[randomproject] + ")";
        button.num = randomproject;

    }
        , sec);
}

shuffle(project1, projectsCheck, projects, projectb1, 11000);
shuffle(project2, projectsCheck, projects, projectb2, 9000);
shuffle(project3, projectsCheck, projects, projectb3, 12000);

/*projects popup*/

function popup() {
    var content = document.getElementById('content'),
        nav = document.getElementById('nav'),
        popup = document.getElementById('popup');

    content.classList.toggle('blur');
    nav.classList.toggle('blur');
    popup.classList.toggle('popup-visible');
}


function box1(projectnum) {

    if (projectnum.num == 0) {

        document.getElementById('pt1').innerHTML = "project1";
        document.getElementById('pd1').src = projects[projectnum.num];
        document.getElementById('pdi1').innerHTML = "New Name";
    }

    else if (projectnum.num == 1) {

        document.getElementById('pTitle').innerHTML = "project2";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    else if (projectnum.num == 2) {

        document.getElementById('pTitle').innerHTML = "project3";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    else if (projectnum.num == 3) {

        document.getElementById('pTitle').innerHTML = "project4";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    else if (projectnum.num == 4) {

        document.getElementById('pTitle').innerHTML = "project5";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    else if (projectnum.num == 5) {

        document.getElementById('pTitle').innerHTML = "project6";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    else if (projectnum.num == 6) {

        document.getElementById('pTitle').innerHTML = "project7";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    else if (projectnum.num == 7) {

        document.getElementById('pTitle').innerHTML = "project8";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }
    else if (projectnum.num == 8) {

        document.getElementById('pTitle').innerHTML = "project9";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }
    else if (projectnum.num == 9) {

        document.getElementById('pTitle').innerHTML = "project10";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    else if (projectnum.num == 10) {

        document.getElementById('pTitle').innerHTML = "project11";
        document.getElementById('pImg').src = projects[projectnum.num];
        document.getElementById('pDis').innerHTML = "New Name";
    }

    popup();
}

/*Skills*/
var skillCurrent,
    skillProjects = document.getElementById('skill-projects').getElementsByTagName('div'),
    skillExperience = document.getElementById('skill-experience').getElementsByTagName('div'),
    skillPreview = document.getElementById('skill-preview'),
    skillProgress = document.getElementById('skill-progress');
skillProgress.style.transition = '0.6s';

function skill() {
    $(".skill-active").removeClass("skill-active");
    skillCurrent = event.target;

    skillCurrent.classList.toggle('skill-active');


    skillPreview.src = "images/skills/" + skillCurrent.id + ".png";

    if (skillCurrent.id == "html") {
        skillProjects[0].innerHTML = 'Projects';
        skillProjects[1].innerHTML = '4';
        skillExperience[1].innerHTML = '1';
        skillProgress.style.width = '80%';
    }

    if (skillCurrent.id == "css") {
        skillProjects[0].innerHTML = 'Projects';
        skillProjects[1].innerHTML = '4';
        skillExperience[1].innerHTML = '1';
        skillProgress.style.width = '74%';
    }

    if (skillCurrent.id == "js") {
        skillProjects[0].innerHTML = 'Projects';
        skillProjects[1].innerHTML = '3';
        skillExperience[1].innerHTML = '1';
        skillProgress.style.width = '65%';
    }

    if (skillCurrent.id == "c-plusplus") {
        skillProjects[0].innerHTML = 'Problems Solved';
        skillProjects[1].innerHTML = '160+';
        skillExperience[2].innerHTML = '2';
        skillProgress.style.width = '75%';
    }

    if (skillCurrent.id == "c-sharp") {
        skillProjects[0].innerHTML = 'Projects';
        skillProjects[1].innerHTML = '2';
        skillExperience[1].innerHTML = '2';
        skillProgress.style.width = '60%';
    }

    if (skillCurrent.id == "three-d") {
        skillProjects[0].innerHTML = 'Projects';
        skillProjects[1].innerHTML = '5';
        skillExperience[1].innerHTML = '1';
        skillProgress.style.width = '70%';
    }
}

/*Skills*/


/* Contact */

var message = "";

$(".submit").on("click", function () {

    var email = $('#e-mail').val();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    if (!validateEmail(email)) {
        alert('You have entered and invalid E-mail.');
    }

    else {
        $.ajax({
            url: "https://formspree.io/f/mwkypdzw",
            method: "POST",
            data: {
                Name: $('#name').val(),
                Subject: $('#subject').val(),
                Email: $('#e-mail').val(),
                Message: $('#message').val()
            },
            dataType: "json"
        });
        alert('Thanks for the email, we\'ll be in touch promptly.');
    }

    return false;
});

/* Contact */
