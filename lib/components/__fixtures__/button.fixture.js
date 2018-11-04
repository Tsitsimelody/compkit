import Button from "../Button";

Button.displayName = "Button";

export default [
  {
    component: Button,
    name: "default",
    props: {
      onClick: value => console.log("Button Clicked"),
      children: "Click Me"
    }
  },
  {
    component: Button,
    name: "disabled",
    props: {
      onClick: value => console.log("Button Clicked"),
      disabled: true,
      children: "Click Me"
    }
  }
];
