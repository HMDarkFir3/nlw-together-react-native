//React
import React from "react";
import { View } from "react-native";

//Styles
import { Container, UserView, Greeting, UserName, Message } from "./styles";

export default function Profile() {
  return (
    <Container>
      <View>
        <UserView>
          <Greeting>Olá,</Greeting>
          <UserName>Henrique</UserName>
        </UserView>

        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}