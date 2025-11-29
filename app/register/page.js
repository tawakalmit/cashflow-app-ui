"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Swal from 'sweetalert2'
import axios from "axios"

import { setLocalStorage, getLocalStorage } from '../utils/localStorageHelper'

export default function Register() {

  const router = useRouter()

  const register = async (e) => {
    e.preventDefault()

    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const passwordConfirm = e.target[3].value

    if (password !== passwordConfirm) {
        Swal.fire({
            title: "Password konfirmasi tidak sama",
            customClass: {
                confirmButton: "bg-[#f1c40f] text-white"
            },
        });
        return
    }

    axios.post("/api/auth/register",
    {
        username: username,
        email: email,
        password: password
    },
    {
        headers: {
        "Content-Type": "application/json",
        }
    }
    )
    .then(res => {
        console.log(res)
        const token = res?.data?.data?.token
        if (token) {
            setLocalStorage("token", token)
            router.push('/booklist')
        }
    })
    .catch(err => {
        const message = err?.response?.data?.message
        if (message) {
            Swal.fire({
                title: message,
                customClass: {
                    confirmButton: "bg-[#f1c40f] text-white"
                },
            });
        }
    })
  }
    
  useEffect(() => {
    const token = getLocalStorage("token")
    if (token) router.push('/booklist')
  },[])

  return (
    <form onSubmit={register} className="w-full h-screen max-w-[431px] mx-auto bg-[#f1c40f] relative">
        <div className='absolute bottom-0'>
            <div className='w-full h-fit p-5 text-white flex flex-col gap-2'>
                <div className='w-10'><Image src="/cashflow-512.png" width={400} height={400} alt='img' className='w-full h-full' /></div>
                <h1 className='text-4xl'>Siap Memulai Hidup Bebas Cemas?</h1>
                <p className='text-sm'>Buat akun gratismu dalam 30 detik. Kami akan bantu kamu mencatat setiap rupiah dengan mudah dan aman.</p>
            </div>
            <div className='w-full h-[70vh] bg-white rounded-t-3xl p-5 flex flex-col gap-7 justify-center'>
                <div className='flex flex-col gap-2'>
                    <label className='text-black titillium-web-semibold text-sm'>Nama Pengguna</label>
                    <input required type='text' placeholder='Masukkan nama pengguna' className='w-full py-3 px-5 text-sm outline-none bg-white text-black rounded-full border border-black' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-black titillium-web-semibold text-sm'>Email</label>
                    <input required type='email' placeholder='Masukkan email' className='w-full py-3 px-5 text-sm outline-none bg-white text-black rounded-full border border-black' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-black titillium-web-semibold text-sm'>Password</label>
                    <input required type='password' placeholder='Masukkan password' className='w-full py-3 px-5 text-sm outline-none bg-white text-black rounded-full border border-black' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-black titillium-web-semibold text-sm'>Konfirmasi Password</label>
                    <input required type='password' placeholder='Masukkan konfirmasi password' className='w-full py-3 px-5 text-sm outline-none bg-white text-black rounded-full border border-black' />
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <button type='submit' className='w-fit px-10 py-3 bg-[#f1c40f] text-white rounded-full text-sm titillium-web-semibold'>Lanjutkan</button>
                    <p className='text-black titillium-web-semibold text-xs'>Sudah punya akun ? <Link href={"/login"} className='text-[#f1c40f] titillium-web-bold'>Masuk</Link></p>
                </div>
            </div>
        </div>
    </form>
  )
}
