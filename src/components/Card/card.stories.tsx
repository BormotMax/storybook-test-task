import React from "react";
import { action } from "@storybook/addon-actions";

import Card from ".";

export default {
  title: "Card",
  component: Card,
};

export const Default = () => <Card />;

export const DefaultChecked = () => (
  <Card defaultChecked onChange={action("Toggle default checked")} />
);

export const StatusText = () => (
  <Card
    header="To be or not to be?"
    title="Here's the question"
    onChange={action("Toggle switch")}
    statusText={{ enabled: "True", disabled: "False" }}
  />
);

export const Emoji = () => (
  <Card
    header={
      <>
        Eat Now Features{" "}
        <span role="img" aria-label="diners">
          🍽️
        </span>{" "}
      </>
    }
    subHeader={
      <>
        Do you want diners to be able to request tables?{" "}
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </>
    }
    onChange={action("Toggle switch emoji")}
    helperText={
      <>
        This setting determines whether or not diners can request to ‘Eat Now’ at your restaurant.
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </>
    }
    statusText={{
      enabled: (
        <span role="img" aria-label="enabled">
          👍
        </span>
      ),
      disabled: (
        <span role="img" aria-label="disabled">
          👎
        </span>
      ),
    }}
  />
);
