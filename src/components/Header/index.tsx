import { HeaderContainer } from './styles'

import { Timer, Scroll } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

import logoIgnite from '../../assets/images/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historic">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
