import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Project Finance', href: '#' },
  { name: 'Tax Credits Solutions', href: '#' },
  { name: 'Project Development', href: '#' },
  { name: 'KnowCarbon', href: '#' },
]

export const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background text-foreground">
    {/* Navbar */}
    <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white py-4 px-8 flex items-center justify-between z-50">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <span className="text-xl font-bold">Ewic's Stock Analysis</span>
      </div>
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map(item => (
          <a key={item.name} href={item.href} className="text-white text-sm hover:underline">
            {item.name}
          </a>
        ))}
      </nav>
      {/* Contact Button */}
      <Button className="bg-white text-black hover:bg-gray-200">Contact Us</Button>
    </header>

    {/* Page Content */}
    <main className="pt-20 flex-1">{children}</main>
  </div>
)
