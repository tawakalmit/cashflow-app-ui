"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import axios from "axios"
import Swal from "sweetalert2"

import { getLocalStorage } from "../utils/localStorageHelper"

export default function Page() {

  const [token, setToken] = useState("")
  const router = useRouter()

  useEffect(() => {
    const token = getLocalStorage("token")
    if (token) setToken(token)
  }, [])

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const createBook = (e) => {
    e.preventDefault()

    const title = e.target[0].value

    axios.post("/api/books/create",
      {
          title: title,
      },
      {
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          }
      }
    )
    .then(res => {
      if (res.status == 200) {
        Toast.fire({
          icon: "success",
          title: "Buku berhasil dibuat"
        });
        router.push('/booklist')
      }
    })
  }

  return (
    <form onSubmit={createBook} className="w-full h-screen max-w-[431px] mx-auto bg-white relative">
        <div className='w-full h-[4rem] bg-[#f1c40f] flex items-center justify-center px-5 relative text-white'>
            <Link className="absolute left-5" href="/booklist"><Image src="/icons/back-btn-icon.svg" width={30} height={30} alt="back" style={{filter:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(156deg) brightness(100%) contrast(103%)"}} /></Link>
            <span className="titillium-web-semibold text-xl">Buat Buku</span>
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-3 mt-5">
            <label className="text-black titillium-web-semibold">Judul Buku</label>
            <input type="text" placeholder="masukkan judul buku" className="border border-[#ddd] rounded-full px-5 py-3 outline-none text-black" />
        </div>
        <button type="submit" className="text-center text-lg cursor-pointer select-none absolute bottom-0 w-full py-3 bg-[#f1c40f] text-white titillium-web-semibold">Simpan</button>
    </form>
  )
}
