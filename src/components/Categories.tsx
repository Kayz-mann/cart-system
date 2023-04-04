//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

interface Props {

}
// create a component
const Categories: React.FC = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Category Card */}
            <CategoryCard
                imgUrl='https://images.pexels.com/photos/9893121/pexels-photo-9893121.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            />
            <CategoryCard
                imgUrl='https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            />
            <CategoryCard
                imgUrl='https://images.pexels.com/photos/5717983/pexels-photo-5717983.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            />
            <CategoryCard
                imgUrl='https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            />
            <CategoryCard
                imgUrl='https://images.pexels.com/photos/9738994/pexels-photo-9738994.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            />
            <CategoryCard
                imgUrl='https://images.pexels.com/photos/10338434/pexels-photo-10338434.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            />
            <CategoryCard
                imgUrl='https://images.pexels.com/photos/12737801/pexels-photo-12737801.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            />

        </ScrollView>
    );
};



//make this component available to the app
export default Categories;
