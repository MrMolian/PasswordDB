import type { ReactNode } from "react";
import { SessionProvider } from "./SessionProvider";

export default function MasterProvider({children}: {children : ReactNode}) {
    return <SessionProvider>{children}</SessionProvider>;
}
