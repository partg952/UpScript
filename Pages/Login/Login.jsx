import { View, Text, StyleSheet, Button } from "react-native";
import { Pressable } from "react-native";
import { useFonts } from "expo-font";
import { TextInput } from "react-native";
import {auth} from '@react-native-firebase/auth'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Dimensions } from "react-native";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { Image } from "react-native";
let customFonts = {
  Poppins: require("../../assets/fonts/Poppins-Black.ttf"),
};
GoogleSignin.configure({
  webClientId:
    "53768269746-i5vbdaljmc3qgj6pdifruodof5q0q7iq.apps.googleusercontent.com",
});
const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "50%",
    top: 0,
  },
  loginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "black",
    color: "white",
  },
  loginImageContainer: {
    // position: "absolute",
    top: 0,
    display: "flex",
    flexWrap: "wrap",
    height: Dimensions.get("screen").height * 0.4,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 0,
  },
  textFields: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    borderColor: "#3B3B3B",
    width: "100%",
    color: "white",
  },
});
export default function Login() {
  return (
    <View style={styles.loginContainer}>
      <View id="login-image-container" style={styles.loginImageContainer}>
        <Image
          resizeMode={"cover"}
          style={{ ...styles.image }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/ee3a/07dc/1eb029a746d6dec0b528b15abf349adf?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4Ju5vZvoMnJ6TJucVzeGr~LQB9rxsEDE6kKIK3ZE0rktSTKCJ4qvRUFteziMcBw1M0rIuf1mROAn4hMEtOFPdKf5DfrlQUwmBAw6sP9pw~3U5Y40P707caDM7Atf2tVPnZvu49IAFwvUSjXrlzCiFllJntW-e2dgXCEVSqzoYi6vTAAgRk13hQyF1an-ksVeXmkK1hBddwJbP6tcDi981NLumetOBiPsOYTycLFLFW1sX9-vWTrTFyKz7QHdpS5-opHW~4QIUQdzxt4d2CKnCGHdITaLpiKivDzkQsNIR6cgC7q7C1KJdzvZAQSnNNOQPJ6vdKdg0FDX5sJggAgLA__",
          }}
        />
        <Image
          resizeMethod={"cover"}
          style={styles.image}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/c6f6/b1f8/866be64fb470bc56073b24d4c1c96cbb?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ArCkTcTJXlEZ~YJR8rpsNhjuXYrdfSF-jSDOCmgLyQ9tgXWpgGU4oBgnunKvalYTejdS~kLnTJ-ui-ZvgohNg5qgCHqzOxa1~L7AYutfa1tVx55kfGsH2RL3RAFVFIzPJztKSiIPrqO-zHt8lMUaO2AsNgl58vB5Kvo4eDwvvHPxrTtoLl6fKq-YDrEKf79IYEwGuwxBbFwJ8Ifq-kFjkESeAgtGo4EDHptHJsFme9wtkwc2AEp4OoyNLfjXzMtLX8o4nGo2F4ouZ2-YyylJFYCtLpMt9LWNdhbPfpN~oLDwNeV8UCwHkLrWltS~YzQLgkFaGgsHkDyrHRVDjH4FrA__",
          }}
        />

        <Image
          resizeMode={"cover"}
          style={{
            ...styles.image,
            width: "100%",
          }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/eca9/6830/60900d0f113520c2ec1b858c650e8687?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7lceuqSJfHQTsKSxvZ1Bo6w8NwHvMj-UuPPl0nkknvlsxyELifOZxeDbgfu~Sd13k2TjyXJk29XDnkfCJm9UKUv9Ckeydn-ibhRSpzagSx2Gx1rnkzzrmRqLJl0OHqBcsZc2487518X85ICPaAEvlqm81RbqHtyW6~EkmyczR9OJ5feH4iqQ0tY-9cs6pyOyJBFVdTt0gMuzoBOptnW6FLTul4b65~Ny4h75q3lZCEGlaWPXk7vuUAwpooD0PqvdQtLbAW909lmuAh2mOeCEi6O~YA5B~8Vd5HcTkBFgfd35M6lxu13oUrfkcxuFiu9D6lYLNaDyVEjlyWWt2Vizw__",
          }}
        />
        <View
          style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            opacity: 0.6,
            marginTop: 0,
            top: 0,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 40,
              textAlign: "center",
            }}
          >
            Early detection for behavioral wellness.
          </Text>
        </View>
      </View>
      <View
        id="main-login-container"
        style={{
          backgroundColor: "transparent",
          width: Dimensions.get("screen").width,
          height: Dimensions.get("window").height * 0.6,
          marginBottom: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: 300,
            backgroundColor: "transparent",
            padding: 10,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              margin: 0,
              color: "white",
            }}
          >
            Sign In
          </Text>
          <View>
            <Text style={{ color: "white", fontFamily: "Poppins" }}>Email</Text>
            <TextInput
              style={styles.textFields}
              placeholder="Enter you Email"
              placeholderTextColor={"#696a69ba"}
            />
          </View>
          <View>
            <Text style={{ color: "white" }}>Password</Text>
            <TextInput
              style={styles.textFields}
              placeholder="Enter your password"
              placeholderTextColor={"#696a69ba"}
            />
          </View>
          <BouncyCheckBox
            text="Remember Me"
            style={{
              color: "white",
            }}
          />
          <Pressable
            style={{
              backgroundColor: "#008BFF",
              padding: 10,
              borderRadius: 10,
              width: 130,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
          </Pressable>
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            New to ScriptUp ? Sign Up Now
          </Text>
          <Text
            onPress={async () => {
              await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
              });
              const { idToken } = await GoogleSignin.signIn();
              const googleCredential = auth.GoogleAuthProvider.credential(idToken);
              auth().signInWithCredential(googleCredential).then(data => {
                console.log("user has been signed in");
              })
            }}
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Or Continue with Google
          </Text>
        </View>
      </View>
    </View>
  );
}
