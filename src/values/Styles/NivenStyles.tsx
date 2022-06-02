import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {platform} from "../Constants/NivenConstants";
import {ThemeContext} from "../../contexts/ThemeContext";

export const shadowStyle = {
    shadowColor: ThemeContext?.nivenColors?.shadowColor,
    shadowOffset: {
        width: 1,
        height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
};

export const lineStyle = {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: ThemeContext?.nivenColors?.lineColor,
    marginVertical: 10,
};

export const pageContainerStyle = {
    marginHorizontal: wp("1%"),
    marginVertical: hp("1%"),
    paddingHorizontal: 5,
    flex: 1
};

//Global padding
export const gPadding = wp("3.5%");

export const categoryStyleWithoutShadow = {
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("2%"),
};

// image background style
export const pageContainerIBGStyle = {
    padding: wp("5%"),
    paddingTop: wp("1%"),
    flex: 1,
};

export const cardStyle = Object.assign({}, shadowStyle, {
    borderRadius: 10,
    alignItems: "center",
    margin: platform === "android" ? 2 : 0
});

export const fontFamily = {
    // bold: "bold",
    // medium: "Poppins-Medium",
    // regular: "Poppins-Regular",
    // light: "Poppins-Light",
    // semiBold: "Poppins-SemiBold"
};

export const borderStyle = {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#eee6e6",
    borderRadius: 5
};

export const activeButton = {
    button: {
        backgroundColor: ThemeContext?.nivenColors?.mainColor,
        alignItems: "center",
        height: hp("5%"),
        width: wp("30%"),
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: hp("1.8%"),
        fontWeight: "bold",
        textAlign: "center"
    }
};

export const passiveButton = {
    button: {
        backgroundColor: "white",
        alignItems: "center",
        height: hp("5%"),
        width: wp("30%"),
        justifyContent: "center"
    },
    text: {
        color: ThemeContext?.nivenColors?.mainColor,
        fontSize: hp("1.8%"),
        fontWeight: "bold",
        textAlign: "center"
    }
};

// snap carousel pagination style
export const paginationStyle = {
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 5
    },
    passiveDot: {

    },
    inactiveDotOpacity: 0.4,
    inactiveDotScale: 0.6,
    container: {
        paddingVertical: 0,
        marginTop: hp(0.8)
    }
};
