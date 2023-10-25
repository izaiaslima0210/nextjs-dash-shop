import Image from "next/image";
export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <figure className="md:flex bg-slate-100 rounded-xl h-full w-5xl p-8 md:p-0 dark:bg-slate-800">
        <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <caption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </caption>
        </div>
      </figure>
    </main>
  )
}