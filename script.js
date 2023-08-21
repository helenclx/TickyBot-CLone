const topButton = document.querySelector(".top-btn");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.classList.remove("hidden");
    } else {
        topButton.classList.add("hidden");
    }
}

topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});