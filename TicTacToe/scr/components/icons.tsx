/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { PropsWithChildren } from 'react';

import Icon from '@react-native-vector-icons/fontawesome'

type IconsProps = PropsWithChildren<{
  name: string;
}>

const Icons = ({name} :IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#F7CD2E" />
     
    case 'cross':
      return <Icon name="times" size={38} color="#38CC77" />
     
    default:
      return <Icon name="pencil" size={38} color="#a19f9f" />
  }
}


export default Icons;
