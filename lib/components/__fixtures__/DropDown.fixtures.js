import DropDown from "../DropDown/DropDown";

export default {
  component: DropDown,
  props: {
    options: [
      { id: 1, text: "one" },
      { id: 2, text: "two" },
      { id: 3, text: "three" }
    ],
    selectedOption: { id: 1, text: "one" }
  }
};
