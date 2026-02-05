import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signUpWithEmail } from "../auth/supabase-methods";
export default function SignUpPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { error } = await signUpWithEmail(email, password);
            if (error) {
                console.error(error.message);
                return;
            }
            navigate("/");
        } catch (err) {
            console.error("Unexpected error:", err);
        }
    };
    return (
        <>
            <form
                onSubmit={handleLogin}
                className="rounded-2xl shadow-2xl w-full "
            >
                <div className="flex flex-col p-5 gap-3">
                    <div className="flex flex-row justify-between gap-3">
                        <div className="relative flex-1 mr-5">
                            <label className="absolute left-0 top-1/2 -translate-y-1/2 form-label ">
                                Email
                            </label>
                        </div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-3 form-control"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-row align-middle gap-3">
                        <div className="relative flex-1 mr-5">
                            <label className="absolute left-0 top-1/2 -translate-y-1/2 form-label ">
                                Password
                            </label>
                        </div>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-3 form-control"
                            type="password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                    <NavLink to="/login">
                        <button type="button" className="btn btn-secondary">
                            Log In
                        </button>
                    </NavLink>
                </div>
            </form>
        </>
    );
}