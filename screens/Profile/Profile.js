import React from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {

    return (
        <ScrollView>
            <ImageBackground source={require("../../assets/pictures/backi.png")}>
                <View style={styles.profileTopView}>
                    <View style={styles.topView}>

                        <View style={styles.topRightView}>
                            <View style={styles.iconBorder}>
                                <TouchableOpacity>
                                    <Entypo name="dots-three-horizontal" color={"black"} />
                                </TouchableOpacity>

                            </View>
                            <View style={styles.iconBorder2}>
                                <TouchableOpacity>
                                    <Feather name="x" color={"black"} />
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                </View>

            </ImageBackground>

            <View style={styles.circleView}>
                <Image source={require("../../assets/pictures/c2.png")} style={styles.pictureCircle} />
            </View>
            <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 16, marginTop: 10 }}>User name</Text>



            <View style={styles.mainView}>
                <Image source={require("../../assets/pictures/point.png")} style={styles.picturePoint} />
                <View style={styles.qrCodeView}>
                    <View style={styles.qrCodeView2}>
                        <Image source={require("../../assets/pictures/qr.png")} style={styles.pictureCircle} />
                    </View>
                    <Text style={{ textAlign: "center" }}>42069-69420-42069</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.qrCodeView3}>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialIcons name="headset-mic" color={"#0B74E5"} size={30} style={{ marginEnd: 10, marginStart: 5 }} />
                            <View>
                                <Text style={{ fontWeight: "bold" }}>Support</Text>
                                <Text>Call or chat with us</Text>
                            </View>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" color={"black"} size={25} />

                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginTop: 70 }}>
                <Text style={{ color: 'blue', textDecorationLine: "underline", textAlign: "center" }}>
                    Terms and Conditions
                </Text>
            </TouchableOpacity>
            <Text style={{ textAlign: "center" }}>
                version: 1.0.0
            </Text>




        </ScrollView>
    )
}


export default Profile