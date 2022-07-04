import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import CanvasTab from "./CanvasTab";
import TabSelector from "./TabSelector";

type AppProps = {
  tab: string;
};

type AppState = {
  tabs: string[];
  selectedTab: string;
};

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const tabs = ["canvas", "other", "home"];
    this.state = {
      selectedTab: tabs.length > 0 ? tabs[0] : props.tab,
      tabs,
    };

    this.onSelectTab = this.onSelectTab.bind(this);
  }

  renderTab() {
    switch (this.state.selectedTab) {
      case "canvas":
        return <CanvasTab />;
      case "home":
        return <div>HomePage !</div>;
      default:
        return <div>DefaultPage...</div>;
    }
  }

  render() {
    return (
      <div>
        <TabSelector
          tabs={this.state.tabs}
          selectedTab={this.state.selectedTab}
          onSelectTab={this.onSelectTab}
        />
        {this.renderTab()}
      </div>
    );
  }

  onSelectTab(tabName: string) {
    this.setState({ selectedTab: tabName });
  }
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App tab="home" />);
