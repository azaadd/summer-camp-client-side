import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';



const CheckoutForm = ({ cart, price, refetch}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');


    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [price, axiosSecure]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log('card', card)

        const { error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('PaymentMethod', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent)

        setProcessing(false);

        if(paymentIntent.status === 'succeeded'){
            setTransectionId(paymentIntent.id);
            // save payment info in sever
            const payment = {
                email: user?.email,
                transectionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/paymentInfo', payment)
            .then(res => {
                refetch();
                console.log(res.data);
                
            })
        }

    };

    return (
        <div className='w-[550px]'>
            <form onSubmit={handleSubmit}>
                <CardElement className='border rounded py-4 px-4 w-full'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-success btn-sm mt-5 mb-12' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 text-xl mt-3'>{cardError}</p>}
            
            {transectionId && <p className='text-green-500 text-xl'>You have been complete transection successfully!... <br /> <span className='text-black'>your transectionId:</span> <span className='text-red-500'>{transectionId}</span> </p>}

        </div>
    );
};

export default CheckoutForm;