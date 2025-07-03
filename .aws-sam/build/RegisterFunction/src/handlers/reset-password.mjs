export async function handler(event) {
    const body = JSON.parse(event.body);
    const { email } = body;

    if (email) {
    return {
        statusCode: 200,
        body: JSON.stringify({
        message: `Enlace enviado a ${email}`,
        resetlin: "http://reset-link.com",
        }),
    };
    } else {
    return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email requerido" }),
    };
    }
}
