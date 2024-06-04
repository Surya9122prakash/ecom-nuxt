// const {OAuth2Client} = require('google-auth-library');
import { OAuth2Client } from "google-auth-library";

const config = useRuntimeConfig();
const googleClientID = config.googleClientID

const client = new OAuth2Client(googleClientID);


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = body.token;

    if(!token){
        throw createError({
            statusCode:400,
            statusMessage: "No token or invalid token provided"
        })
    }

    const user = verify(token).catch(console.error)

    return user;
})
/**
 * @desc Verifies JSON Web Token and returns user data if token is valid
 * @param token JSON Web Token from Google
 * @returns 
 */

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: googleClientID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();

    return payload;
    //   const userid = payload['sub'];
    // If the request specified a Google Workspace domain:
    // const domain = payload['hd'];
}
// verify().catch(console.error);

