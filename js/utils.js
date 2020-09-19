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
    } else {
        document.getElementById("main-logo").style.fontSize = "4rem";
        for (link of x) {
            link.style.fontSize = "1.5rem";
            link.style.padding = "10px 0px";
            link.style.width = "240px";
        }
    }
}

(function fillDetails() {

    let details = [{
            label: "Sku",
            value: "ES4519"
        },
        {
            label: "Case Size",
            value: "38MM"
        },
        {
            label: "Movement",
            value: "Quartz Multifunction"
        },
        {
            label: "Platform",
            value: "RILEY"
        },
        {
            label: "Strap Material",
            value: "Stainless Steel"
        },
        {
            label: "Water Resistance",
            value: "5 ATM"
        },
        {
            label: "Case Color",
            value: "Rose Gold"
        },
        {
            label: "Dial Color",
            value: "Rose Gold"
        },
        {
            label: "Strap Fashion Color",
            value: "Rose Gold"
        },
        {
            label: "Strap Width",
            value: "18MM"
        },
        {
            label: "Closure",
            value: "2 Pusher Foldover Clasp"
        },
        {
            label: "Battery Type",
            value: "SR621SW"
        }
    ];

    let wrapper = document.querySelector(".detail-content");

    for (element of details) {
        wrapper.innerHTML += `<div class="attribute">
        <span class="label">
            ${element.label}:
        </span>
        <span class="value">
            ${element.value}
        </span>
    </div>`
    }

})()