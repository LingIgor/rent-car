import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(18, 20, 23, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const ModalCar = styled.div`
  width: 541px;
  position: relative;
  background-color: #fff;
  padding: 40px;
  border-radius: 24px;
`;
export const CarImage = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  margin-bottom: 14px;
  border-radius: 14px;
`;
export const Description = styled.p`
  margin-top: 14px;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 2;
`;
export const InfoTitle = styled.h3`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.428;
  margin-top: 24px;
  margin-bottom: 8px;
`;
export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const Conditions = styled.li`
  display: inline-block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;
export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
export const RentalButton = styled.button`
  margin-top: 24px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  border: none;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.428;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #0b44cd;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 9px;
`;
export const TagsItem = styled.p`
  color: #12141780;
  padding-right: 6px;
  padding-left: 6px;
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.8;
  &:not(:first-child) {
    border-left: 1px solid #1214171a;
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;
