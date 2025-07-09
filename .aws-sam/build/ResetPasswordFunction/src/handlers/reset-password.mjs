import { CognitoIdentityProviderClient, ForgotPasswordCommand, ConfirmForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider";

const cleint = new CognitoIdentityProviderClient({});

export const handler = async (event) => {
    const { email, code, newPassword } = JSON.parse(event.body);
    if (!email) return { statusCode: 400, body: JSON.stringify({ message: 'Correo requerido' }) };

    if (code && newPassword) {
    await client.send(new ConfirmForgotPasswordCommand({
    ClientId: process.env.CLIENT_ID,
    Username: email,
    ConfirmationCode: code,
    Password: newPassword,
    }));
    return { statusCode: 200, body: JSON.stringify({ message: 'Contraseña cambiada exitosamente' }) };
}

    await client.send(new ForgotPasswordCommand({
    ClientId: process.env.CLIENT_ID,
    Username: email,
}));
    return { statusCode: 200, body: JSON.stringify({ message: 'Código de recuperación enviado a ${email}' }) };
};