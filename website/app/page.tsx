import Image from "next/image";
import xata from '@/lib/xata';
import type { NextauthUsersRecord } from '@/vendor/xata';

export default async function Home() {
  let users: NextauthUsersRecord[] = [];

  try {
    users = await xata.db.nextauth_users.getMany();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return <div className="text-red-500 p-4">Error loading users. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to MyApp</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A modern application built with Next.js and Xata
            </p>
          </div>

          <div className="bg-background rounded-lg border border-border p-6">
            <h2 className="text-2xl font-semibold mb-6">Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user) => (
                <div key={user.xata_id} className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-4">
                    {user.image && (
                      <Image
                        src={user.image}
                        alt={user.name || 'User'}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <h3 className="font-medium">{user.name || 'No name'}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
