import React,{useEffect} from "react";
import styled from "styled-components";
function Toast({ Progress, pendingText, successText }) {

  return (
    <>
    {/* hides the toast if Progress state is 1 */}
      {Progress !== 1 && (
        <ToastWrapper>
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

const ToastWrapper = styled.div`
  position: fixed;
  display: block;
  background: white;
  bottom: 15px;
  right: 12px;
  padding: 6px 16px;
  border-radius: 12px;
  font-weight: 600;
  border: 1px solid #dddddd;
  z-index:999;
`;
const ToastTitle = styled.div`
  font-size: 24px;
  color: #000;
`;
export default Toast;
