import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { usePurchaseMutation } from '../../service/api'
import { formatPrice, sumTot } from '../../utils'

import PurchaseComfirm from '../../components/PurchaseComfirm'

import { Button } from '../../styles/global'
import * as S from './styles'

type Props = {
    backBuy: () => void
}

const Checkout = ({ backBuy }: Props) => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [continueBuy, setContinueBuy] = useState(true)
    const [purchase, { data, isSuccess }] = usePurchaseMutation()

    const form = useFormik({
        initialValues: {
            receiver: '',
            address: '',
            city: '',
            cep: '',
            numberHouse: '',
            more: '',
            cardName: '',
            cardNum: '',
            cardCode: '',
            monthExpires: '',
            yearExpires: ''
        },
        validationSchema: Yup.object({
            receiver: Yup.string().min(5).required(),
            address: Yup.string().min(5).required(),
            city: Yup.string().min(3).required(),
            cep: Yup.string().min(8).required(),
            more: Yup.string().min(5).required(),
            cardName: Yup.string().min(5).required(),
            cardNum: Yup.string().min(5).required(),
            cardCode: Yup.number().min(3).required(),
            monthExpires: Yup.string().min(2).required(),
            yearExpires: Yup.string().min(2).required(),
            numberHouse: Yup.string().min(1).required()
        }),
        onSubmit: (values) => {
            purchase({
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco
                })),
                delivery: {
                    receiver: values.receiver,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.cep,
                        number: Number(values.numberHouse),
                        complement: values.more
                    }
                },
                payment: {
                    card: {
                        name: values.cardName,
                        number: values.cardNum,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.monthExpires),
                            year: Number(values.yearExpires)
                        }
                    }
                }
            })
        }
    })

    const getError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isValid = fieldName in form.errors
        const hasError = isTouched && isValid
        return hasError
    }

    const getValide = () => {
        const teste1 =
            form.values.address !== '' && form.values.address.length >= 5
        const teste2 = form.values.cep !== '' && form.values.cep.length >= 8
        const teste3 = form.values.city !== '' && form.values.city.length >= 3
        const teste4 = form.values.more !== '' && form.values.more.length >= 5
        const teste5 =
            form.values.numberHouse !== '' &&
            form.values.numberHouse.length >= 1
        const teste6 =
            form.values.receiver !== '' && form.values.receiver.length >= 5
        if (teste1 && teste2 && teste3 && teste4 && teste5 && teste6) {
            setContinueBuy(false)
        }
    }

    if (isSuccess && data) {
        return <PurchaseComfirm backBuy={backBuy} orderId={data.orderId} />
    }

    return (
        <S.CheckoutContainer onSubmit={form.handleSubmit}>
            {continueBuy ? (
                <>
                    <h3>Entrega</h3>
                    <S.InputField>
                        <label htmlFor="receiver">Quem irá receber</label>
                        <input
                            type="text"
                            id="receiver"
                            name="receiver"
                            value={form.values.receiver}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={getError('receiver') ? 'error' : ''}
                        />
                    </S.InputField>
                    <S.InputField>
                        <label htmlFor="address">Endereço</label>
                        <input
                            type="text"
                            id="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={getError('address') ? 'error' : ''}
                        />
                    </S.InputField>
                    <S.InputField>
                        <label htmlFor="city">Cidade</label>
                        <input
                            type="text"
                            id="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={getError('city') ? 'error' : ''}
                        />
                    </S.InputField>
                    <S.InputFlex>
                        <div>
                            <label htmlFor="cep">CEP</label>
                            <InputMask
                                type="text"
                                id="cep"
                                value={form.values.cep}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={getError('cep') ? 'error' : ''}
                                mask="99999-999"
                            />
                        </div>
                        <div>
                            <label htmlFor="numberHouse">Número</label>
                            <InputMask
                                type="text"
                                id="numberHouse"
                                value={form.values.numberHouse}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={
                                    getError('numberHouse') ? 'error' : ''
                                }
                                mask="99"
                            />
                        </div>
                    </S.InputFlex>
                    <S.InputField>
                        <label htmlFor="more">Complemento</label>
                        <input
                            type="text"
                            id="more"
                            value={form.values.more}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={getError('more') ? 'error' : ''}
                        />
                    </S.InputField>
                    <Button
                        onClick={getValide}
                        type="button"
                        className="continue"
                        onSubmit={() => form.handleSubmit}
                    >
                        Continuar com o pagamento
                    </Button>
                    <Button onClick={backBuy} type="button">
                        Voltar para o carrinho
                    </Button>
                </>
            ) : (
                <>
                    <h3>
                        Pagamento - Valor a pagar {formatPrice(sumTot(items))}
                    </h3>
                    <S.InputField>
                        <label htmlFor="cardName">Nome no cartão</label>
                        <input
                            type="text"
                            id="cardName"
                            value={form.values.cardName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={getError('cardName') ? 'error' : ''}
                        />
                    </S.InputField>
                    <S.InputFlex $numCard="228px">
                        <div className="cardNum">
                            <label htmlFor="cardNum">Número do cartão</label>
                            <InputMask
                                type="text"
                                id="cardNum"
                                value={form.values.cardNum}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={getError('cardNum') ? 'error' : ''}
                                mask="9999 9999 9999 9999"
                            />
                        </div>
                        <div>
                            <label htmlFor="cardCode">CVV</label>
                            <InputMask
                                type="text"
                                id="cardCode"
                                value={form.values.cardCode}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={getError('cardCode') ? 'error' : ''}
                                mask="999"
                            />
                        </div>
                    </S.InputFlex>
                    <S.InputFlex>
                        <div>
                            <label htmlFor="monthExpires">
                                Mês de vencimento
                            </label>
                            <InputMask
                                type="text"
                                id="monthExpires"
                                value={form.values.monthExpires}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={
                                    getError('monthExpires') ? 'error' : ''
                                }
                                mask="99"
                            />
                        </div>
                        <div>
                            <label htmlFor="yearExpires">
                                Ano de vencimento
                            </label>
                            <InputMask
                                type="text"
                                id="yearExpires"
                                value={form.values.yearExpires}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={
                                    getError('yearExpires') ? 'error' : ''
                                }
                                mask="99"
                            />
                        </div>
                    </S.InputFlex>
                    <Button type="submit" className="continue">
                        Finalizar pagamento
                    </Button>
                    <Button type="button" onClick={() => setContinueBuy(true)}>
                        Voltar para a edição do endereço
                    </Button>
                </>
            )}
        </S.CheckoutContainer>
    )
}

export default Checkout
