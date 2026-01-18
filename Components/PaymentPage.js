"use client"
import React, { useState } from 'react'

const PaymentPage = ({ username }) => {
    const [paymentForm, setPaymentForm] = useState({ name: '', message: '', amount: '' })

    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    }

    const handlePresetAmount = (amount) => {
        setPaymentForm({ ...paymentForm, amount: amount })
    }

    return (
        <div className='make-payment w-1/2 bg-slate-900 p-4 rounded-lg'>
            <h2 className='text-2xl font-bold text-white'>Make Payment</h2>
            <form action="/api/checkout_sessions" method="POST" className='flex flex-col gap-2'>
                <input
                    type="text"
                    name="name"
                    value={paymentForm.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                    className='w-full p-2 rounded-lg my-2 border-2 border-gray-300'
                />
                <input
                    type="text"
                    name="message"
                    value={paymentForm.message}
                    onChange={handleChange}
                    placeholder='Enter your message'
                    className='w-full p-2 rounded-lg my-2 border-2 border-gray-300'
                />
                <input
                    type="text"
                    name="amount"
                    value={paymentForm.amount}
                    onChange={handleChange}
                    placeholder='Enter your amount'
                    className='w-full p-2 rounded-lg my-2 border-2 border-gray-300'
                />
                <input type="hidden" name="username" value={username} />

                <button
                    type='submit'
                    className='w-full bg-blue-500 text-white px-4 py-2 my-2 rounded-lg hover:bg-blue-600 transition-all font-bold'
                    disabled={!paymentForm.amount || !paymentForm.name}
                >
                    Pay
                </button>
            </form>
            <div className='flex gap-2 mt-2'>
                <button
                    onClick={() => handlePresetAmount(10)}
                    className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all border border-slate-600'
                >
                    $10
                </button>
                <button
                    onClick={() => handlePresetAmount(20)}
                    className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all border border-slate-600'
                >
                    $20
                </button>
                <button
                    onClick={() => handlePresetAmount(30)}
                    className='bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all border border-slate-600'
                >
                    $30
                </button>
            </div>
        </div>
    )
}

export default PaymentPage
