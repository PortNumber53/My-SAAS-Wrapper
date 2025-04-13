import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-foreground hover:text-primary transition-colors tracking-tight"
            >
              MyApp
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/signin" 
              className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
