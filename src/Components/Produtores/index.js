import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import useProdutores from '../../Hooks/useProdutores';

import Produtor from '../Pordutor';

export default function Produtores({topo: Topo}) {
  const [title, lista] = useProdutores();

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={styles.titulo}>{title}</Text>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={lista}
        ListHeaderComponent={TopoLista}
        renderItem={({item}) => <Produtor {...item} />}
        keyExtractor={({nome}) => nome}
      />
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
