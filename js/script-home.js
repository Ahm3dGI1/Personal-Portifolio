/*nav*/
$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= $('#about').offset().top - 50) {
        document.getElementById("about").classList.add('.nav-active');
    }
});

if (screen.width > 768){

/*Parallex*/

document.addEventListener("mousemove", parallex);

function parallex(e) {

    var speed = 2

    var x = (e.clientX - screen.width / 2) * speed / 100
    var y = (e.clientY - screen.height / 3) * speed / 100

    document.getElementById("pp").style.transform = "translateX(" + -x + "px) translateY(" + -y + "px)";
    document.getElementById("pp-solid").style.transform = "translateX(" + -x / speed + "px) translateY(" + -y / speed + "px)";
}

/*Name*/


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

}
/*projects grid*/
var projects = [
    'images/projects/threed/doughnut.jpg',
    'images/projects/threed/rock.jpg',
    'images/projects/threed/pistol.jpg',
    'images/projects/threed/character.jpg',
    'images/projects/threed/Katana.jpg',
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
    project3 = document.getElementById('project3'),

    ptitle1 = document.getElementById('pt1'),
    ptitle2 = document.getElementById('pt2'),
    ptitle3 = document.getElementById('pt3'),

    pdate1 = document.getElementById('pd1'),
    pdate2 = document.getElementById('pd2'),
    pdate3 = document.getElementById('pd3'),

    pdis1 = document.getElementById('pdi1'),
    pdis2 = document.getElementById('pdi2'),
    pdis3 = document.getElementById('pdi3'),

    projectb1 = document.getElementById('projectb1'),
    projectb2 = document.getElementById('projectb2'),
    projectb3 = document.getElementById('projectb3');

project1.style.backgroundImage = "url( images/projects/threed/rock.jpg )";
project2.style.backgroundImage = "url( images/projects/threed/doughnut.jpg )";
project3.style.backgroundImage = "url( images/projects/threed/pistol.jpg )";

function shuffle(project, projectsCheck, projects, button, title, date, dis, sec) {
    'use strict';

    var randomproject = 0,
        oldproject = 0;
    setInterval(function () {

        oldproject = randomproject;
        projectsCheck[randomproject] = false;

        while (projectsCheck[randomproject] == true || randomproject == oldproject) {
            randomproject = Math.floor(Math.random() * projects.length);
        }

        if (!project.matches(':hover')) {
            projectsCheck[randomproject] = true;
            project.style.backgroundImage = "url(" + projects[randomproject] + ")";
            button.num = randomproject;

            if (randomproject == 0) {
                title.innerHTML = "3D Strawberry Doughnut asset";
                date.innerHTML = "";
                dis.innerHTML = "A 3D design for a doughnut made with blinder including the textures.";
                button.style.display = "block"
                button.href = "https://github.com/Ahm3dGI1/3D-Doughnut-asset"
            }

            else if (randomproject == 1) {
                title.innerHTML = '3D Rock asset';
                date.innerHTML = "";
                dis.innerHTML = "A low-poly 3D rock asset made with blender. It can be used in building a scene, an animation or a video game.";
                button.style.display = "block"
                button.href = "https://github.com/Ahm3dGI1/3D-Rock-asset"
            }

            else if (randomproject == 2) {
                title.innerHTML = "3D Pistol asset";
                date.innerHTML = "";
                dis.innerHTML = "A low-poly 3D pistol asset made with blender. It can be used in building a scene, an animation or a video game.";
                button.style.display = "block"
                button.href = "https://github.com/Ahm3dGI1/3D-Pistol-asset"
            }

            else if (randomproject == 3) {
                title.innerHTML = "3D Character asset";
                date.innerHTML = "";
                dis.innerHTML = "A low-poly 3D Character asset made with blender. It can be used in building a scene, an animation or a video game.";
                button.style.display = "block"
                button.href = "https://github.com/Ahm3dGI1/3D-Character-asset"
            }

            else if (randomproject == 4) {
                title.innerHTML = "3D Katana asset";
                date.innerHTML = "";
                dis.innerHTML = "A low-poly 3D Katana asset made with blender. It can be used in building a scene, an animation or a video game.";
                button.style.display = "block"
                button.href = "https://github.com/Ahm3dGI1/3d-Katana-asset"
            }

            else if (randomproject == 5) {
                title.innerHTML = "Gharbiya STEM Physics Journal";
                date.innerHTML = "";
                dis.innerHTML = "With all enthusiastic, GSPJ aspire to take the ensign of flaming the curiousity between high school students and below toward physics. GSPJ quarrel to make physics accessible for everyone with a simple yet informative review articles about different topics in physics.";
                button.style.display = "block"
                button.href = "https://gs-physics-journals.github.io/"
            }

            else if (randomproject == 6) {
                title.innerHTML = "Minibook";
                date.innerHTML = "*Still in Progress*";
                dis.innerHTML = "Minibook is a website designed to share summarys of books from different fields. This will help people who are busy most of there time to take the important values from these books.";
                button.style.display = "none"
            }

            else if (randomproject == 7) {
                title.innerHTML = "Login Page Template";
                date.innerHTML = "";
                dis.innerHTML = "Login Page template that can be used in any website and you have the ability to edit the template so it can fit your needs.";
                button.style.display = "block"
                button.href = "https://github.com/Ahm3dGI1/Login-page-Template"
            }
        }

    }
        , sec);
}

if (screen.width <= 768)
    shuffle(project1, projectsCheck, projects, projectb1, ptitle1, pdate1, pdis1, 4000);

if (screen.width > 768){
    shuffle(project1, projectsCheck, projects, projectb1, ptitle1, pdate1, pdis1, 11000);
    shuffle(project2, projectsCheck, projects, projectb2, ptitle2, pdate2, pdis2, 9000);
    shuffle(project3, projectsCheck, projects, projectb3, ptitle3, pdate3, pdis3, 12000);
}

/* Skills */
var skillCurrent,
    skillPreview = document.getElementById('skill-preview'),
    skillProgress = document.getElementById('skill-progress');
skillProgress.style.transition = '0.6s';

function skill() {
    $(".skill-active").removeClass("skill-active");
    skillCurrent = event.target;

    skillCurrent.classList.toggle('skill-active');


    skillPreview.src = "images/skills/" + skillCurrent.id + ".png";

    if (skillCurrent.id == "html") {
        skillProgress.style.width = '80%';
    }

    if (skillCurrent.id == "css") {
        skillProgress.style.width = '74%';
    }

    if (skillCurrent.id == "js") {
        skillProgress.style.width = '65%';
    }

    if (skillCurrent.id == "c-plusplus") {
        skillProgress.style.width = '75%';
    }

    if (skillCurrent.id == "c-sharp") {
        skillProgress.style.width = '60%';
    }

    if (skillCurrent.id == "three-d") {
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
