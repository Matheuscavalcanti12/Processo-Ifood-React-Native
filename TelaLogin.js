import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  Pressable, 
  StyleSheet 
} from 'react-native';

export default function TelaLogin() {
  return (
    <View style={[styles.container, styles.borda]}>
      
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={[styles.logo, styles.borda]}
      />

      <Text style={[styles.title, styles.borda]}>
        Bem-vindo
      </Text>

      <Text style={[styles.subtitle, styles.borda]}>
        Faça login para continuar
      </Text>

      <TextInput
        style={[styles.input, styles.borda]}
        //mostrar mensagem dentro do bloco de input 
        placeholder="Email"
        placeholderTextColor="#999"
      />

      <TextInput style={[styles.input, styles.borda]}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <Pressable style={[styles.button, styles.borda]}>
        <Text style={[styles.buttonText, styles.borda]}>
          Entrar
        </Text>
      </Pressable>

      <Text style={[styles.footerText, styles.borda]}>
        Esqueceu sua senha?
      </Text>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 50,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    backgroundColor: '#2E86DE',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#2E86DE',
  },

  borda: {
    borderWidth: 0,
  },
});