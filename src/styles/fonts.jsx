import { Global } from "@emotion/react"

const Fonts = () => (
	<Global
		styles={`
     
      @font-face {
        font-family: 'Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
      }
  
      @font-face {
        font-family: 'Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/roboto-v27-latin-regular.woff2') format('woff2');
      }
      `}
	/>
)
export default Fonts
