import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }  

    body {       
        font-family: 'Rubik', sans-serif;        
    }  
    
    button, input, select {
        all: unset;
        box-sizing: border-box;
    }  
    
    img {
        cursor: pointer;
    }
`;
