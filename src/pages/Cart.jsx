import React from 'react'
import { useStore } from '../store'
const Cart = () => {
  const cart = useStore((state) => state.cart)
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
  const remove = useStore((state) => state.removeItem)
  const clear = useStore((state) => state.clearCart)
  return (
    <section className='py-28 px-44 flex flex-col items-center justify-center'>
      <h2 className='text-center font-semibold text-4xl mb-12'>Your Cart Items</h2>
      <div className="flex flex-wrap gap-8 mb-12">
      {cart.map((item) => (
        <div className="flex flex-col w-64 h-[26rem]" key={item.img}>
          <img src={item.img} className='w-full h-48 object-cover' alt=""/>
          <h3 className='font-semibold text-3xl' >{item.title}</h3>
          <p className='text-xl'>{item.description}</p>
          <p className='text-2xl text-yellow-300 font-bold  mb-auto'>${item.price}</p>
          <button className='w-full bg-red-600 text-white font-semibold p-3 ' onClick={() => remove(item)}>Remove from Cart</button>
        </div>
      ))}
      </div>
      <div className="flex items-center gap-2">
        <p className='text-3xl font-semibold'>Total Cost:</p>
      <p className='text-3xl font-bold'>${total.toFixed(2)}</p>
      </div>
      <button className="mt-12 w-80 m-auto p-3 bg-red-600 font-bold text-white" onClick={() => clear}>Clear Cart</button>
    </section>
  )
}

export default Cart