"use client"

import Image from 'next/image'
import BooklistItem from '../components/BooklistItem'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

import axios from 'axios'
import Swal from 'sweetalert2'
import { removeLocalStorage } from '../utils/localStorageHelper'

export default function Booklist() {

  const router = useRouter()
  const [optionModal, setOptionModal] = useState(false)
  const [books, setBooks] = useState([])
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOptionModal(false);
    }
  };

  const handleLogout = () => {
    removeLocalStorage("token")
    router.push("/")
  }

  const editBooks = () => {

    // document.querySelectorAll('.delete-book-btn').forEach((item) => {
    //   item.classList.toggle('hidden')
    // })

    // document.querySelector('#editBooks').innerText = ""
    // Swal.fire({
    //   title: "Hapus Buku?",
    //   text: "Apakah kamu yakin ? Kamu gak bisa balikin lagi buku kamu",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#f1c40f",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Ya, hapus buku!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Dihapus!",
    //       text: "Buku berhasil dihapus",
    //       icon: "success"
    //     });
    //   }
    // });
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/")
    } else {
      axios.get('/api/books/mybooks', {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(res => {
        const count = res.data.data.count
        if (count > 0) {
          setBooks(res.data.data.books)
        }
      })
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full min-h-screen max-w-[431px] mx-auto bg-[#f1c40f] relative">
        <div className='w-full h-fit py-4 px-5 bg-[#ecf0f1] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className='w-5'><Image src="/cashflow-512.png" width={400} height={400} alt='img' className='w-full h-full' /></div>
                <div className='text-black titillium-web-bold'>Cashflow</div>
            </div>
            <div className='cursor-pointer relative w-fit h-fit' onClick={() => setOptionModal(!optionModal)}>
                <Image src="/icons/option.svg" width={20} height={20} alt="profile" />
                <div ref={modalRef} className={`w-[8rem] h-fit shadow-md gap-3 flex flex-col bg-[#dddddd] rounded absolute right-0 top-8 p-3 items-end ${optionModal ? "" : "hidden"}`}>
                    {/* <Link href="#" className='text-xs text-black'>Profil Saya</Link> */}
                    <div id="kelola-buku" className='text-xs text-black' onClick={editBooks}>Kelola Buku</div>
                    <div className='text-xs text-black' onClick={handleLogout}>Keluar</div>
                </div>
            </div>
        </div>

        { books.length > 0 ? (
          <div className='w-full flex flex-col gap-3 px-5 pb-5 py-10'>
            {books.map((item, index) => {
              return (
                <BooklistItem 
                  key={index} 
                  bookId={item._id}
                  title={item.title}
                />
              )
            })}
          </div>
        ) : (
          <div className='w-full min-h-[90vh] flex items-center flex-col justify-center gap-5'>
              <div className='flex items-start justify-center gap-3 w-9/12'>
                  <div className='mt-1'><Image src="/icons/transaction-history.svg" width={70} height={70} alt='transaction' className='[filter:brightness(0)_saturate(100%)_invert(95%)_sepia(100%)_saturate(0%)_hue-rotate(18deg)_brightness(104%)_contrast(104%)]' /></div>
                  <div className='text-white text-sm titillium-web-semibold'>Sepertinya Kamu belum pernah mencatat transaksi. Semua catatan akan muncul di halaman ini.</div>
              </div>
              <Link href="/create-book" className='w-fit px-10 py-3 bg-white text-black rounded-full text-sm titillium-web-semibold'>Buat Buku</Link>
          </div>
        ) }

        {/* Add book button */}
        <Link href="/create-book" className='w-10 h-10 shadow-xl cursor-pointer bg-white rounded-full fixed bottom-10 right-10 flex-items-center justify-center'>
            <Image src="/icons/add-icon.svg" width={40} height={40} alt="add" />
        </Link>
    </div>
  )
}
