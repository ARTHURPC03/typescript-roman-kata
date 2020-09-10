import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

interface Props {
  toggleTheme(): void
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <h1>
        Roman Kata
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.secondary}
          onColor={colors.text}
          offHandleColor={colors.secondary}
          onHandleColor={colors.text}
        />
      </h1>
    </Container>
  )
}

export default ThemeSwitcher
