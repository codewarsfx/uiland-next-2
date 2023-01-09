import { useEffect } from "react";
import styled from "styled-components";

const BottomSheet = ({closeBottomSheetModal,downloadImage,copyImage,openBottomSheet}) => {

  useEffect(()=>{
    window.onclick = function (event) {

		if (event.target.className.includes("BottomSheetWrapper")) {
			closeBottomSheetModal()
		}
	  }
  },[closeBottomSheetModal])  
	return (
        <>
        {openBottomSheet && (


            <BottomSheetWrapper>
		<BottomSheetContainer>
		<DownloadContent onClick={downloadImage}>
            Download Image
        </DownloadContent>
        <CopyContent onClick={copyImage}>
            Copy image
        </CopyContent>
		</BottomSheetContainer>
        </BottomSheetWrapper>
        )}
       </>
	)
}

const DownloadContent=styled.div`

`
const CopyContent=styled.div`

`
const BottomSheetWrapper=styled.div`
background-color: rgba(0, 0, 0, 0.7);
position: fixed;
display: block;
height:100%;
width:100%;
top: 0;
left: 0;
z-index: 100;
`
const BottomSheetContainer = styled.div`
  position: fixed;
  display: block;
  background: white;
  bottom: 0;
  right: 0;
  width:100%;
  padding: 12px;
  border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  font-weight: 600;
  border: 1px solid #dddddd;
  z-index:9999;
  display:flex;
  flex-direction:column;
  gap:8px;
  color:black;
  font-size:18px;
`;

export default BottomSheet;
