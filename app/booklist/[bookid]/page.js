"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'

import TransactionItem from '@/app/components/TransactionItem'

export default function BookDetail() {

  const [optionModal, setOptionModal] = useState(false)
  const modalRef = useRef(null);
  const { bookid } = useParams()

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOptionModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full min-h-screen max-w-[431px] mx-auto bg-white relative">

        <div className='w-full h-fit py-4 px-5 bg-[#ecf0f1] flex items-center justify-between'>
            <Link className="" href="/booklist"><Image src="/icons/back-btn-icon.svg" width={20} height={20} alt="back"/></Link>
            <span className='text-black titillium-web-bold w-10/12 text-center'>Budget Renovasi Rumah</span>
            <div className='cursor-pointer relative w-fit h-fit' onClick={() => setOptionModal(!optionModal)}>
                <Image src="/icons/option.svg" width={20} height={20} alt="profile" />
                <div ref={modalRef} className={`w-[8rem] h-fit shadow-md gap-3 flex flex-col bg-[#dddddd] rounded absolute right-0 top-8 p-3 items-end ${optionModal ? "" : "hidden"}`}>
                    <div className='text-xs text-black'>Kelola Transaksi</div>
                </div>
            </div>
        </div>

        {/* Kondisi data eksis */}
        <div className='w-full flex flex-col gap-3 px-5 pb-5 py-10'>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
        </div>

        {/* Add book button */}
        <Link href={`/booklist/${bookid}/create-transaction`} className='w-10 h-10 shadow-xl cursor-pointer bg-white rounded-full fixed bottom-10 right-10 flex-items-center justify-center'>
            <Image src="/icons/add-icon.svg" width={40} height={40} alt="add" />
        </Link>
    </div>
  )
}