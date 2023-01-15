import React,{useEffect} from "react";
import styled from "styled-components";
function Toast({ Progress, pendingText, successText }) {

  return (
    <>
    {/* hides the toast if Progress state is 1 */}
      {Progress !== 1 && (
        <ToastWrapper>
          <SmallCircle></SmallCircle>
          {Progress == 2 ? (
            <ToastTitle>{pendingText}</ToastTitle>
          ) : Progress == 3 ? (
            <ToastTitle>{successText}</ToastTitle>
          ) : (
            ""
          )}
        </ToastWrapper>
      )}
    </>
  );
}
const SmallCircle=styled.div`
height:18px;
width:18px;
margin-right:5px;
background:#dddddd;
border-radius:50%;

`
const ToastWrapper = styled.div`
  position: fixed;
  display: block;
  background: white;
  bottom: 15px;
  right: 12px;
  padding: 6px 16px;
  border-radius: 12px;
  border: 1px solid #dddddd;
  z-index:999;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const ToastTitle = styled.div`
  font-size: 20px;
  color: #000;
`;
export default Toast;
