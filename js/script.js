const cursor = document
        .querySelector(".custom-cursor");
    
    window.addEventListener("mousemove", (event) => {
        let x = event.pageX - cursor.offsetWidth / 2,
            y = event.pageY - cursor.offsetHeight / 2;
    
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });