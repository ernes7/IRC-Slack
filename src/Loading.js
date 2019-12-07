import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const Loading = () => (
  <Dimmer>
    <Loader size="huge" content={"Preparing IRC..."} />
  </Dimmer>
);

export default Loading;
