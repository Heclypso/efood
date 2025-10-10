import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  mobile: '768px',
  desktop: '1024px'
}

export const colors = {
  primaryColor: '#FFF8F2',
  secondaryColor: '#FFEBD9',
  tertiaryColor: '#E66767',
  textColor: '#FFFFFF',
  errorTextColor: 'red',
  inputTextColor: '#4B4B4B',
  overlayColor: 'rgba(0, 0, 0, 0.8)',
  bannerOverlayColor: 'rgba(0, 0, 0, 0.5)'
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
        position: relative;
    }
`
