import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';

export default function TelaMenu({ navigation }) {
  return (
    <View style={css.container}>
    <View style={css.menu}>

        <TouchableOpacity
          style={css.botao}
          onPress={() => navigation.navigate("Produto")}
        >
          <Text style={css.textoBotao}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.botao}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={css.textoBotao}>Perfil</Text>
        </TouchableOpacity>

      </View>

      <View style={css.ifood}>
        <Image 
          style={css.imagem_ifood} 
          source={require('./imagens/ifood.png')} 
        />
      </View>
    
    <View style={css.linha}>
      <Image style={css.imagemProduto} source={require('./imagens/sub.png')} />
      <Image style={css.imagemProduto} source={require('./imagens/chiquinho.webp')} />
      <Image style={css.imagemProduto} source={require('./imagens/jikan.moe.png')} />
      <Image style={css.imagemProduto} source={require('./imagens/k.jpg')} />
    
    </View>

  <View>
     <Text style={css.texto}>Lojas</Text>
  </View>

<ScrollView>
  <View style={css.linha}>
    <Image style={css.imagemProduto} source ={require('./imagens/oki.jpg')} /><Text style={css.textoLoja}>Pastelaria Okinawa</Text>
  </View>

   <View style={css.linha}>
    <Image style={css.imagemProduto} source ={require('./imagens/cama.jpg')} /><Text style={css.textoLoja}>Camarão Express</Text>
  </View>

   <View style={css.linha}>
    <Image style={css.imagemProduto} source ={require('./imagens/chiquinho.webp')} /><Text style={css.textoLoja}>Chiquinho sorvetes</Text>
  </View>

    <View style={css.linha}>
    <Image style={css.imagemProduto} source ={require('./imagens/jikan.moe.png')} /><Text style={css.textoLoja}>Jikan Poke</Text>
  </View>

    <View style={css.linha}>
    <Image style={css.imagemProduto} source ={require('./imagens/k.jpg')} /><Text style={css.textoLoja}>KFC</Text>
  </View>

</ScrollView>

    </View>
  );
}

const css = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EA1D2C',
  },

  menu:{
    flexDirection:"row",
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    gap:40
  },

  botao:{
    backgroundColor:"rgb(139,0,0)",
    padding:10,
    borderRadius:8
  },

  textoBotao:{
    color:"#fff",
    fontSize:16,
    fontFamily:"Arial"
  },

  imagem_ifood:{
    height:150,
    width:150,
    marginLeft:130
  },
   linha:{
  flexDirection:'row',
  alignItems: "center",
  gap:20
 
 },
 imagemProduto: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginLeft:20,
    marginBottom:20
  },
  texto:{
    fontSize: 30,
    Color:"#000",
    padding:20,
    fontWeight: "bold"
  },
  textoLoja:{
    fontSize:20,
    fontFamily: "Sul Sans"
  }
});

/*   <View style={css.menu}>

        <TouchableOpacity
          style={css.botao}
          onPress={() => navigation.navigate("Produto")}
        >
          <Text style={css.textoBotao}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={css.botao}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={css.textoBotao}>Perfil</Text>
        </TouchableOpacity>

      </View>*/