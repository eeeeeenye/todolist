import { Text, StyleSheet, View } from 'react-native'
import { Linking,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ImageLinking () {
	const instagram = 'https://www.instagram.com/in_out_hye___/'
    const linkedin = "https://www.linkedin.com/in/inhye-yoo-497643207/"
    const blog = "https://blog.naver.com/mayosung113"

    function openURL(url) {
        Linking.openURL(url);
    }


    return(
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => openURL(instagram)}
            >
                <Image
                style={styles.image}
                source={require(`../../assets/images/instagram.png`)}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => openURL(linkedin)}
            >
                <Image
                style={styles.image}
                source={require(`../../assets/images/linkedin.png`)}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => openURL(blog)}
            >
                <Image
                style={styles.image}
                source={require(`../../assets/images/blog.png`)}/>
            </TouchableOpacity>
        </View>
    )

    
}

const styles=StyleSheet.create({
	TouchableOpacity: {
        height:50,
        justifyContent:'center',
        margin: 10
    },
    image:{
        width:50,
        height:60,
        borderRadius:5
    },
    contentStyle: {
    	fontSize: 18,
        color: '#111111'
    }
})