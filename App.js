import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartProvider } from "./context/CartContext.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductDetail from "./screens/ProductDetail.js";
import Products from "./screens/Products.js";
import Blogs from "./screens/Blogs.js";
import BlogDetail from "./screens/BlogDetail.js";
import Profile from "./screens/Profile.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons'; 

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#d9a64d",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#32343a",
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
          else if (route.name === "Profile") iconName = "person";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Blogs" component={Blogs} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}