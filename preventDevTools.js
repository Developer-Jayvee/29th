let windowWidth = window.innerWidth;
window.addEventListener('resize', () => {
    if (window.innerWidth !== windowWidth) {
        document.querySelector("body").innerHTML = " <h1> YOU ARE NOT ALLOWED TO OPEN DEV TOOLS </h1>"
        setInterval(() => {
            window.location.reload();
        },1000)
    }
});