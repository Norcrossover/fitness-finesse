import Link from 'next/link';
import Logo from './Logo';

export default function NavBar() {
    return (
        <nav className="flex">
            <Logo />
            <Link href="/dashboard/motivation">Motivation</Link>
            <Link href="/dashboard/journal">Journal</Link>
            <Link href="/dashboard/logger">Logger</Link>
            <Link href="/dashboard/planner">Workout Planner</Link>
        </nav>
    );
}