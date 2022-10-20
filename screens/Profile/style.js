import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainScrollView: {
        backgroundColor: "#F5F5F5"
    },
    mainView: {
        paddingStart: 15,
        paddingEnd: 15,
        paddingTop: 20
    },
    picturePoint: {
        width: "100%",
        height: 180,
        borderRadius: 10
    },
    topView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        paddingEnd: 15
    },
    topWordBold: {
        fontWeight: "bold",
        fontSize: 14
    },
    topRightView: {
        padding: 5,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
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
    profileTopView: {
        paddingTop: 60,
        paddingBottom: 30
    },
    circleView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -25
    },
    qrCodeView: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        marginTop: 15

    },
    qrCodeView3: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    qrCodeView2: {
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 10

    },
})


export default styles