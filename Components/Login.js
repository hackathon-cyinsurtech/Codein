
import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';



export default class Login extends Component {
    render() {
        return (
          <Container>
            <Content>
              <Form>
                <Item rounded last>
                  <Input placeholder="Username" />
                </Item>
                <Item rounded last>
                  <Input placeholder="Password" />
                </Item>
                <Button full info>
                <Text>     </Text>
                <Text>Go, Login</Text>
              </Button>
              </Form>
            </Content>
          </Container>
        );
      }
    }



