import { Router } from 'next/router'
import Logo from './Logo'

interface NavbarProps {
  path: string
}
function Navbar({ path }: NavbarProps) {
  return (
    <div>
      <Logo />
    </div>
  )
}

export default Navbar
