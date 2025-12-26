const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", () => {
    console.log("CTA Button clicked at " + new Date().toLocaleString());
    alert("Thanks for reaching out!"); // optional
});