"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Page() {

  const { bookid } = useParams() 

  return (
    <div className="w-full h-screen max-w-[431px] mx-auto bg-white relative">
        <div className='w-full h-[4rem] bg-[#f1c40f] flex items-center justify-center px-5 relative text-white'>
            <Link className="absolute left-5" href={`/booklist/${bookid}`}><Image src="/icons/back-btn-icon.svg" width={30} height={30} alt="back" style={{filter:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(156deg) brightness(100%) contrast(103%)"}} /></Link>
            <span className="titillium-web-semibold text-xl">Buat Transaksi</span>
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-3 mt-5">
            <select defaultValue={"Pilih Jenis Transaksi"} title="jenis-transaksi" id="jenis-transaksi" name="jenis-transaksi" className="text-black outline-none border border-black rounded-full px-5 py-3 text-xs">
              <option disabled>Pilih Jenis Transaksi</option>
              <option value="uang-masuk">Uang Masuk</option>
              <option value="pending-uang-masuk">Uang Masuk Pending</option>
              <option value="uang-keluar">Uang Keluar</option>
              <option value="pending-uang-keluar">Uang Keluar Pending</option>
            </select>
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-3 mt-5">
            <label htmlFor="nama-transaksi" className="text-black titillium-web-semibold text-sm">Nama Transaksi</label>
            <input defaultValue={""} name="nama-transaksi" type="text" placeholder="masukkan nama transaksi" className="text-xs border border-[#ddd] rounded-full px-5 py-3 outline-none text-black" />
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-3 mt-5">
            <label htmlFor="jumlah-transaksi" className="text-black titillium-web-semibold text-sm">Jumlah</label>
            <input defaultValue={""} name="jumlah-transaksi" type="text" placeholder="masukkan jumlah" className="text-xs border border-[#ddd] rounded-full px-5 py-3 outline-none text-black" />
        </div>
        <div className="text-center text-lg cursor-pointer select-none absolute bottom-0 w-full py-3 bg-[#f1c40f] text-white titillium-web-semibold">Simpan</div>
    </div>
  )
}
