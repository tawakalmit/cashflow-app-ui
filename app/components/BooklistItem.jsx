import Image from 'next/image'
import Link from 'next/link'

export default function BooklistItem({ bookId, title }) {
  return (
    <Link href={`/booklist/${bookId}`}>
      <div className='w-full rounded-xl bg-white titillium-web-semibold text-black p-3 cursor-pointer flex justify-between'>
        <span>{title}</span>
        <Image src="/icons/delete.svg" width={20} height={20} alt="delete" className='hidden delete-book-btn' />
      </div>
    </Link>
  )
}
