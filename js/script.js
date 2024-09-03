
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})




particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


const navLinksEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');


let =currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl =>{
        if(window.scrollY >= sectionEl.offsetTop - 550){
            currentSection = sectionEl.id;
        }
    });
    navLinksEls.forEach(navLinksEl=>{
    if(navLinksEl.href.includes(currentSection)){
        document.querySelector('.active').classList.remove('active');
     navLinksEl.classList.add('active');
   }
    });
} );




var ui = document.getElementById("ui");
var html = document.getElementById("html");
var prjclick = document.getElementById("prjclick");
var prjclick2 = document.getElementById("prjclick2");


// html.addEventListener('mouseover', ()=>{
//   html.style.backgroundColor='#122C39';
// } );
// html.addEventListener('mouseleave', ()=>{
//   html.style.backgroundColor='#122C3900';
//   html,style.transition='ease-in-out 0.4s';

// } );

ui.addEventListener('click', ()=>{
  prjclick.style.display='block';
  prjclick2.style.display='none';
  ui.style.backgroundColor='#122C39';
  html.style.backgroundColor='#122C3900';
} );

html.addEventListener('click', ()=>{
  prjclick2.style.display='block';
  prjclick.style.display='none';
  ui.style.backgroundColor='#122C3900';
  html.style.backgroundColor='#122C39';
} );
