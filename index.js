const flashlight = document.getElementById('flashlight');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    flashlight.style.left = `${mouseX + scrollX}px`;
    flashlight.style.top = `${mouseY + scrollY}px`;
});
