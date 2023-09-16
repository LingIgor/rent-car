import styled from 'styled-components';

export const InputFrom = styled.input`
  box-sizing: border-box;
  width: 160px;
  padding: 14px 0 14px 24px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border: none;
  border-right: 1px solid #dbcfcf;
  outline: none;
  background-color: #f7f7fb;
  color: black;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;

export const InputTo = styled.input`
  box-sizing: border-box;
  width: 160px;
  padding: 14px 0 14px 24px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  outline: none;
  border: none;
  background-color: #f7f7fb;
  color: black;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;

export const Aside = styled.aside`
  display: flex;
  margin-bottom: 50px;
`;

export const BtnSearch = styled.button`
  width: 150px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 18px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: white;
`;
