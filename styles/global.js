import { createGlobalStyle } from 'styled-components';

import backgroud from '../assets/images/backgroudBox.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

body{
  background: #191920 url(${backgroud}) no-repeat center top;
  -webkit-font-smoothing: antialiased
}

#root{
  max-width:1020px;
margin: 0 auto;
padding: 0 20px 50px;
}

body,input,button{
  font: 14px Roboto, sans-serif;
}

button{
  cursor:pointer;
}
`;
