import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/Form";
// import AppForm from "../components/Form/AppForm";
// import AppFormField from "../components/Form/AppFormField";
// import SubmitButton from "../components/Form/SubmitButton";

import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  // const [email, setEmail] = useState();
  // const [password, setpassword] = useState();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    console.log(email + password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    console.log(result.data);
  };

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password !"
            visible={loginFailed}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            iconName="email"
            placeholder="Email"
          />
          {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
          {/* <AppText style={{ color: "red" }}>{errors.email}</AppText> */}

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            iconName="lock"
            placeholder="Password"
            secureTextEntry={true}
          />
          {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
          {/* <AppText style={{ color: "red" }}>{errors.password}</AppText> */}

          <SubmitButton title="Login" />
          {/* <AppButton title="Login" onPress={handleSubmit} /> */}
        </AppForm>

        {/* <View style={styles.inputs}>
                //Here was the Text Inputs and Button
        </View> */}
      </Screen>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 15,
  },
});
export default LoginScreen;
