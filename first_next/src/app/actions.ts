'use server'
import { cookies } from "next/headers";

export default async function setCookiesServerAction() {
    if (!cookies().has('_data_')) {
        console.log('Setting cookies...');
        cookies().set('_data_', 'this is the value', {secure: true, sameSite: 'strict'});
    }
}