import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          DeFi Kredi Puanı
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/about">Hakkında</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">İletişim</Link>
          </Button>
          <Button>Başla</Button>
        </div>
      </nav>
    </header>
  )
}

