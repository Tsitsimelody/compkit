import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Segment from "../lib/components/Segment";

storiesOf("Segment", module).add("default", () => (
  <Segment>
    <p> This is a basic segment </p>
  </Segment>
));
