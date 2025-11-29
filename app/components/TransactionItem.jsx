import Image from "next/image"

export default function TransactionItem() {

  const handleAccordionClick = (e) => {
    const el = e.currentTarget
    el.children[1].classList.toggle('hidden')
  }

  return (
    <div className='w-full flex flex-col' onClick={handleAccordionClick}>
        <div className='cursor-pointer w-full py-3 bg-[#1abc9c] rounded-xl px-5 titillium-web-semibold flex items-center justify-between text-white relative z-10'>
            <span className='w-8/12 line-clamp-1'>Budget awal</span>
            <span className='w-3/12 text-right'>10000000</span>
        </div>
        <div className='w-full h-fit bg-[#ecf0f1] rounded-b-2xl relative -top-2 z-0 p-5 relative hidden'>
        <table className='text-black text-xs table-transaction'>
            <tbody>
            <tr>
                <td>Tipe</td>
                <td>:</td>
                <td>Uang masuk</td>
            </tr>
            <tr>
                <td>Catatan</td>
                <td>:</td>
                <td>Budget awal</td>
            </tr>
            <tr>
                <td>Nilai</td>
                <td>:</td>
                <td>10000000</td>
            </tr>
            <tr>
                <td>Tanggal</td>
                <td>:</td>
                <td>12 Juli 2025</td>
            </tr>
            <tr>
                <td>Oleh</td>
                <td>:</td>
                <td>Tawakalmit</td>
            </tr>
            </tbody>
        </table>
        <div className='w-full flex justify-end'>
            <div className='flex items-center gap-5'>
            <Image className='cursor-pointer' src="/icons/edit.svg" width={15} height={15} alt="edit" />
            <Image className='cursor-pointer' src="/icons/delete.svg" width={15} height={15} alt="delete" style={{ filter: "brightness(0) saturate(100%) invert(27%) sepia(68%) saturate(1934%) hue-rotate(342deg) brightness(88%) contrast(91%)" }}/>
            </div>
        </div>
        </div>
    </div>
  )
}
