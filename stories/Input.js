import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Input from "../lib/elements/Input";

storiesOf("Input", module).add("default", () => (
  <Input placeholder="Basic usage" />
));
