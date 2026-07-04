import React from 'react';
import type { JSX, PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type currencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>;

const currencyButton = (props: currencyButtonProps) : JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag:{
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    country: {
        fontSize: 12,
        color: '#5941f3',
    }
    });
export default currencyButton 