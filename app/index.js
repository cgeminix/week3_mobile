import { Text, View, StyleSheet, Pressable } from 'react-native';
import Svg, { Circle } from 'react-native-svg'; // Import các thành phần SVG từ react-native-svg

//FirstScreen
export default function Page() {
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
        <Circle cx="70" cy="70" r="62.5" stroke="black" strokeWidth="15" /> {/* Sửa stroke-width thành strokeWidth */}
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
}