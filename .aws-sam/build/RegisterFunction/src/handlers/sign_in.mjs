import { CognitoIdentityProviderClient, AdminInitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient({});

export const handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    if (!email || !password) return { StatusCode: 400, body: JSON.stringify({ message: 'Correo y contraseña son requeridos' }) };

    const response = await client.send(new AdminInitiateAuthCommand({
        AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
        ClientId: process.env.CLIENT_ID,
        UserPoolId: process.env.USER_POOL_ID,
        AuthParameters: { USERNAME: email, PASSWORD: password },
    }));

    return { statusCode: 200, body: JSON.stringify({ message: 'Inicio de sesion exitoso', token: response.AuthenticationResult.AccessToken }) };
;}