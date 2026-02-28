import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, alert} from 'react-native';

export default function TelaProdutos() {
  return (
    <View style={css.container}>

    <View style={css.ifood}>
       <Image style={css.imagem_ifood} source={require('./imagens/ifood.png')}/> 
    </View>

    <View style={css.linha}> 
        <Image style={css.imagens} source={require('./imagens/confianca-1.jpg')}/>
        <Image style={css.imagens} source={require('./imagens/mcdonalds.jpg')}/>
        <Image style={css.imagens} source={require('./imagens/tauste.jpg')}/>
        <Image style={css.imagens} source={require('./imagens/kazen.png')}/>
    </View>
   
      <View style={css.lista}>
      <Pressable onPress={selecao}>
        <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text style={css.texto}>X tudo</Text>
          <Text>R$50</Text>
        </View>

      </Pressable>
        <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X tetudo</Text>
          <Text>R$150</Text>
        </View>

        <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X peitudo</Text>
          <Text>R$250</Text>
        </View>

         <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X peitudo</Text>
          <Text>R$250</Text>
        </View>

         <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X peitudo</Text>
          <Text>R$250</Text>
        </View>


         <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X peitudo</Text>
          <Text>R$250</Text>
        </View>

         <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X peitudo</Text>
          <Text>R$250</Text>
        </View>

         <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X peitudo</Text>
          <Text>R$250</Text>
        </View>


         <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X tudo</Text>
          <Text>R$250</Text>
        </View>

          <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X tudo</Text>
          <Text>R$250</Text>
        </View>

        
          <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X tudo</Text>
          <Text>R$250</Text>
        </View>

          <View style={css.produto}>
          <Image
            style={css.imagemProduto}
            source={require('./imagens/lanche.jpg')}
          />
          <Text>X tudo</Text>
          <Text>R$250</Text>
        </View>

        

        


    

      </View>

    </View>
  );
}

function selecao(){
   Alert.alert("Deseja selecionar?");
}

const css = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EA1D2C',
    
  },

  texto :{
    fontFamily: 'bold'
  },

 ifood: {
   marginTop: 50,
 },
 imagem_ifood:{
   
    height:150,
    width:250,
    marginLeft: 70,

 },
 linha:{
  flexDirection:'row',
 
 },
 imagens :{
   marginLeft: 25,
    borderRadius:60,
    width:70,
    height:80
 },

  lista: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft:15
  },

  produto: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 3
  },

  imagemProduto: {
    width: 70,
    height: 60,
    borderRadius: 10,
    marginBottom: 5
  }

});



 /*
      <View style={css.menu}>
        <Text style={css.titulo}>Lista de produtos</Text>
        <Image
          style={css.imagem}
          source={require('./imagens/lupa.png')}
        />
      </View>

        menu: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop:20,

      titulo: {
    color: '#060',
    fontSize: 18,
    fontWeight: 'bold'
  },

    
  },

    */