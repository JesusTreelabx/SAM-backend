import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient({});

export const handler = async (event) => {
    const { name, email, password } = JSON.parse(event.body);
    if (!name || !email || !password) return { statusCode: 400, body: JSON.stringify({ message: 'Todos los campos requeridos'}) };

    await client.send(new SignUpCommand({
        ClientId: process.env.CLIENT_ID,
        Username: email,
        Password: password,
        UserAttributes: [{ Name: 'email', Value: email }],
    }));
    return { statusCode: 201, body: JSON.stringify({ message: 'Usuario registrado', userID: email }) };
};