// src/StartPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const Start = ({ onStartGame }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        onStartGame(data);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">Start Your Adventure</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-group">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Cart Capacity</label>
                        <input
                            type="number"
                            {...register('cartCapacity', { required: true, min: 1 })}
                            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        {errors.cartCapacity && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Starting Money</label>
                        <input
                            type="number"
                            {...register('startingMoney', { required: true, min: 1 })}
                            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        {errors.startingMoney && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Starting City</label>
                        <select
                            {...register('startingCity', { required: true })}
                            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="">Select a city</option>
                            <option value="City1">City1</option>
                            <option value="City2">City2</option>
                            <option value="City3">City3</option>
                            <option value="City4">City4</option>
                            <option value="City5">City5</option>
                        </select>
                        {errors.startingCity && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <button type="submit" className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition duration-200">
                        Start Game
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Start;
