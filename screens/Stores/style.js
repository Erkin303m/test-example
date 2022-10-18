import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainScrollView: {
        backgroundColor: "#F5F5F5"
    },
    mainView: {
        paddingTop: 70,
        paddingStart: 15,
        paddingEnd: 15,
        backgroundColor: "white",
        paddingBottom: 10
    },
    mainView2: {
        paddingStart: 15,
        paddingEnd: 15,
        paddingBottom: 10
    },
    topWord: {
        fontSize: 18,
        fontWeight: "bold"
    },
    topView: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    topWordBold: {
        fontWeight: "bold",
        fontSize: 14
    },
    topRightView: {
        padding: 5,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: 20,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    iconBorder: {
        borderEndWidth: 1,
        borderColor: "gray",
        paddingStart: 10,
        paddingEnd: 10,
    },
    iconBorder2: {
        paddingStart: 10,
        paddingEnd: 10,
    },
    inputView: {
        borderWidth: 1,
        borderColor: "#DDDDE3",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderRadius: 4,
        marginTop: 10
    },
    view2: {
        padding: 5,
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 12,
        flexDirection: "row",
    },
    icon:{
        color:"#C2C2C2",
        fontSize:20,
        marginStart:15,
        marginEnd:10,
        marginTop:3
    },
    wordsView3:{
        fontWeight:"bold"
    },
    wordsViewMini:{
        fontSize:12,
        color:"#808089"
    },
})


export default styles