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

function saveToLocalStorage() {

    let form = document.querySelector("#preorder-form");

    let formElements = form.elements;

    let data = {};

    for (element of formElements) {

        if ((element.tagName === 'INPUT' && element.type != 'submit') && (element.type != 'radio' || (element.type === 'radio' && element.checked))) {
            data[element.name] = element.value;
            console.log("data[" + element.name + "] = " + data[element.name]);
        }
    }

    localStorage.setItem("formData", JSON.stringify(data));


    form.innerHTML += `<br><br><p>Your order has been sent (and saved to LocalStorage hehe)</p>`

}

function moveToPreOrder() {
    window.location.hash = "preorder";
}