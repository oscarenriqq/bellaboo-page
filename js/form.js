document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const URL = "https://hook.us1.make.com/onjwm5ga309aerejgd0d6tqgn3iq3i1w";

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        event.target.reset();
        document.getElementById("alert-form-success").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("alert-form-success").classList.add("hidden");
        }, 5000);
    } catch (error) {
        document.getElementById("alert-form-error").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("alert-form-error").classList.add("hidden");
        }, 5000);
    }
});