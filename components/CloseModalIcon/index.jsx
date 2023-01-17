import styled from "styled-components"

const CloseIcon = ({toggle}) => {

    return (
        <>
          <Container>
              <img
                src="/assets/img/cancel.svg"
                onClick={
                  toggle
                }
                alt="cancel button"
              />
            </Container>
        </>
    )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  position:relative;

img{
  width: 5rem;
  transform-origin: 100% 0;
  opacity: 1;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transform: scale(.28);
}



`


export default CloseIcon