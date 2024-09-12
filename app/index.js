import { Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import Svg, { Circle ,Path, ClipPath, Defs, Rect, G} from 'react-native-svg';
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
/*export default function Page() {
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
}*/

//Bài 1_b
/*export default function Page(){
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 30,
        },
        background: {
          ...StyleSheet.absoluteFillObject,
        },
        input: {
          flexDirection: 'row',
          height: 45,
          width: 305,
          backgroundColor: '#C4C4C4',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        textInput: {
          color: '#000',
          fontSize: 15,
          fontWeight: '400',
          flex: 1,
        },
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          paddingHorizontal: 30,
          width: 305,
          height: 45,
          backgroundColor: '#E3C000',
        },
        textBtn: {
          color: '#000',
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
        },
      });
    
      return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0, 204, 249, 0.01)', '#00CCF9']} // Bạn có thể điều chỉnh màu sắc theo nhu cầu
                style={styles.background}
            />
    
            <Svg xmlns="http://www.w3.org/2000/svg" width="105" height="117" viewBox="0 0 105 117" fill="none">
                <Defs>
                <ClipPath id="clip0_6_2">
                    <Rect width="105" height="117" fill="white"/>
                </ClipPath>
                </Defs>
                <G clipPath="url(#clip0_6_2)">
                <Path opacity="0.98" d="M52.5438 0.0380249C52.077 0.0417944 51.6099 0.0459452 51.1427 0.0613999C29.6933 0.168452 10.4489 15.0838 10.3944 31.9016C10.1517 35.8659 10.4651 39.8333 10.4093 43.7991H0.0751185C0.348828 61.2238 -0.481917 78.6892 0.511978 96.089C2.65031 107.293 15.5163 117.425 30.5197 116.88C46.9471 116.855 63.4255 117.277 79.8239 116.621C95.2178 114.547 106.028 102.186 104.861 90.2228C105.038 74.7525 104.844 59.2819 104.921 43.8132C101.492 43.7447 98.0614 43.8656 94.6321 43.7778C94.8924 34.3579 95.4589 24.0609 88.5916 15.8955C81.1651 6.20574 67.0115 -0.0323329 52.5432 0.0404176L52.5438 0.0380249ZM52.7395 13.4905C64.9263 13.621 76.967 21.513 76.616 31.4425C76.858 35.5595 77.0192 39.6787 77.1283 43.7991C60.7332 43.7916 44.3386 43.8191 27.9445 43.7754C27.9955 37.3304 25.7836 30.2834 30.2945 24.4807C34.3903 18.3323 42.5772 13.6273 51.5651 13.5021C51.9581 13.4901 52.3469 13.4859 52.7401 13.4905H52.7395Z" fill="white"/>
                <Path opacity="0.98" d="M51.4831 2.29934C30.2102 2.71805 13.2506 16.258 13.2506 32.997V46.0488H2.9617V90.4341H2.97665C2.9617 90.7547 2.9617 91.0761 2.9617 91.4C2.9617 104.29 15.0376 114.665 30.0468 114.665H74.9229C89.9321 114.665 102.023 104.29 102.023 91.4C102.023 91.0762 102.008 90.7546 101.993 90.4341H102.023V46.0488H91.7494V32.997C91.7494 15.9926 74.2533 2.29934 52.5075 2.29934C52.1677 2.29934 51.8208 2.29256 51.4831 2.29934ZM51.3023 11.2518C51.5605 11.2469 51.8261 11.2518 52.0857 11.2518C64.5178 11.0247 76.7373 18.2166 79.2763 27.7665C79.7086 33.8602 79.952 39.949 80.0898 46.0484H24.9864C24.9734 43.1319 24.9561 40.2223 24.8811 37.3078C21.7343 24.8365 35.0403 11.5503 51.3033 11.2514L51.3023 11.2518ZM52.4472 62.2827C53.0338 62.2827 53.6269 62.3185 54.2248 62.3887C60.6023 63.1368 65.0035 67.7794 64.0466 72.7664C63.6061 75.0627 62.0912 77.0387 59.9793 78.4206L64.0617 98.4341H40.9232L44.9905 78.4206C41.9818 76.4447 40.3127 73.3182 40.9382 70.0569C41.8053 65.5373 46.7768 62.2944 52.4472 62.2824V62.2827Z" fill="black"/>
                </G>
            </Svg>
    
            <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '700' }}>
                FORGET{'\n'}PASSWORD
            </Text>
        
            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '700' }}>
                Provide your account{'`'}s email for which you{'\n'} want to reset your password
            </Text>
        
            <View style={styles.input}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="48" height="45" viewBox="0 0 48 45" fill="none">
                    <Defs>
                    <ClipPath id="clip0_7_7">
                        <Rect width="48" height="45" fill="white"/>
                    </ClipPath>
                    </Defs>
                    <G clipPath="url(#clip0_7_7)">
                    <Path fillRule="evenodd" clipRule="evenodd" d="M0 0H48V45H0V0Z" fill="#C4C4C4"/>
                    <Path d="M13.3334 14.6653H34.6667C34.9134 14.6653 35.1129 14.8524 35.1129 15.0787V29.9213C35.1129 30.1476 34.9134 30.3346 34.6667 30.3346H13.3334C13.0867 30.3346 12.8872 30.1476 12.8872 29.9213V15.0787C12.8872 14.8524 13.0867 14.6653 13.3334 14.6653ZM34.2205 15.497H13.7796V29.5029H34.2205V15.497Z" fill="#011627"/>
                    <Path d="M13.0184 15.374C12.8452 15.2116 12.8452 14.9508 13.0184 14.7884C13.1916 14.626 13.4698 14.626 13.6483 14.7835L24.315 24.7835C24.4882 24.9459 24.4882 25.2067 24.315 25.3691C24.1418 25.5315 23.8635 25.5315 23.6851 25.374L13.0184 15.374Z" fill="#011627"/>
                    <Path d="M34.3517 14.7835C34.5302 14.626 34.8084 14.626 34.9817 14.7884C35.1549 14.9508 35.1549 15.2116 34.9817 15.374L24.315 25.374C24.1418 25.5315 23.8583 25.5315 23.6851 25.3691C23.5118 25.2067 23.5118 24.9459 23.6903 24.7835L34.3517 14.7835Z" fill="#011627"/>
                    </G>
                </Svg>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#000"
                    style={styles.textInput}
                />
            </View>
        
            <Pressable style={styles.button}>
                <Text style={styles.textBtn}>NEXT</Text>
            </Pressable>
        </View>
    );
}*/

//Bài 1_c
/*export default function Page() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25
      },
      background: {
        ...StyleSheet.absoluteFillObject,
      },
      pan: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        width: 360
      },
      border: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderColor: '#000',
        backgroundColor: 'rgba(196, 196, 196, 0.00)',
        margin: 2
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        width: 305,
        height: 45,
        backgroundColor: '#E3C000'
      },
      textBtn: {
        color: '#000',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
      }
    });
  
    return (
      <View style={styles.container}>
        <LinearGradient
            colors={['rgba(0, 204, 249, 0.01)', '#00CCF9']} // Bạn có thể điều chỉnh màu sắc theo nhu cầu
            style={styles.background}
        />
        
        <Text style={{ textAlign: 'center', fontSize: 60, fontWeight: 'bold' }}>
          CODE
        </Text>
        
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
          VERIFICATION
        </Text>
        
        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>
          Enter one-time password sent to {'\n'}++849092605798
        </Text>
        
        <View style={styles.pan}>
          <View style={styles.border} />
          <View style={styles.border} />
          <View style={styles.border} />
          <View style={styles.border} />
          <View style={styles.border} />
          <View style={styles.border} />
        </View>
        
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>
            VERIFY CODE
          </Text>
        </Pressable>
      </View>
    );
}*/

//Bài 1_d
/*export default function Page(){
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(49, 170, 82, 0.19)',
          gap: 30
        },
        input: {
          flexDirection: 'row',
          height: 45,
          width: 305,
          backgroundColor: 'rgba(196, 196, 196, 0.30)',
          borderRadius: 5,
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        textInput: {
          fontSize: 18,
          fontWeight: '600',
          flex: 1,
        },
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          paddingHorizontal: 30,
          width: 305,
          height: 45,
          backgroundColor: '#E53935',
          marginTop: 20,
          borderRadius: 5,
        },
        textBtn: {
          color: '#FFF',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold'
        },
        textOut: {
          color: '#000',
          fontSize: 14,
          fontWeight: '500',
          marginTop: -10
        },
        pan: {
          flexDirection: 'row',
          justifyContent: 'center',
          height: 54,
          width: 300
        },
        borderFace: {
          height: 45,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#003399'
        },
        borderZalo: {
          height: 45,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0099CC'
        },
        borderGoogle: {
          height: 45,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#0099CC',
        },
        textBorder: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 35
        },
    });
     return(
        <View style={styles.container}>
        <Text style={{ alignContent: 'center', fontWeight: 'bold', fontSize: 25, marginBottom: 20 }}>
          LOGIN
        </Text>
  
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={styles.textInput}
          />
        </View>
  
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#000"
            style={styles.textInput}
          />
          <Svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36" fill="none" style={{ paddingLeft: 150, paddingTop: 5 }}>
            <G clipPath="url(#clip0_12_116)">
              <Path d="M19 13.0909C16.1414 13.0909 13.8182 15.2918 13.8182 18C13.8182 20.7082 16.1414 22.9091 19 22.9091C21.8587 22.9091 24.1819 20.7082 24.1819 18C24.1819 15.2918 21.8586 13.0909 19 13.0909Z" fill="black" />
              <Path d="M19 5.72729C10.3636 5.72729 2.98821 10.8163 0 18C2.98821 25.1836 10.3636 30.2728 19 30.2728C27.645 30.2728 35.0119 25.1836 38.0001 18C35.0119 10.8163 27.645 5.72729 19 5.72729ZM19 26.1818C14.2328 26.1818 10.3636 22.5163 10.3636 18C10.3636 13.4836 14.2328 9.81818 19 9.81818C23.7673 9.81818 27.6364 13.4837 27.6364 18C27.6364 22.5164 23.7673 26.1818 19 26.1818Z" fill="black" />
            </G>
            <Defs>
              <ClipPath id="clip0_12_116">
                <Rect width="38" height="36" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
  
        <Pressable style={styles.button}>
          <Text style={styles.textBtn}>
            LOGIN
          </Text>
        </Pressable>
  
        <Text style={styles.textOut}>
          When you agree to terms and conditions
        </Text>
        <Text style={{ color: '#5D25FA', justifyContent: 'center', marginTop: -20, marginBottom: -8 }}>
          Forgot your password?
        </Text>
        <Text style={styles.textOut}>
          Or login with
        </Text>
  
        <View style={styles.pan}>
          <View style={styles.borderFace}>
            <Text style={styles.textBorder}>
              f
            </Text>
          </View>
          <View style={styles.borderZalo}>
            <Text style={styles.textBorder}>
              Z
            </Text>
          </View>
           <View style={styles.borderGoogle}>
             <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
               <path d="M8.20312 17.5C8.20312 15.7659 8.68089 14.1415 9.51091 12.7506V6.85065H3.61095C1.2693 9.89182 0 13.5982 0 17.5C0 21.4018 1.2693 25.1082 3.61095 28.1494H9.51091V22.2494C8.68089 20.8585 8.20312 19.2341 8.20312 17.5Z" fill="#FBBD00"/>
               <path d="M17.5 26.7969L13.3984 30.8985L17.5 35C21.4019 35 25.1082 33.7307 28.1494 31.3891V25.4954H22.2557C20.8526 26.3284 19.2214 26.7969 17.5 26.7969Z" fill="#0F9D58"/>
               <path d="M9.51092 22.2494L3.61096 28.1494C4.07458 28.7515 4.57941 29.3281 5.12567 29.8744C8.43098 33.1796 12.8256 35 17.5 35V26.7969C14.1077 26.7969 11.1346 24.9703 9.51092 22.2494Z" fill="#31AA52"/>
               <path d="M35 17.5C35 16.4353 34.9036 15.3686 34.7134 14.3297L34.5596 13.489H17.5V21.6921H25.8024C24.9962 23.2959 23.7565 24.6043 22.2556 25.4955L28.1493 31.3891C28.7514 30.9255 29.328 30.4207 29.8743 29.8744C33.1797 26.569 35 22.1744 35 17.5Z" fill="#3C79E6"/>
               <path d="M24.0739 10.9261L24.7989 11.6511L30.5994 5.85067L29.8744 5.12565C26.5691 1.82034 22.1745 0 17.5 0L13.3984 4.10156L17.5 8.20312C19.9832 8.20312 22.3179 9.17014 24.0739 10.9261Z" fill="#CF2D48"/>
               <path d="M17.5 8.20312V0C12.8256 0 8.43099 1.82034 5.12561 5.12559C4.57935 5.67185 4.07451 6.24846 3.6109 6.85063L9.51086 12.7506C11.1346 10.0297 14.1078 8.20312 17.5 8.20312Z" fill="#EB4132"/>
             </svg>
           </View>
         </View>
       </View>
     )
}*/

//Bài 1_e
export default function Page(){
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(49, 170, 82, 0.19)',
            gap: 25
        },
        input: {
            flexDirection: 'row',
            height: 45,
            width: 360,
            backgroundColor: 'rgba(196, 196, 196, 0.30)',
            borderRadius: 5,
            alignItems: 'center',
            paddingHorizontal: 10,
        },
        textInput: {
            fontSize: 18,
            fontWeight: '600',
            flex: 1,
        },
        textRadio: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
            paddingHorizontal: 20
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 30,
            width: 360,
            height: 45,
            marginBottom: -15,
            backgroundColor: '#E53935',
            borderRadius: 5,
        },
        textBtn: {
            color: '#FFF',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold'
        },
        pan: {
            flexDirection: 'row',
            justifyContent: 'center',
            height: 25,
            width: 360,
            marginBottom: -10
        },
        radioContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        radioButton: {
            width: 23,
            height: 23,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
            marginLeft: 10
        },
        radioText: {
            fontSize: 18,
            fontWeight: '600',
            marginLeft: 10
        }
      });
    
    return (
        <View style={styles.container}>
            <Text style={{ alignContent: 'center', fontWeight: 'bold', fontSize: 25 }}>
                REGISTER
            </Text>
          
            <View style={styles.input}>
                <TextInput
                placeholder="Name"
                placeholderTextColor="#000"
                style={styles.textInput}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder="Phone"
                placeholderTextColor="#000"
                style={styles.textInput}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder="Email"
                placeholderTextColor="#000"
                style={styles.textInput}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder="Password"
                placeholderTextColor="#000"
                secureTextEntry
                style={styles.textInput}
                />
                <Svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36" fill="none" style={{ paddingLeft: 150, paddingTop: 5 }}>
                <G clipPath="url(#clip0_12_116)">
                    <Path d="M19 13.0909C16.1414 13.0909 13.8182 15.2918 13.8182 18C13.8182 20.7082 16.1414 22.9091 19 22.9091C21.8587 22.9091 24.1819 20.7082 24.1819 18C24.1819 15.2918 21.8586 13.0909 19 13.0909Z" fill="black" />
                    <Path d="M19 5.72729C10.3636 5.72729 2.98821 10.8163 0 18C2.98821 25.1836 10.3636 30.2728 19 30.2728C27.645 30.2728 35.0119 25.1836 38.0001 18C35.0119 10.8163 27.645 5.72729 19 5.72729ZM19 26.1818C14.2328 26.1818 10.3636 22.5163 10.3636 18C10.3636 13.4836 14.2328 9.81818 19 9.81818C23.7673 9.81818 27.6364 13.4837 27.6364 18C27.6364 22.5164 23.7673 26.1818 19 26.1818Z" fill="black" />
                </G>
                <Defs>
                    <ClipPath id="clip0_12_116">
                    <Rect width="38" height="36" fill="white" />
                    </ClipPath>
                </Defs>
                </Svg>
            </View>
            <View style={styles.input}>
                <TextInput
                placeholder="Birthday"
                placeholderTextColor="#000"
                style={styles.textInput}
                />
            </View>
            
            <View style={styles.pan}>
                <View style={styles.radioContainer}>
                <View style={styles.radioButton}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <Circle cx="11.5" cy="11.5" r="10.5" stroke="black" strokeWidth="2" />
                    </Svg>
                </View>
                <Text style={styles.radioText}>
                    Male
                </Text>
                </View>
                <View style={styles.radioContainer}>
                <View style={styles.radioButton}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <Circle cx="11.5" cy="11.5" r="10.5" stroke="black" strokeWidth="2" />
                    </Svg>
                </View>
                <Text style={styles.radioText}>
                    Female
                </Text>
                </View>
            </View>
            
            <Pressable style={styles.button}>
                <Text style={styles.textBtn}>
                REGISTER
                </Text>
            </Pressable>
        
            <Text style={{ justifyContent: 'center', fontSize: 14, fontWeight: '500' }}>
                When you agree to terms and conditions
            </Text>
            </View>
    );
}