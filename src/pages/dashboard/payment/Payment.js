import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';


// TODO: provide publishable key
const stripePromise = loadStripe(`${process.env.REACT_APP_payment_key}`);

const Payment = () => {

    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    const {user} = useContext(AuthContext);

    return (
        <div className='fixed mt-8 pt-0 top-0 left-1/4'>
            <p className='text-xl font-semibold text-center'>Welcome! <span className='text-red-500'>{user.displayName}</span></p>
            <p className='text-4xl font-bold text-center'>Your <span className='text-red-500'>Payment</span> History</p>
            <div className="divider"></div>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} refetch={refetch} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;