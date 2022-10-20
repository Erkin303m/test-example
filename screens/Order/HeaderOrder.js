import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const HeaderOrder = () => {
    const navigation = useNavigation(); 

    return (
        <View>
            <View style={styles.topView}>
                <View style={styles.topView}>
                    <View style={{ paddingStart: 10 }}>
                        <Text style={styles.topWord}>Order</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('orderHistory')
                }}>
                    <FontAwesome5 name="history" color={"black"} size={20} style={{ marginEnd: 5 }} />
                </TouchableOpacity>

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
    )
}

export default HeaderOrder





