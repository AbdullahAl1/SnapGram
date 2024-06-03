import {Client, Account, Databases, Storage, Avatars} from 'appwrite'


export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT,
    url: import.meta.env.VITE_APPWRITE_ENDPOINT,
}
export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);


export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);



