import React from "react";
import Plot from "./Plot";
import FormWork from "./FormWork";
import { TbDrone, TbDevices, TbDragDrop, TbFrame } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ModeWork from "./ModeWork";
import BackWork from "./BackWork.jsx";

const Work = () => {
  return (
    <div className="work" id="work">
      <div className="plots">
        <Plot
          name="plot plot-1"
          icon={<TbDrone />}
          tag="UI / UX Design"
          detail="I have created a user interface and user experience with some process and method "
        />
        <Plot
          name="plot plot-2"
          icon={<TbDevices />}
          tag="Web Development"
          detail="savvy of building a full stack structure for our workflow process "
        />
        <Plot
          name="plot plot-3"
          icon={<TbDragDrop />}
          tag="Branding"
          detail="Branding is Silent Ambassador for your company like a reputaion for a person"
        />
        <Plot
          name="plot plot-4"
          icon={<TbFrame />}
          tag="Frame-works"
          detail="Abilty to work with different Frame-Works for different platforms"
        />
      </div>
      <div className="work-page">
        <Tabs className="tabs">
          <TabList className="tablist">
            <Tab className="tab">Input</Tab>
            <Tab className="tab">Toggle Switches</Tab>
            <Tab className="tab">Back-Grounds</Tab>
          </TabList>

          <TabPanel className="tab-panel">
            <FormWork />
          </TabPanel>
          <TabPanel className="tab-panel">
            <ModeWork />
          </TabPanel>

          <TabPanel className="tab-panel-back">
            <BackWork />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Work;
