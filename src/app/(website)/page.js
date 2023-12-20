import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import HeroForm from '@/components/forms/HeroForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user?.name) {
    redirect('/account');
  }

  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link
            <br />
            for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact info and much more on a
            single page
          </h2>
        </div>
        <HeroForm user={session?.user} />
      </section>
    </main>
  );
}
