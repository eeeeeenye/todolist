import React from 'react'
import PropTypes from 'prop-types'                        //PropsTypes는 부모로부터 받은 prop의 데이터 type를 검사한다.
import { StyleSheet } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const HeaderLeft = ({ navigation }) => (
  <FontIcon.Button
    name="bars"
    color="white"
    backgroundColor="transparent"
    onPress={() => {
      navigation.openDrawer()                             //상단 왼쪽 버튼을 누르면 Drawer Navigation이 열림
    }}
    style={styles.button}
  />
)

HeaderLeft.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
}

HeaderLeft.defaultProps = {
  navigation: { openDrawer: () => null },
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
})

export default HeaderLeft
