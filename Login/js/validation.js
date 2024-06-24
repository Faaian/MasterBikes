function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;

    if (!name) {
        alert("Nombre es requerido");
        return;
    }

    if (!validateEmail(email)) {
        alert("Email válido es requerido");
        return;
    }

    if (!password) {
        alert("Contraseña es requerida");
        return;
    }

    if (password !== repeatPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    alert("Cuenta creada exitosamente");
    window.location.href = "Login.html";
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        alert("No hay usuarios registrados");
        return;
    }

    if (user.email !== email || user.password !== password) {
        alert("Email o contraseña incorrectos");
        return;
    }

    alert("Inicio de sesión exitoso");

    window.location.href = "../index.html";
}
