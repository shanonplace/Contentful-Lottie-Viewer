import React from "react";
import { Paragraph } from "@contentful/f36-components";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";

const Dialog = () => {
  const sdk = useSDK();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  console.log(sdk.parameters.invocation.data);
  return (
    <Paragraph>
      Json is {JSON.stringify(sdk.parameters.invocation.data)}
    </Paragraph>
  );
};

export default Dialog;
