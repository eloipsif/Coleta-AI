import {StatusBar} from'expo-status-bar';

import React from'react';

//import Opcao from './src/Pages/Opcao/opcao';
//import Login from './src/Pages/Login';
import Routes from './src/Pages/routes';

export default function App() {
 
  return (
    <>
    <StatusBar style = "dark" backgroundColor = "transparent" translucent/>
      <Routes/>
      </>
  );
}
