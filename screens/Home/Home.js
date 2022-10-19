import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Swiper from 'react-native-swiper'
import styles from './style';

const Products = [
    {
        "picture": require('../../assets/pictures/Image3.png'),
        "name": "Discount all Excelsa 20% in all stores",
        "date": "20/04/20 - 06/09/2020",
    },
    {
        "picture": require('../../assets/pictures/Image4.png'),
        "name": "Discount all Excelsa 20% in all stores",
        "date": "20/04/20 - 06/09/2020",
    },
    {
        "picture": require('../../assets/pictures/Image5.png'),
        "name": "Discount all Excelsa 20% in all stores",
        "date": "20/04/20 - 06/09/2020",
    },
    {
        "picture": require('../../assets/pictures/Image3.png'),
        "name": "Discount all Excelsa 20% in all stores",
        "date": "20/04/20 - 06/09/2020",
    },
];

const Home = () => {
    return (
        <ScrollView style={styles.mainScrollView}>
            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <View style={styles.topView}>
                        <Image source={require("./../../assets/pictures/Circle.png")} style={styles.rasm} />
                        <View style={{ paddingStart: 15 }}>
                            <Text style={styles.topWord}>Welcome to</Text>
                            <Text style={styles.topWordBold}>Sample restaurant</Text>
                        </View>
                    </View>
                    <View style={styles.topRightView}>
                        <Text>
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
                        </Text>

                    </View>
                </View>


                <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true} activeDotStyle={styles.activeDot} dotStyle={styles.dotStyle}>
                    <View style={styles.slide1}>
                        <Image source={require("../../assets/pictures/L.png")} style={styles.rasm} />

                    </View>
                    <View style={styles.slide1}>
                        <Image source={require("../../assets/pictures/L.png")} style={styles.rasm} />

                    </View>
                    <View style={styles.slide1}>
                        <Image source={require("../../assets/pictures/L.png")} style={styles.rasm} />

                    </View>
                    <View style={styles.slide1}>
                        <Image source={require("../../assets/pictures/L.png")} style={styles.rasm} />

                    </View>

                </Swiper>

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
                    <View style={styles.bottomViewStore}>
                        <Text style={styles.wordsViewNext}>Online reservation</Text>
                        <Text style={styles.wordsView2Next}>Table booking</Text>
                    </View>
                    <View style={styles.bottomViewStore2}>
                        <View style={styles.viewPicture}>
                            <Image source={require("./../../assets/pictures/place2.png")} style={styles.picture2} />
                        </View>
                    </View>
                </View>


                <View style={styles.storeMiniView2}>
                    <View style={styles.buttonOutline}>
                        <MaterialIcons name="date-range" color={"#1A94FF"} style={{ marginEnd: 5, fontSize: 18 }} />
                        <Text style={styles.buttonWord}>Reserve a table</Text>
                    </View>
                    <View style={styles.buttonOutline2}>

                        <Text style={styles.buttonWord}>My reservations</Text>
                    </View>
                </View>


                <Text style={styles.wordsViewNext}>Promotion campaign</Text>

                <View style={styles.viewStyle}>
                    {Products.map((value, index) => {
                        return <View key={index} style={styles.view2}>
                            <TouchableOpacity>
                                <Image source={value.picture} />
                                <View style={styles.bottomWordView}>
                                    <Text style={styles.wordsView3}>{value.name}</Text>
                                    <Text style={styles.wordsViewMini}>{value.date}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    })}
                </View>
            </View>
        </ScrollView>
    )
}


export default Home