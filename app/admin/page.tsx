"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Cms = dynamic(
    () =>
        import("decap-cms-app").then((cms) => {
            cms.default.init();
            return () => null; // Returns empty component, CMS renders to DOM
        }),
    { ssr: false, loading: () => <p>Loading Admin...</p> }
);

export default function AdminPage() {
    return <Cms />;
}
