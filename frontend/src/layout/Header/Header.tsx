import logo from "../../assets/logo.png"
import "./Header.scss"

export const Header = () => {
  return (
    <header id="header-component">
      <img src={logo} alt="NTF data" />
    </header>
  )
}
