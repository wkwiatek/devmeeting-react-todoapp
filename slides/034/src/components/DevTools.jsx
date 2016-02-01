import React from "react";
import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor />
  </DockMonitor>
);

const DevToolsMock = React.createClass({ render: () => null });
DevToolsMock.instrument = () => (next) => (reducer, initialState) => next(reducer, initialState);

if ( process.env.NODE_ENV === "production" ) {
  module.exports = DevToolsMock;
} else {
  module.exports = DevTools;
}
