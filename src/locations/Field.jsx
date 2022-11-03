import React from "react";
import { Paragraph } from "@contentful/f36-components";
import {
  /* useCMA, */ SDKContext,
  useSDK,
} from "@contentful/react-apps-toolkit";
import { JsonEditor } from "@contentful/field-editor-json";
import Lottie from "react-lottie-player";
import { Flex } from '@contentful/f36-components';


const Field = () => {
  const sdk = useSDK();
  sdk.window.startAutoResizer();

  console.log(sdk.field.getValue());
  console.log(sdk)
  const lottieJson = sdk.field.getValue();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return (
    <>
      <Flex justifyContent="space-around" alignItems="">
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 250, height: 250 }}
      />
      <JsonEditor field={sdk.field}></JsonEditor>
      </Flex>
    </>
    
  );
};

export default Field;
