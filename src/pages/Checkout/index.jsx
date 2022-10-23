import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Link } from 'react-router-dom';
import axios from 'axios'
import flagCard from './card_img.png'
import './index.css'

const validationForm = yup.object().shape({
    customer_name: yup.string().required().max(100, "digite no máximo 100 caracteres"),
    customer_phone: yup.string().required().max(11, "digite no máximo 100 caracteres")
})

export const CheckoutModal = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    });
    const createOrder = data => axios.post("https://my-simple-ecommerce-api.herokuapp.com/orders", data)
        .then(() => {
            console.log("Deu bão!");
        })
        .catch(error => {
            console.log(error);
        });
 
    return (
            
    <div className="container-checkout ">
        <div className='container-glass'>
            <form 
                method="POST"
                onSubmit={handleSubmit(createOrder)}
            >
                <div className="row">
                    <div className="col">
                        <h3 className="title">Dados do Destinatário</h3>

                        <div className="inputBox">
                            <span>Nome Completo:</span>
                            <input type="text" placeholder="Jhon Doe" name='customer_name' { ...register("customer_name") } />

                            {/* TODO */}
                            {/* <p className='error-message'>{errors.customer_name?.message}</p> */}
                        </div>
                        <div className="inputBox">
                            <span>Email:</span>
                            <input type="email" placeholder="jhondoe@example.com" />
                        </div>
                        <div className="inputBox">
                            <span>Celular</span>
                            <input type="phone" placeholder="62 9 XXXX-XXXX" name='customer_phone' { ...register('customer_phone') } />
                        </div>
                        <div className="inputBox">
                            <span>Endereço:</span>
                            <input type="text" placeholder="Rua ABC, número X, setor XYZ" />
                        </div>
                        <div className="inputBox">
                            <span>Cidade:</span>
                            <input type="text" placeholder="Goiânia" />
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <span>Estado: :</span>
                                <input type="text" placeholder="Goiás" />
                            </div>
                            <div className="inputBox">
                                <span>CEP:</span>
                                <input type="text" placeholder="74.001-970" />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <h3 className="title">Dados para pagamento</h3>

                        <div className="inputBox">
                            <span>Cartões aceitos:</span>
                            <img src={flagCard} alt="bandeiras de cartão" />
                        </div>
                        <div className="inputBox">
                            <span>Nome do Titular:</span>
                            <input type="text" placeholder="Jhon Doe" />
                        </div>
                        <div className="inputBox">
                            <span>Número do Cartão:</span>
                            <input type="number" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div className="inputBox">
                            <span>Mês valid.:</span>
                            <input type="text" placeholder="ex: janeiro" />
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <span>Ano valid. :</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div className="inputBox">
                                <span>CVV:</span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="finalizar o pagamento" className="submit-btn" />
                <div className='link-buy'>
                    <a href="/" style={{ color: "black" }}>Continuar comprando</a>
                </div>
            </form>
        </div>
    </div>


    )
}
