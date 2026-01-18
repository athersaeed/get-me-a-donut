import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'

export async function POST(request) {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')

        // Parse form data from the request
        const body = await request.formData()
        const name = body.get('name')
        const message = body.get('message')
        const amount = body.get('amount')
        const username = body.get('username')

        // Basic validation
        if (!amount || !name || !username) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Convert amount to cents (Stripe expects integer cents)
        const amountInCents = Math.round(parseFloat(amount) * 100)

        // Ensure minimum amount (50 cents)
        if (amountInCents < 50) {
            return NextResponse.json({ error: 'Amount must be at least $0.50' }, { status: 400 })
        }

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'cad',
                        product_data: {
                            name: `Donation to ${username}`,
                            description: `Message: ${message || 'No message'}`,
                        },
                        unit_amount: amountInCents,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/${username}?success=true`,
            cancel_url: `${origin}/${username}?canceled=true`,
            metadata: {
                payment_name: name,
                payment_message: message,
                recipient_username: username
            }
        });

        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        console.error("Stripe Error:", err);
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}