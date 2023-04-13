//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import client, { urlFor } from '../../sanity';
import { z } from 'zod';

interface Props {

}
// create a component
const Categories: React.FC = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const schema = z.any()
        schema.parse(
            client.fetch(
                `
                    *[_type == 'category']
                `
            ).then((data) => {
                setCategories(data)
            })
        )

    }, []);
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >

            {categories.map((category: any) => (
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />
            ))}
            {/* Category Card */}

            {/* <CategoryCard
                imgUrl='https://images.pexels.com/photos/5031943/pexels-photo-5031943.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                title="Testing"
            /> */}

        </ScrollView>
    );
};



//make this component available to the app
export default Categories;
