import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./screens/HomeScreen.js";
import ProductDetail from "./screens/ProductDetail.js";
import Products from "./screens/Products.js";
import Blogs from "./screens/Blogs.js";
import BlogDetail from "./screens/BlogDetail.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons'; 

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Products") iconName = "pricetag";
          else if (route.name === "Blogs") iconName = "book";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Blogs" component={Blogs} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}