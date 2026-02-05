import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CredentialsGroupsPage } from "./pages/CredentialsGroupsPage";
import { CredentialsPage } from "./pages/CredentialsPage";
import { Navigate } from "react-router-dom";
import { useSession } from "./providers/SessionProvider";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LoadingPage from "./pages/LoadingPage";
import NotFound from "./pages/NotFound";

export default function App() {
    const { session, loading } = useSession();
    if (loading) {
        return <LoadingPage />;
    }

    return (
        <>
            <Routes>
                {session ? (
                    <>
                        <Route
                            path="/"
                            element={<Navigate to="/passwords" replace />}
                        />
                        <Route
                            path="/passwords"
                            element={<CredentialsGroupsPage />}
                        />
                        <Route
                            path="/passwords/:id"
                            element={<CredentialsPage />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </>
                ) : loading ? (
                    <Route path="*" element={<LoadingPage />} />
                ) : (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </>
                )}
            </Routes>
        </>
    );
}
