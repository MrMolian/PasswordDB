import { useEffect, useState } from "react";
import { FetchCredentialGroups } from "../api/Credentials";
import { CredentialGroup } from "../components/CredentialGroup";
import type { CredentialGroupModel } from "../models/Credential";
import LoadingPage from "./LoadingPage";
import { BigPlusButton } from "../components/BigPlusbutton";

export function CredentialsGroupsPage() {
    const [groups, setGroups] = useState<CredentialGroupModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGroups = async () => {
            try {
                const data = await FetchCredentialGroups();
                if (data) {
                    setGroups(data);
                }
            } catch (err) {
                setError("Erreur lors du chargement des groupes");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadGroups();
    }, []);

    if (loading) return <LoadingPage/>
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="gap-2 flex flex-row w-full h-full">
            {groups.map((group) => (
                <CredentialGroup key={group.id} {...group} />
            ))}
            <BigPlusButton>
                    <p className="fixed z-50 inset-1/2"> salut </p>
            </BigPlusButton>
        </div>
    );
}