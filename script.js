const container = document.querySelector(".container");
text = container.querySelector(".text");
generateBtn = container.querySelector(".generateBtn");
qrImage = container.querySelector(".qrImage");

generateBtn.addEventListener("click", () => {
    let qrValue = text.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...!"
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate";
    });
});

text.addEventListener("keyup", () => {
    if(!text.value) {
        container.classList.remove("active");
    }
});