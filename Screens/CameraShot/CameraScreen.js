import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";

// fixing camera reloading issue
import { useIsFocused } from "@react-navigation/native";

//include all data //
export default function CameraScreen() {
  // useRef() <- does not cause the page to keep refreshing
  let cameraRef = useRef();

  // const [photo, setPhoto] = useState({
  //     photo: null,
  // })

  // re renders whenever switched to that tab
  const isFocused = useIsFocused();

  // pass new data to these variables -> then update value
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [showCamera, setShowCamera] = useState();

  const [photoUri, setPhotoUri] = useState();
  const [hasPhoto, setHasPhoto] = useState();

  // need help on understanding asynchronous function and await
  // happens after every render
  useEffect(() => {
    async function getPermissions() {
      try {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const mediaLibraryPermission =
          await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
        setHasMediaLibraryPermission(
          mediaLibraryPermission.status === "granted"
        );
      } catch (e) {
        console.log(e);
      }
    }

    getPermissions();
  }, []);

  // simulating a POSTMAN API into your server
  const upload = async (base64) => {
    try {
      console.log(base64);
      // create form data for image
      const data = new FormData();

      // convert base64 image to Blob
      const blobRes = await fetch(base64);
      // blob object
      const blob = await blobRes.blob();

      // add image blob to key pairs
      // getting the image ready for delivery to the server
      data.append("file", blob);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // post your image to a data base which is your server
      const response = await axios.post(
        "https://reciperace.herokuapp.com/upload",
        data, config
      );

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // confirming this variable -> checking if var has the value of granted
  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  // making objects that create a picture model
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    // wait until picture is taken, then create a "new photo file"
    let newPhoto = await cameraRef.current.takePictureAsync(options);

    setPhoto(newPhoto);
  };

  // if the photo is taken, choose any of these options

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    // save photo
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhotoUri(photo.uri);
        // console.log(photo)
        if (photoUri !== undefined) {
          setHasPhoto(true);
        }
        setPhoto(undefined);
        // send photo to server
        upload(photo.base64);
      });
    };

    // show the user the button to transfer the photo
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Share" onPress={sharePic} />

        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}

        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  // camera showing the option to take pic
  return (
    <>
      {isFocused ? (
        <Camera style={styles.container} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={takePic} style={styles.buttonTake}>
              <Text
                style={{
                  marginLeft: 25,

                  marginTop: 75,

                  width: 100,
                  height: 59,
                  marginBottom: 20,
                  // borderRadius: 100,
                  // borderWidth: 10,
                }}
              >
                {" "}
              </Text>
            </TouchableOpacity>
            {/* <Button style={styles.buttonStyle} title= "close" onPress={() => setShowCamera(null)} /> */}
          </View>
          <StatusBar style="auto" />
        </Camera>
      ) : null}

      {/* {hasPhoto ? <Image source = {{uri : photoUri}}/>: null} */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",

    justifyContent: "center",
    marginTop: 500,

    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 10,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  buttonStyle: {
    padding: 40,
  },
  buttonTake: {
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
});
