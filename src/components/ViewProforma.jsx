
export const ViewProforma = ({id,monto}) => {
    return (
        <div className="bg-[#1E2139] h-full flex justify-between gap-5 items-center p-2 rounded-md text-sm text-[#D9DDF4]">
            <div className="flex flex-col gap-2">
                <span className="text-white">N°{id}</span>
                <span>18/05/2024</span>
            </div>
            <div className="flex gap-5 items-center">
                <span>Giancarlo Alvarez Reategui de la puente</span>
                <span className="font-semibold text-lg text-white">{monto}.00</span>
            </div>
        </div>
    )
}
