//스택 네비게이터에서 상단 타이틀담당

import React from 'react'
import { StyleSheet,Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    width: 300,
    height: 32,
    color: "white",
    textAlign:'center',
    fontSize:18,
  },
})

const HeaderTitle = () => <Text style={styles.text}> 이네만 쓰는 투두리스트</Text>      //가장 상위에 있는 바

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
