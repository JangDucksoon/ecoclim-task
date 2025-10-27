export default function ManagementLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="max-w-(--main-wrap) mx-auto flex min-h-[calc(100%-334px)] flex-col gap-16 bg-red-200 px-[2.4rem]">
            <main className="relative max-w-[calc(100%-var(--aside-width)-4.0rem)] flex-1">{children}</main>
        </div>
    );
}
