function login() {
    const user = document.getElementById("userId").value;
    const pass = document.getElementById("password").value;

    if (user === "daniel" && pass === "231011402025") {
        localStorage.setItem("login", "true");
        window.location.href = "beranda.html";
    } else {
        alert("User ID atau Password salah!");
    }
}
