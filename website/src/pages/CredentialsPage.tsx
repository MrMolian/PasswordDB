import { useParams } from "react-router-dom";
import { FetchCredentials } from "../api/Credentials";
import type { Credential } from "../models/Credential";
interface CredentialsCardLineProps {
    name: string;
    value: string;
}
function CredentialsCardLine({ name, value }: CredentialsCardLineProps) {
    return (
        <>
            <div className="flex gap-2">
                <h2> {name}</h2>
                <p> {value} </p>
            </div>
        </>
    );
}
export function CredentialsCard(credential: Credential) {
    return (
        <>
            <div className="border p-5 flex flex-col">
                <h1>{credential.website}</h1>
                <CredentialsCardLine name="Email" value={credential.email} />
                <CredentialsCardLine
                    name="Username"
                    value={credential.username}
                />
                <CredentialsCardLine
                    name="Password"
                    value={credential.password}
                />
            </div>
        </>
    );
}
export function CredentialsPage() {
    const { id } = useParams();
    if (id) {
        const credentials: Credential[] = FetchCredentials(id);
        return (
            <>
                <div className="grid grid-cols-3 gap-5 overflow-y-scroll">
                    {credentials.map((item) => (
                        <CredentialsCard {...item} />
                    ))}
                </div>
            </>
        );
    }
    return <p>no credentials found</p>;
}
