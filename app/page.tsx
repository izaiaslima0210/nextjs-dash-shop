"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Home() {
  const {data} = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <h2 className="text-secundary text-xl">{data?.user?.name}</h2>
    </main>
  )
}
