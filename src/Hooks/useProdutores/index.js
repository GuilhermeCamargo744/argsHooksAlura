import {useState, useEffect} from 'react';
import {carregaProdutores} from '../../servicos/carregaDados';

export default function useProdutores() {
  const [title, setTitle] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitle(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [title, lista];
}
