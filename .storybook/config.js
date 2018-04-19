import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/Button.js");
  require("../stories/Input.js");
  require("../stories/Segment.js");
}

configure(loadStories, module);
