import { SafeAreaView, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import * as  Progress from 'react-native-progress';


const PreparingOrderScreen = (): JSX.Element => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 400)
    }, [])

    return (
        <SafeAreaView className='bg-[#00BBCC] flex-1 justify-center items-center'>
            <Animatable.Image
                source={require('../../assets/deliveroo.gif')}
                animation='slideInUp'
                iterationCount={1}
                className='h-96 w-96'
            />

            <Animatable.Text
                animation='slideInUp'
                iterationCount={1}
                className='text-lg my-10 text-white fornt-bold text-center'
            >
                Waiting for restaurant to accept your order!
            </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color='white' />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen