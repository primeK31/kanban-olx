'use client';

import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { createProduct } from '../services/productsService';
import Heads from '../components/header';
import Foots from '../components/footer';


const PostProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const queryClient = useQueryClient();


    const create = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const product = {
                title,
                price: parseFloat(price),
                category,
                description
            };
            const response = await createProduct(product);
            await queryClient.invalidateQueries('products');
            window.location.href = '/';
        } catch (error) {
            if (error instanceof Error) console.log(error)
        }
    };

    return (
        <div className="text-center">
            <Heads />
            <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto mx-10 p-10 w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
                <form onSubmit={create} className="justify-center content-center text-center">
                    <h1 className="m-10">CREATE KANBAN</h1>

                    <div className="">
                        <div>
                            <label className="m-10">Name: </label> <br />
                            <input type="text" onChange={(content) => setTitle(content.target.value)} className="text-black" required />
                        </div>
                        <div>
                            <label className="m-10">Price: </label> <br />
                            <input type="text" onChange={(content) => setPrice(content.target.value)} className="text-black"
                                required />
                        </div>
                        <div>
                            <label className="m-10">Category: </label> <br />
                            <input type="text" onChange={(content) => setCategory(content.target.value)} className="text-black"
                                required />
                        </div>
                        <div>
                            <label className="m-10">Description: </label> <br />
                            <textarea 
                                onChange={(content) => setDescription(content.target.value)}
                                className="text-black"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-900 text-white font-bold py-2 px-5 rounded m-15">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Foots />
        </div>
    );
};

export default PostProductForm;