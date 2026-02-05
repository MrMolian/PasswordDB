import supabase from "./supabase-client";

export async function loginWithEmail(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
        email,
        password,
    });
}

export async function signUpWithEmail(email: string, password: string) {
    return await supabase.auth.signUp({
        email,
        password,
    });
}

export async function logout() {
    return await supabase.auth.signOut();
}
