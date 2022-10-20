import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';



const StoreDetails = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.mainScrollView}>
            <View style={styles.mainView3}>
                <View style={styles.topView}>
                    <View style={styles.topView}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Stores')
                            }} style={styles.backButton}>
                                <MaterialIcons style={{ marginEnd: 10, fontWeight: "bold", fontSize: 25 }} name='keyboard-arrow-left' />
                            </TouchableOpacity>


                        </View>
                    </View>
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

            <View style={styles.mainView2}>
                <View>
                    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
                        <View style={styles.slide1}>
                            <Image source={require("../../assets/pictures/office.png")} style={styles.pictureWrapper} />
                        </View>
                        <View style={styles.slide1}>
                            <Image source={require("../../assets/pictures/office.png")} style={styles.pictureWrapper} />
                        </View>
                        <View style={styles.slide1}>
                            <Image source={require("../../assets/pictures/office.png")} style={styles.pictureWrapper} />
                        </View>
                        <View style={styles.slide1}>
                            <Image source={require("../../assets/pictures/office.png")} style={styles.pictureWrapper} />
                        </View>

                    </Swiper>
                    <View style={styles.wrapperView}>
                        <View>
                            <Text style={{ fontWeight: "bold" }}>SB Han Thuyen</Text>
                            <Text>Open: 07:00 - 22:00</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name="heart-o" style={{ fontSize: 20, color: "gray" }} />
                        </TouchableOpacity>

                    </View>
                </View>



                <View style={styles.storeMiniView}>
                    <TouchableOpacity style={styles.storeMini2}>
                        <View >
                            <View style={styles.viewPicture}>
                                <Image source={require("./../../assets/pictures/Image.png")} style={styles.picture2} />
                            </View>
                            <Text style={styles.wordsView}>Store pickup</Text>
                            <Text style={styles.wordsView2}>Best quality</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.storeMini}>
                        <View>
                            <View style={styles.viewPicture}>
                                <Image source={require("./../../assets/pictures/Image2.png")} style={styles.picture2} />
                            </View>
                            <Text style={styles.wordsView}>Delivery</Text>
                            <Text style={styles.wordsView2}>Always on time</Text>
                        </View>
                    </TouchableOpacity>


                </View>

                <TouchableOpacity>
                    <View style={styles.storeMiniView3}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.wordsViewNext}>Online reservation</Text>
                            <Text style={styles.wordsView2Next}>Table booking</Text>
                        </View>
                        <Image source={require("./../../assets/pictures/place2.png")} style={styles.picture2} />
                    </View>
                </TouchableOpacity>




                <View style={styles.storeMiniView4}>
                    <TouchableOpacity>
                        <View style={{ ...styles.lexableView2, borderBottomWidth: 1, borderBottomColor: "#C7C7C7" }}>
                            <FontAwesome name="phone" style={styles.icon2} />
                            <View>
                                <Text>Phone number</Text>
                                <Text style={{ fontWeight: "bold" }}>0909090909</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.lexableView2}>
                            <Ionicons name="location" style={styles.icon1} />
                            <View>
                                <Text>Address</Text>
                                <Text style={{ fontWeight: "bold" }}>13 Han Thuyen, D.1, HCM city</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        </ScrollView>
    )
}


export default StoreDetails