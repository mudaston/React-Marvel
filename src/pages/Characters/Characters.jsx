import { useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import { device } from '../../styles/styled-components/queries'
import {
  CharactersList,
  CharacterInfo,
  RandomCharacter,
} from '../../components'
import { ErrorBoundary } from '../../components/elements'

import decoration from '../../img/bg_asset.png'

const CharactersPageStyle = styled.div`
  //position: relative;

  padding: 0 0 45px 0;

  /* min-height: 1450px; */

  .More {
    margin: 0 auto;
  }
`

const CharactersSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1.3fr;
  gap: 1.25rem;

  margin: clamp(1.25rem, 5vh, 3.125rem) 0 clamp(1.25rem, 5vh, 2.8125rem);

  #characterInfo {
    grid-column: 2;
    grid-row: 1;
  }

  @media ${device.tablet} {
    grid-template-columns: unset !important; //I don't understand why this rule doesn't work
    #characterInfo {
      order: -1;
      grid-column: unset;
      grid-row: unset;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 2fr 1.6fr;
  }
`

const CharacterSectionDecoration = styled.img`
  position: absolute;
  z-index: -1;

  right: 10%;
  bottom: -150px;

  @media ${device.tablet} {
    display: none;
  }
`

const Characters = () => {
  const [selectedChar, setSelectedChar] = useState(0)

  const onCharSelected = (id) => {
    setSelectedChar(id)
  }

  return (
    <CharactersPageStyle>
      <Helmet>
        <title>Marvel Characters</title>
        <meta name='description' content='Marvel characters portal' />
      </Helmet>
      <RandomCharacter />
      <CharactersSection>
        <ErrorBoundary>
          <CharactersList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div id='characterInfo'>
          <ErrorBoundary>
            <CharacterInfo id={selectedChar} />
          </ErrorBoundary>
        </div>
      </CharactersSection>
      <CharacterSectionDecoration src={decoration} />
    </CharactersPageStyle>
  )
}

export default Characters
