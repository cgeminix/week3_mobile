import { Text, View, StyleSheet, Pressable } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

//FirstScreen
/*export default function Page() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 60,
      backgroundColor: '#00CCF9',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 200,
      height: 0,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      backgroundColor: '#E3C000',
    },
    textBtn: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#000',
    },
  });

  return (
    <View style={styles.container}>
      <Svg width="140" height="140" viewBox="0 0 140 140" fill="none">
        <Circle cx="70" cy="70" r="62.5" stroke="black" strokeWidth="15" />
      </Svg>

      <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '700' }}>
        Grow {'\n'} YOUR BUSINESS.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '700' }}>
        We will help you to grow your business using{'\n'} online server.
      </Text>

      <View style={{ flexDirection: 'row', gap: 20 }}>
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>Login</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
}*/

//Bài 1_a
export default function Page() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 30,
          },
        background: {
            ...StyleSheet.absoluteFillObject, // Tạo một lớp phủ toàn màn hình
          },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: '#E3C000',
          },
        textBtn: {
            fontSize: 18,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: '#000',
          },
    });
  
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(0, 204, 249, 0.01)', '#00CCF9']}
          style={styles.background}
        />
        <Svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
          <Circle cx="71" cy="71" r="63.5" stroke="black" strokeWidth="15" />
        </Svg>
  
        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '700' }}>
          GROW {'\n'} YOUR BUSINESS.
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '700' }}>
          We will help you to grow your business using{'\n'} online server.
        </Text>
  
        <View style={{ flexDirection: 'row', gap: 35 }}>
          <Pressable style={styles.button}>
            <Text style={styles.textBtn}>Login</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.textBtn}>SignUp</Text>
          </Pressable>
        </View>
  
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginTop: 20 }}>
          HOW WE WORK?
        </Text>
      </View>
    );
}