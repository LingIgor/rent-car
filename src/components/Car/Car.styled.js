import styled from 'styled-components';

export const CardBox = styled.div`
  width: 284px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const CarImgWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 284px;
  height: 268px;
  border-radius: 14px;
`;

export const TextBox = styled.div`
  width: 100%;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 24px;
`;

export const CarInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  margin: 0;
`;

export const CarText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`;

export const ModelBlue = styled.div`
  color: #3470ff;
  font-size: 16px;
`;

export const ButtonFollows = styled.button`
  width: 196px;
  padding: 16px 0px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: ${({ bgColor }) =>
    bgColor === false ? '#EBD8FF' : '#5CD3A8'};
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
`;

export const SecondaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 4px;
`;

export const SecondaryCarText = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 11px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;
`;

export const LearnMoreBtn = styled.button`
  width: 284px;
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

export const IconBtn = styled.button`
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
