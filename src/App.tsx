import "./App.css";
import { NavbarComponent } from "./components/Navbar";
import { TabsDefault } from "./components/Taps";

export const App = () => {
  return (
    <div className="container mx-auto">
      <NavbarComponent></NavbarComponent>
      <TabsDefault></TabsDefault>
    </div>
  );
};
