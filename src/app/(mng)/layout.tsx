import Aside from '@/components/template/side/side';

export default function ManagementLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="max-w-(--main-wrap) gap-(--padding-09) mx-auto flex min-h-[calc(100%-334px)] flex-row px-[2.4rem]">
            <Aside />
            <main className="relative max-w-[calc(100%-var(--aside-width)-4.0rem)] flex-1">{children}</main>
        </div>
    );
}
