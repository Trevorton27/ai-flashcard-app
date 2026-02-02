'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Flashcards', href: '/flashcards' },
        { name: 'Upload Words', href: '/upload' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900">
                        AI Flashcards
                    </Link>
                    <ul className="flex space-x-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive
                                                ? 'bg-zinc-900 text-white'
                                                : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;