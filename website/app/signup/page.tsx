import { redirect } from 'next/navigation';
import xata from '@/lib/xata';

export default function SignupPage() {
  async function createUser(formData: FormData) {
    'use server';
    
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (!name || !email || !password) {
      throw new Error('Missing required fields');
    }

    try {
      await xata.db.nextauth_users.create({
        name,
        email,
        password  
      });
      
      return redirect('/');
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  }

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-background p-8 rounded-lg border border-border shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">Create an account</h1>
          
          <form action={createUser} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1 text-foreground">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </button>
          </form>
          
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account? <a href="/signin" className="text-primary hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
