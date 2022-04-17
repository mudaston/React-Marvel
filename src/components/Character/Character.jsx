import styled from 'styled-components'
import { usePalette } from 'react-palette'
import { Link } from 'react-scroll'

const CharacterStyle = styled.button`
  display: flex;
  align-items: flex-start;

  a {
    display: flex;
    flex-direction: column;
    gap: 0.9375em 0;

    height: 100%;
    width: 100%;

    padding: 0 0 1.25rem;
  }

  color: var(--main-text-white);
  font-size: 1.5rem;

  min-height: 320px;
  width: 200px;

  padding: 0;

  background-color: var(--main-bg-color);
  box-shadow: 5px 5px 0.45em rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  outline: none;
  border: none;

  &:focus {
    transform: translateY(-10px);

    box-shadow: 0 5px 20px 3px ${({ shadowColor }) => shadowColor};
  }

  &:hover {
    transform: translateY(-10px);

    box-shadow: 0 5px 20px 2px ${({ shadowColor }) => shadowColor};
  }

  img {
    height: 200px;
    width: 100%;

    pointer-events: none;
  }

  div {
    margin: 0 0.9375em 0 0.9375em;

    text-transform: uppercase;
    text-align: left;
    line-height: 1.2;
  }
`

const Character = ({ img, name, id, onCharSelected, ...props }) => {
  const {
      data: { darkVibrant },
    } = usePalette(img),
    smooth = document.documentElement.clientWidth <= 768

  return (
    <CharacterStyle shadowColor={darkVibrant}>
      <Link
        to='characterInfo'
        smooth={smooth}
        offset={-20}
        duration={500}
        onClick={() => onCharSelected(id)}
      >
        <img src={img} width={200} height={200} alt={name} />
        <div>
          <span>{name}</span>
        </div>
      </Link>
    </CharacterStyle>
  )
}

export default Character
