//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../../sanity';
import { z } from 'zod';


// create a component
const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        const schema = z.any()
        schema.parse(
            client.fetch(
                `
                    *[_type == 'featured'] {
                        ...,
                        restaurants[]->{
                            ...,
                            dishes[]->
                        }
                    }
                `
            ).then((data) => {
                setFeaturedCategories(data)
            })
        )

    }, []);



    console.log('featured cartegories::', featuredCategories)


    return (
        <SafeAreaView className="bg-white pt-10">
            <View className="flex-row  items-center px-4">
                <Text className="text-red-500 flex-1">
                    {/* Header */}
                    <View className="flex-row pb-3 items-center">
                        <Image
                            source={{ uri: 'https://links.papareact.com/wru' }}
                            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                        />

                        <View className="px-2">
                            <Text className="font-bold text-gray-400 text-xs" >Deliver Now</Text>
                            <View className='flex-row items-center' >
                                <Text className="font-bold text-xl">Current Location</Text>
                                <ChevronDownIcon size={20} color="#00CCBB" />
                            </View>
                        </View>

                    </View>

                </Text>
                <UserIcon size={35} color="#00CCBB" />

            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
                    <MagnifyingGlassIcon size={20} color="#808080" />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/*  Body */}
            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{}}
            >
                <View className='flex-1 pb-15' >
                    {/* Category */}
                    <Categories />

                    {featuredCategories?.map((category: any) => (

                        <FeaturedRow
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            description={category.short_description}
                        />
                    ))}


                    {/* <FeaturedRow id={'1'} title={'Featured'} description={'Delivery in 30 minutes'} /> */}
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default HomeScreen;
