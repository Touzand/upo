import styled from "styled-components";

const BodyContainer = styled.div`
  background-image: url(${(props) => props.api}${(props) => props.backDrop});
  background-position: center center;
  background-size: cover;
  background-repeat: norepeat;
  color: white;

  .tagname {
    font-weight: bold;
    padding: 0.5rem;
    color: white;
    text-align: center;
    border-bottom: solid thin white;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      color: white;
      border-color: white;
    }
  }

  .homepage-link a {
    padding: 0.25rem;
    background-color: whitesmoke;
    font-weight: bold;
    color: #222;
    border-radius: 0.25rem;
  }
`;

const BodyDiv = styled.div`
  padding: 1rem;
  widht: 100%;
  height: 100%;
  backdrop-filter: blur(5rem);
`;

const Body = ({ children, backDrop, api }) => (
  <BodyContainer api={api} backDrop={backDrop}>
    <BodyDiv>{children}</BodyDiv>
  </BodyContainer>
);
export default Body;
