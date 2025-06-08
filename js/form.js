document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    
    
    event.target.reset();

    const URL = "https://hook.us1.make.com/onjwm5ga309aerejgd0d6tqgn3iq3i1w"

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    alert("Form enviado")
});