"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NextThemesProvider
            attribute="class" // ← تستخدم class="dark" أو class="light"
            defaultTheme="dark" // ← الثيم الافتراضي
            enableSystem={true} // ← يدعم الثيم حسب النظام (optional)
        >
            {children}
        </NextThemesProvider>
    );
}
