import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LogoutButton from '@/components/buttons/LogoutButton';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-white border-b py-4">
      <div className="w-full flex justify-between mx-auto px-20">
        <div className="flex items-center gap-6">
          <Link href={'/'} className="flex items-center gap-2 text-blue-500">
            <FontAwesomeIcon
              icon={faLink}
              className="text-blue-500 w-[2rem] h-[2rem]"
            />
            <span className="text-2xl font-bold">Linkify</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-500">
          {!!session && (
            <>
              <Link href={'/account'}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={'/login'}>Sign In</Link>
              <Link href={'/login'}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
