const project1 =document.getElementById('p1');
const project2 =document.getElementById('p2');
const project3 =document.getElementById('p3');

function anchor(link){
    window.location.href = `${link}`;
}

function rotate3d(link){
const box = document.getElementById(`${link}`);

  box.addEventListener("mousemove", (e) => {
    const boxRect = box.getBoundingClientRect();
    const centerX = boxRect.left + boxRect.width / 2;
    const centerY = boxRect.top + boxRect.height / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const rotateX = (-offsetY / 15).toFixed(2);
    const rotateY = (offsetX / 15).toFixed(2);

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}