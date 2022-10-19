import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'

import styles from './style';



const StoreDetails = () => {
    return (
        <ScrollView style={styles.mainScrollView}>

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
                            <Text style={{fontWeight:"bold"}}>SB Han Thuyen</Text>
                            <Text>Open: 07:00 - 22:00</Text>
                        </View>
                        <FontAwesome name="heart-o" style={{fontSize:20, color:"gray"}} />
                    </View>
                </View>



                <View style={styles.storeMiniView}>
                    <View style={styles.storeMini2}>
                        <View style={styles.viewPicture}>
                            <Image source={require("./../../assets/pictures/Image.png")} style={styles.picture2} />
                        </View>
                        <Text style={styles.wordsView}>Store pickup</Text>
                        <Text style={styles.wordsView2}>Best quality</Text>
                    </View>
                    <View style={styles.storeMini}>
                        <View style={styles.viewPicture}>
                            <Image source={require("./../../assets/pictures/Image2.png")} style={styles.picture2} />
                        </View>
                        <Text style={styles.wordsView}>Delivery</Text>
                        <Text style={styles.wordsView2}>Always on time</Text>
                    </View>
                </View>

                <View style={styles.storeMiniView3}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.wordsViewNext}>Online reservation</Text>
                        <Text style={styles.wordsView2Next}>Table booking</Text>
                    </View>
                    <Image source={require("./../../assets/pictures/place2.png")} style={styles.picture2} />
                </View>

                <View style={styles.storeMiniView4}>
                    <View style={{ ...styles.lexableView2, borderBottomWidth: 1, borderBottomColor: "#C7C7C7" }}>
                        <FontAwesome name="phone" style={styles.icon2} />
                        <View>
                            <Text>Phone number</Text>
                            <Text style={{ fontWeight: "bold" }}>0909090909</Text>
                        </View>
                    </View>
                    <View style={styles.lexableView2}>
                        <Ionicons name="location" style={styles.icon1} />
                        <View>
                            <Text>Address</Text>
                            <Text style={{ fontWeight: "bold" }}>13 Han Thuyen, D.1, HCM city</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


export default StoreDetails