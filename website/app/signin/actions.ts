'use server';

import { NextResponse } from 'next/server';
import xata from '@/lib/xata';

async function comparePasswords(inputPassword: string, storedPassword: string): Promise<boolean> {
  return inputPassword === storedPassword;
}

export async function signIn(formData: FormData) {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) {
    return { success: false, error: 'Email and password are required' };
  }

  try {
    const user = await xata.db.nextauth_users.filter({ email }).getFirst();

    if (!user || !(await comparePasswords(password, user.password || ''))) {
      return { success: false, error: 'Invalid credentials' };
    }
    
    const response = NextResponse.redirect(new URL('/', new URL('/', 'http://localhost').href));
    response.cookies.set({
      name: 'auth',
      value: 'true',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/'
    });
    
    return { success: true };
  } catch (error) {
    console.error('Signin failed:', error);
    return { success: false, error: 'Something went wrong' };
  }
}
