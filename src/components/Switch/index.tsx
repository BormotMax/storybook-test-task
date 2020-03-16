import React from "react";
import styled from "styled-components";
import { Switch as SwitchAntd } from "antd";
import { SwitchProps } from "antd/lib/switch";
import "antd/dist/antd.css";

const StyledSwitch: React.FC<SwitchProps> = styled(SwitchAntd)``;

export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => <StyledSwitch {...props} />;

export default Switch;
