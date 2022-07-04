import React, { Component, MouseEvent } from "react";

type TabSelectorProps = {
  tabs: string[];
  selectedTab: string;
  onSelectTab: Function;
};

export default class TabSelector extends Component<TabSelectorProps> {
  constructor(props: TabSelectorProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: MouseEvent<HTMLElement>, selectedTab: string) {
    this.props.onSelectTab(selectedTab);
  }

  render() {
    return (
      <ul className="tabSelector">
        {this.props.tabs.map((tabName: string, index: number) => {
          return (
            <li
              key={index}
              onClick={(event) => this.handleChange(event, tabName)}
              className={
                this.props.selectedTab === tabName ? "selectedTab" : ""
              }
            >
              {tabName}
            </li>
          );
        })}
      </ul>
    );
  }
}
