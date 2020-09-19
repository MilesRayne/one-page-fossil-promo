window.onscroll = function () {
    reduceHeaderSize()
};

function reduceHeaderSize() {

    const x = document.getElementsByClassName("menu-link");

    if (document.body.scrollTop > 82 || document.documentElement.scrollTop > 82) {
        document.getElementById("main-logo").style.fontSize = "2rem";
        for (link of x) {
            link.style.fontSize = "1rem";
            link.style.padding = "5px 0px";
            link.style.width = "150px";
        }
        console.log("radim to");
    } else {
        document.getElementById("main-logo").style.fontSize = "4rem";
        for (link of x) {
            link.style.fontSize = "1.5rem";
            link.style.padding = "10px 0px";
            link.style.width = "200px";
        }
    }
}