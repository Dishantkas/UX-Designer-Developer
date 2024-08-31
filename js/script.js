// let path = document.querySelector('path')
// let pathLength = path.getTotalLength()

// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// path.style.strokeDashoffset = pathLength;

// window.addEventListener('scroll', () =>{
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     var drawLength = pathLength * scrollPercentage;
//     path.style.strokeDashoffset = pathLength - drawLength;
// })
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
