import { useEffect, useRef } from "react"

export const Paypal = () => {

    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, error) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking table",
                            amount: {
                                currency_code: "USD",
                                value: 650.00
                            }
                        }
                    ]
                })
            },
            
            onApprove: async(data, actions) => {
                const order = await actions.order.capture()
                console.log('SUCCESSFUL ORDER: ' + order);
            },

            onError: (error) => {
                console.log(error);
            }

        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}