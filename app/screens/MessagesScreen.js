import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import Icon from "../components/Icon";

const initialMessages = [
  {
    id: 1,
    title: "Ahmad Khan",
    description: "Hey is this item still Available?",
    image: require("../assets/daniyal.jpg"),
  },
  {
    id: 2,
    title: "Abdullah",
    description:
      "Hi! I'm interested in this item. When will you be abel to post this ? ",
    image: require("../assets/daniyal.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            // IconComponent={<Icon name="email" />}
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...messages,
            {
              id: messages[messages.length - 1].id + 1,
              title: "T3",
              description: "D3",
              image: require("../assets/daniyal.jpg"),
            },
          ]);
          console.log(messages);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
