import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainScrollView: {
        backgroundColor: "#F5F5F5"
    },
    mainView: {
        paddingTop: 70,
        paddingStart: 15,
        paddingEnd: 15
    },
    topView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topWord: {
        fontSize: 12,
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
    activeDot: {
        width: 25,
        height: 2,
        color: "green"
    },
    dotStyle: {
        width: 10,
        height: 2,
    },
    wrapper: {
        height: 180,
        marginTop: 15,
        padding: 15
    },
    storeMiniView: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        marginTop: 15,
        flexDirection: "row"
    },
    storeMini: {
        width: "50%",
        // flexDirection: "row",
        justifyContent: "center",
        textAlign: "center"
    },
    storeMini2: {
        width: "50%",
        // flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        borderEndWidth: 1,
        borderEndColor: "#EBEBF0"
    },
    wordsView: {
        textAlign: "center"
    },
    viewPicture: {
        flexDirection: "row",
        justifyContent: "center"
    },
    picture2: {
        width: 108
    },
    wordsView: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginTop: 7,
    },
    wordsView2: {
        fontSize: 12,
        textAlign: "center",
        color: "#808089",
        marginTop: 2,
    },
    wordsViewNext: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 7,
    },
    wordsView2Next: {
        fontSize: 12,
        color: "#808089",
        marginTop: 2,
    },
    bottomViewStore: {
        width: "60%",
        paddingTop:15
    },
    bottomViewStore2: {
        width: "60%",
        paddingEnd:20
    },
    buttonOutline: {
        borderWidth: 2,
        borderColor: "#1A94FF",
        borderRadius: 18,
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "55%",
        marginTop: 10,
        height: 50,
        marginEnd: 5
    },
    buttonOutline2: {
        borderWidth: 2,
        borderColor: "#1A94FF",
        borderRadius: 18,
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        marginTop: 10,
        height: 50
    },
    buttonWord: {
        color: "#1A94FF",
        fontSize: 14
    },
    storeMiniView2: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    storeMiniView3:{
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        borderRadius:8,
        marginTop:10
    },
    viewStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "center",
        marginTop: 15

    },
    view2: {
        width: "50%",
        marginBottom: 15
    },
    bottomWordView: {
        width: "90%"
    },
    wordsView3: {
        fontWeight: "bold"
    },
    wordsViewMini: {
        color: "#808089",
        fontSize: 10
    }
})


export default styles