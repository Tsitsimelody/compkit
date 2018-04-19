import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Button from "../lib/elements/Button";

storiesOf("Button", module)
  .add("default", () => <Button onClick={action("clicked")}>Default</Button>)
  .add("disabled", () => <Button disabled> Disabled </Button>);
