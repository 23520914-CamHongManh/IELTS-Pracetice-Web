import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

export const Default = {
  args: {
    title: "Dashboard",
    onToggleSidebar: () => alert("Toggle Sidebar!"),
  },
};
