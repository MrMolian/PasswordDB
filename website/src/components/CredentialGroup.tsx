import { NavLink } from "react-router-dom";
import { type CredentialGroupModel } from "../models/Credential";
export function CredentialGroup({ name, id }: CredentialGroupModel) {
    console.log(id)
    return (
        <NavLink to={id.toString()}>
            <div className="flex flex-1 border p-4 justify-center">
                <p>{name}</p>
            </div>
        </NavLink>
    );
}
