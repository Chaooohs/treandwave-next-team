export default function CheckoutSummary({total, discount, forPay}) {
    return(
        <div className="border-[1px] font-medium text-base text-[#121212] border-[#EDEDED] p-6 flex flex-col gap-6">
            <h3 className="uppercase font-semibold text-2xl">Ваше замовлення</h3>
            <div className="flex justify-between">
                <p>Товарів на суму</p>
                <p>{total} uah</p>
            </div>
            <div className="flex justify-between">
                <p className="uppercase">Промокод</p>
                <p className="text-[#D8001A] uppercase">-{discount} uah</p>
            </div>
            <div className="flex justify-between uppercase">
                <h3>До сплати</h3>
                <h3 className="text-2xl">{forPay} uah</h3>
            </div>
        </div>
    )
}