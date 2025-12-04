const boxes = document.querySelectorAll('.box');

console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
    boxes[i].ontouchend = () => {
        boxes[i].innerHTML = Math.floor(Math.random() * 45 + 1);
    }
}