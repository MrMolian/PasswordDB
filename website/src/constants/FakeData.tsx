import { type CredentialGroup, type Credential } from "../models/Credential";
export const CredentialGroups: CredentialGroup[] = [
    { name: "university", id: "1234" },
    { name: "coding", id: "5678" },
    { name: "home", id: "9012" },
    { name: "misc", id: "3456" },
];
export const Credentials: Credential[] = [
    { username: "email1", website: "website1.com", email: "email1@email.com", password: "password1" },
    { username: "email2", website: "website2.com", email: "email2@email.com", password: "password2" },
    { username: "email3", website: "website3.com", email: "email3@email.com", password: "password3" },
    { username: "email4", website: "website4.com", email: "email4@email.com", password: "password4" },
    { username: "email5", website: "website5.com", email: "email5@email.com", password: "password5" },
] 