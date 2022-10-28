import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from './categories';

export const Category = () => {
    const { type } = useParams();
    // console.log(type);
    return (
        <Categories props={type}/>
    )
}
