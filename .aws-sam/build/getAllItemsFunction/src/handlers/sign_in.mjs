export async function handler(event) {
    const body = JSON.parse(event.body);
    const { username, password } = body;

    if (username === "jaybetter" && password === "Password1#") {
    return {
        statusCode: 200,
        body: JSON.stringify({
        message: "Inicio de sesion exitoso",
        token: "818462",
        }),
    };
    } else {
    return {
        statusCode: 401,
        body: JSON.stringify({ message: "Credenciales invalidas" }),
    };
    }
}
