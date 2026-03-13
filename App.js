import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaMenu from './TelaMenu';
import TelaProduto from './TelaProduto';
import TelaLogin from './TelaLogin';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">

        <Stack.Screen 
          name="Menu" 
          component={TelaMenu} 
          options={{ title: "Menu" }}
        />

        <Stack.Screen 
          name="Produto" 
          component={TelaProduto} 
          options={{ title: "Produtos" }}
        />

        <Stack.Screen 
          name="Login" 
          component={TelaLogin} 
          options={{ title: "Login" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*Eu corrigi seu projeto principalmente organizando a forma como as telas estavam sendo usadas na navegação. O problema principal era que, no arquivo App.js, você tinha criado funções de telas diretamente dentro dele, como TelaMenu e TelaProduto, mesmo já existindo arquivos separados para essas telas (TelaMenu.js, TelaProduto.js e TelaLogin.js). Quando isso acontece, o React Navigation utiliza as telas que estão dentro do App.js e ignora os arquivos externos. Por causa disso, quando você navegava para a tela de produtos, a interface que você havia criado em TelaProduto.js não aparecia, porque o aplicativo estava usando outra versão da tela que estava definida dentro do próprio App.js. A solução foi remover essas funções internas e importar corretamente as telas que já existiam nos arquivos separados usando import TelaMenu from './TelaMenu', import TelaProduto from './TelaProduto' e import TelaLogin from './TelaLogin'. Assim, o Stack Navigator passou a usar as telas completas que você realmente criou.

Outra correção importante foi no nome da variável usada para navegação dentro da tela de menu. No React Navigation, o objeto responsável por controlar a navegação se chama navigation, mas no seu código ele estava escrito como navegation. Como o nome estava errado, o botão que deveria levar para a tela de produtos não conseguia chamar corretamente a função de navegação. Ao corrigir para navigation, o botão passou a funcionar e levar para a tela correta.

Também foi necessário corrigir um detalhe na tela de produtos: você utilizava a função Alert.alert() para mostrar mensagens quando o usuário pressionava um produto, mas o componente Alert não estava importado no início do arquivo. Em React Native, sempre que usamos um componente ou função da biblioteca, precisamos importá-lo. Por isso foi adicionado Alert junto com os outros imports do react-native. Sem esse import, o aplicativo poderia apresentar erro quando o usuário interagisse com os produtos.

Por fim, organizei corretamente o Stack Navigator dentro do App.js, registrando todas as telas do aplicativo: Menu, Produto e Login. Isso cria a estrutura de navegação do aplicativo e permite que uma tela leve para outra quando o usuário pressiona um botão. Depois dessas correções, o fluxo do aplicativo passa a funcionar corretamente: o usuário abre o app na tela de menu, pode navegar para a tela de produtos ou para a tela de login, e cada tela mostra exatamente a interface que foi criada em seu respectivo arquivo.
//neste caso a Telaproduto exportada é a principal sendo mostrada

*/



