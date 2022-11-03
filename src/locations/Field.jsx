import React, { useEffect, useState } from "react";
import { Paragraph } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";
import { JsonEditor } from "@contentful/field-editor-json";
import Lottie from "react-lottie-player";
import { Flex } from "@contentful/f36-components";

const Field = () => {
  const [lottieJson, setLottieJson] = useState("");
  const sdk = useSDK();

  useEffect(() => {
    // This ensures our app has enough space to render
    sdk.window.startAutoResizer();

    // Get current value of the field so we can display it
    setLottieJson(sdk.field.getValue());
  }, [sdk.field, sdk.window]);

  useEffect(() => {
    sdk.window.startAutoResizer();

    sdk.entry.fields.animatedImage.onValueChanged((value) => {
      setLottieJson(value ? value : "");
    });
  }, [sdk.entry.fields.animatedImage, sdk.window]);

  //const lottieJson = sdk.field.getValue();
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
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 250, height: 250 }}
      />
      <JsonEditor field={sdk.field}></JsonEditor>
    </>
  );
};

export default Field;
