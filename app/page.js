"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { getLocalStorage } from "./utils/localStorageHelper";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const token = getLocalStorage("token")
    if (token) router.push('/booklist')
  },[])

  return (
    <div className="w-full h-screen max-w-[431px] mx-auto bg-white relative">
      <div className="w-full h-full p-5 flex flex-col justify-end gap-10 text-black">
        <h1 className="text-5xl titillium-web-semibold">Keuangan Jelas, Hidup Bebas Cemas.</h1>
        <p>Semua arus kas Kamu ada di genggaman. Cek pemasukan dan pengeluaran bulan ini agar rencana keuangan Anda berjalan mulus.</p>
        <hr className="bg-black h-[2px]" />
        <div className="w-full flex items-center justify-between">
          <Link href={'/login'}><div className="py-2 px-10 border border-black rounded-[999px] cursor-pointer">Masuk</div></Link>
          <Link href={'/register'}><div className="py-2 px-10 border border-black rounded-[999px] bg-black text-white cursor-pointer">Daftar Gratis</div></Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[10rem]"><Image src="/homepage/Ellipse 1.png" width={1000} height={1000} alt="img" className="w-full h-full" /></div>
      <div className="absolute top-[20%] right-0 w-[4rem]"><Image src="/homepage/Ellipse 2.png" width={500} height={500} alt="img" className="w-full h-full" /></div>
      <div className="absolute top-0 right-[0] w-[20rem]"><Image src="/homepage/Ellipse 3.png" width={2000} height={2000} alt="img" className="w-full h-full" /></div>
      <div className="absolute top-[20%] left-0 w-[5rem]"><Image src="/homepage/Ellipse 4.png" width={800} height={800} alt="img" className="w-full h-full" /></div>
      <div className="absolute top-[30%] left-[10%] w-[5rem]"><Image src="/homepage/Ellipse 5.png" width={500} height={500} alt="img" className="w-full h-full" /></div>
    </div>
  );
}
