import { Credentials } from "../constants/FakeData";
import supabase from "../auth/supabase-client";
import type { CredentialGroupModel } from "../models/Credential";

export async function FetchCredentialGroups(): Promise<CredentialGroupModel[] | undefined> {
    const { error, data } = await supabase.from("CredentialGroups").select("id,name");
    if (error) {
        console.error("Error reading task: ", error.message);
        return ;
    }
    return data;
}


export function FetchCredentials(id: string) {
    return Credentials;
}
