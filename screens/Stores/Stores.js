import React, { useEffect, useState } from 'react'
import { Text, ScrollView, View, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Stores = ({navigation}) => {
    const [data, setData] = useState([
        {
            "productName": "SB Van Hanh Mall",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB CMT8",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Han Thuyen",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Leman",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Ibis",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Golden Mansion",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB New World",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Van Hanh Mall",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Van Hanh Mall",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Van Hanh Mall",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
        {
            "productName": "SB Van Hanh Mall",
            "address": "11 Su Van Hanh, D.10, HCM city",
        },
    ]);
    const [filteringWord, setFilteringWord] = useState("")

    useEffect(() => {
        if (filteringWord.length > 0) {
            let filteringData = data.filter(v => {
                return v.productName.toLocaleLowerCase().includes(filteringWord.toLocaleLowerCase())
            });

            console.log(filteringData);
            setData(filteringData)
        } else {
            setData([
                {
                    "productName": "SB Van Hanh Mall",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB CMT8",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Han Thuyen",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Leman",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Ibis",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Golden Mansion",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB New World",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Van Hanh Mall",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Van Hanh Mall",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Van Hanh Mall",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
                {
                    "productName": "SB Van Hanh Mall",
                    "address": "11 Su Van Hanh, D.10, HCM city",
                },
            ])
        }
    }, [filteringWord])

    return (
        <ScrollView style={styles.mainScrollView}>
            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <View style={styles.topView}>
                        <View style={{ paddingStart: 15 }}>
                            <Text style={styles.topWord}>Stores</Text>
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

                <View style={styles.inputView}>
                    <TouchableOpacity>
                        <Feather name="search" color={"gray"} size={19} style={{ marginEnd: 10, marginStart: 10 }} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Search'
                        onChangeText={newText => setFilteringWord(newText)}
                        defaultValue={filteringWord}
                    />
                </View>

            </View>

            <View style={styles.mainView2}>
                <View style={styles.viewStyle}>
                    {(data.length > 0) ? (
                        data.map((value, index) => {
                            return <View key={index} >
                                <TouchableOpacity style={styles.view2}  onPress={()=>navigation.navigate("storeDetails")} >
                                    <FontAwesome5 name="store" style={styles.icon} />
                                    <View style={styles.bottomWordView}>
                                        <Text style={styles.wordsView3}>{value.productName}</Text>
                                        <Text style={styles.wordsViewMini}>{value.address}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        })
                    ) : (
                        <View >
                            <View style={{flexDirection:"row", justifyContent:"center", marginTop:25}}>
                                <Image source={require("../../assets/pictures/error.png")} style={styles.picturePoint} />
                            </View>
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>Sorry, we nearly found it!</Text>
                            <Text style={{textAlign:"center"}}>Please try again, better luck next time</Text>
                        </View>

                    )}
                </View>
            </View>
        </ScrollView>
    )
}


export default Stores