import Sidebar from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

export const Open = {
  args: { isOpen: true },
};

export const Closed = {
  args: { isOpen: false },
};
