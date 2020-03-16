import React from "react";
import { action } from "@storybook/addon-actions";

import Switch from ".";

export default {
  title: "Switch",
  component: Switch,
};

export const DefaultSwitch = () => <Switch onChange={action("Change switch")} />;

export const DefaultChecked = () => (
  <Switch defaultChecked onChange={action("Change switch default checked")} />
);

export const SmallSwitch = () => <Switch size="small" />;

export const DisabledSwitch = () => <Switch disabled />;

export const LoadingSwitch = () => <Switch loading />;

export const TitleSwitch = () => <Switch checkedChildren="Enable" unCheckedChildren="Disable" />;
