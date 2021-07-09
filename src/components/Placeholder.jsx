import styled from "styled-components"

const Placeholder = styled.img`
height:200px;
margin:30%;
opacity:50%;
animation: blink 1s step-start infinite;
@keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export default Placeholder;