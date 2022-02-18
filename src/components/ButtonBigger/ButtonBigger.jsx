import styled from "styled-components"

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  border: 5px solid transparent;

  width: 100%;
  max-width: 10.625em;

  padding: .3125em 0;

  font-size: 1rem;
  color: var(--main-text-white);

  background-color: ${({grey}) => grey ? 'var(--main-bg-grey)' : 'var(--main-red-color)'};
  clip-path: polygon(12% 0,100% 0,100% 60%,88% 100%,0 100%,0% 37%);
  transition: background-color .3s ease;

  &:hover {
    background-color: ${({grey}) => grey ? 'var(--main-hover-grey)' : 'var(--main-hover-red)'};
  }

  &:focus {
    outline: none;
    border: 5px solid ${({grey}) => grey ? `var(--main-hover-red)` : 'var(--main-hover-grey)'};
  }
`

const ButtonBigger = ({text, ...props}) => <ButtonStyle {...props}>{text}</ButtonStyle>


export default ButtonBigger
