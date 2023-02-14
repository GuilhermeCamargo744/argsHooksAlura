import React, {useState} from 'react';
import {View} from 'react-native';
import Estrela from '../Estrela';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
          key={i}
        />,
      );
    }
    return listaEstrelas;
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <RenderEstrelas />
    </View>
  );
}
