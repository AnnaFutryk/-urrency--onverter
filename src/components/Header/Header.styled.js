import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;

  padding-top: 6px;
  padding-bottom: 6px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
  color: lightgrey;
`;
