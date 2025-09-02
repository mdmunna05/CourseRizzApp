import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";

const IntroScreen = ({ signOut }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        // Check if email is available
        if (user?.attributes?.email) {
          const email = user.attributes.email;
          setUsername(email.split("@")[0]); // take part before @
        } else {
          // fallback to Cognito username/UUID
          setUsername(user.username);
        }
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome..! {username} 👋</Text>
      <Text style={styles.subtitle}>Let’s personalize your learning experience.</Text>
      <Button title="🚀 Start Survey" onPress={() => console.log("Survey Started")} />
      <Button title="Sign Out" onPress={signOut} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  welcome: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
});

export default IntroScreen;
