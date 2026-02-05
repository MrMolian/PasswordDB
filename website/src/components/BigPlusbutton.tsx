import { useState, type ReactNode } from "react";

export function BigPlusButton({children}  : {children : ReactNode}) {
    const [show, setShow] = useState(false);
    return (
        <>
            <button className="bg-transparent size-32" onClick={() => setShow((p) => !p)}></button>
            {show && children}
        </>
    );
}
