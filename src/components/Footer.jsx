import { StyledFooter } from "../styles/styles"
import Linkedin from "../assets/iconmonstr-linkedin-3.svg"
import Github from "../assets/iconmonstr-github-1.svg"
import Card from "./Card"

export default function Footer() {
  return (
    <>
    <StyledFooter>
      <Card link="https://www.linkedin.com/in/douglasoliveiradev/" image={Linkedin} />
      <Card link="https://github.com/odouglasoliveira" image={Github} />
    </StyledFooter>
    </>
  )
}