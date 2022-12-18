import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text } from 'react-native'
import * as Location from 'expo-location';
import { Fontisto } from '@expo/vector-icons';              // fontisto 사용
import axios from 'axios';


const DrawerMenu = ({ navigation }) => {
  const [ready,setReady] = useState(true)
  const [region,setRegion] = useState("")
  const icons = {                                           //날씨에 맞게 벡터 이미지 설정
    "Thunderstorm": "lightning",
    "Drizzle": "rains",
    "Rain": "rain",
    "Snow" : "snowflake",
    "Atmosphere": "cloudy-gusts",
    "Clear" : "day-sunny",
    "Clouds": "cloudy",
  };

  // API의 날씨를 저장해주는 변수
  const [weather, setWeather] = useState({
    temp : 0,
    condition : ''
  })
  
  useEffect(()=>{
    setTimeout(()=>{
        getLocation()
        setReady(false)
    },1000)
  },[])

  const getLocation = async () => {
    try {
      //권한 얻기 - requestPermissionAsync()
      await Location.requestPermissionsAsync();
      
      //현재 위치 정보 얻기 -> 시스템 location
      const locationData= await Location.getCurrentPositionAsync();
      const latitude = locationData['coords']['latitude']		  // 위도 가져오기
      const longitude = locationData['coords']['longitude']		// 경도 가져오기
      const location = await Location.reverseGeocodeAsync(    // 위도와 경도를 입력하면 자신의 위치를 역으로 변환
        { latitude, longitude },
        { useGoogleMaps: false }
      );

      //날씨 API 사용 -> OpenWeather
      const API_KEY = "";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      const temp = result.data.main.temp; 
      const condition = result.data.weather[0].main
      
      console.log(temp)
      console.log(condition)

      setWeather({
        temp,condition
      })

      setRegion(location[0].city);

    } catch (error) {
      Alert.alert("당신은 지금 우주입니까?.");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Fontisto name={icons[weather.condition]} size={68} color="white" style={{marginTop:10,marginLeft:10}}/>
        <Text style={{fontSize:30}}> {region}</Text>
        <Text style={{fontSize:17, matginTop:10}}> {parseFloat(weather.temp).toFixed(1)}°</Text>
        <Text style={{fontSize:20,marginBottom:10}}>{weather.condition}</Text>
    </View>
    </View>
  );
}

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

const styles = {
  container: {
    flex: 1,
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'pink'
  }
}

export default DrawerMenu
