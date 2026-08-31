import type { ReactNode } from "react";

interface AuthLayoutProps{
    children:ReactNode
}

export default function AuthLayout({children}:AuthLayoutProps){
    return(
        <main className="relative min-h-screen overflow-hidden bg-black">
            {/* BG Image */}
            <img
                src="/image.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/20"/>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-end px-5 py-8 lg:px-16 xl:px-24">
                {children}
            </div>
        </main>
    )
}