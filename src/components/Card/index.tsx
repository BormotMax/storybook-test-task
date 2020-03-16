import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { Switch } from "antd";
import { SwitchProps } from "antd/lib/switch";

interface IProps {
  onChange?: () => void;
  testFunction?: () => void;
  header?: string | ReactNode;
  subHeader?: string | ReactNode;
  helperText?: string | ReactNode;
  statusText?: {
    disabled: string | ReactNode;
    enabled: string | ReactNode;
  };
}

type ICard = IProps & SwitchProps;

const StyledCard: React.FC = styled.div`
  position: relative;
  width: 471px;
  background: #f8fafb;
  padding: 38px 47px 38px 35px;
  font-family: Avenir Next, sans-serif;
  h2 {
    font-size: 24px;
    line-height: 25px;
    color: #000000;
  }
  h3 {
    margin: 43px 5px 13px;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
  }
  .switch-controll {
    background: #f5f5f5;
    border-radius: 10px;
    padding: 9px 20px 8px;
    font-size: 13px;
    line-height: 25px;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    font-size: 10px;
    line-height: 13px;
    color: #515151;
    margin: 8px 30px 0 20px;
  }
`;

export const Card: React.FC<ICard> = ({
  header,
  subHeader,
  helperText,
  statusText = { disabled: "Disabled", enabled: "Enabled" },
  ...switchProps
}: ICard) => {
  const [status, setStatus] = useState(Boolean(switchProps.defaultChecked));

  const handleChange = (bool: boolean) => {
    setStatus(bool);
    switchProps.onChange && switchProps.onChange();
  };

  return (
    <StyledCard>
      <h2>{header}</h2>
      <h3>{subHeader}</h3>
      <div className="switch-controll">
        <span>{status ? statusText.enabled : statusText.disabled}</span>
        <Switch {...switchProps} onChange={handleChange} />
      </div>
      <h4>{helperText}</h4>
    </StyledCard>
  );
};

export default Card;
