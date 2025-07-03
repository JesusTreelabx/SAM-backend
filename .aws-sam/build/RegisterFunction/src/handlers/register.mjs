export async function handler(event) {
    const body = JSON.parse(event.body);
    const { name, email, password } = body;

    console.log(event);

    if (name && email && password) {
        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Usuario registrado", userID: "jaybetter" }),
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Todos los campos son requeridos" }),
        };
    }
}