function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function menuIcon(x) {
    x.classList.toggle("change");
    sleep(500).then(() => {
        x.classList.toggle("change");
    });

}

function openNav() {
    document.getElementById("Sidenav").style.width = "250px";

}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";

}
