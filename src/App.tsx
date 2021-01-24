import { connect, ConnectedProps } from "react-redux";
import React from "react";
import "./App.css";
import { RootState } from "./app/store";
import Dashboard from "./components/Dashboard";

type ComponentProps = {};
type ComponentState = {};

const mapState = (state: RootState, props: ComponentProps) => ({});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps & ComponentProps;
type State = ComponentState;
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default connector(App);
