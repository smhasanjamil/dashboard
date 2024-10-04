import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./ui/Main";
import Content from "./ui/Content";
import Profile from "./components/profile/Profile";
import Stats from "./components/stats/Stats";
import Team from "./components/team/Team";
import Event from "./components/Event/Event";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Main>
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
