import React, { useEffect, useState } from "react";
import { useSDK } from "@contentful/react-apps-toolkit";
import { JsonEditor } from "@contentful/field-editor-json";
import Lottie from "react-lottie-player";
import { Button } from "@contentful/f36-components";

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

    sdk.field.onValueChanged((value) => {
      setLottieJson(value ? value : "");
    });
  }, [sdk.field, sdk.window]);

  const openDialog = () => {
    sdk.dialogs
      .openCurrent({
        title: "Edit me or something",
        width: 1200,
        minHeight: 800,
        shouldCloseOnOverlayClick: true,
        shouldCloseOnEscapePress: true,
      })
      .then((data) => {
        //setValue(data);
      });
  };

  return (
    <>
      <Button variant="primary" onclick={openDialog}>
        Edit Lottie
      </Button>
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
