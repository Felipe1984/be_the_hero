import React from 'react';

import Routes from './src/routes'

export default function App() {
  return (
    <Routes />
  );
}

/**
 * <div> <span> <p> <h1> - no react native não exitem
 * <View> funciona como container substituindo div footer header entre outros containers
 * 
 * as tags não têm semântica
 * não tem herança de estilos, formatações de textos devem ser passadas diretamente ao container
 * 
 */