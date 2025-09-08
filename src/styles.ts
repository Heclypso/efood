import { createGlobalStyle } from 'styled-components'

export const colors = {
  primaryColor: '#FFF8F2',
  secondaryColor: '#FFEBD9',
  tertiaryColor: '#E66767',
  textColor: '#FFFFFF',
  inputTextColor: '#4B4B4B'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${colors.primaryColor};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding-top: 80px;
        padding-bottom: 120px;
    }
`
