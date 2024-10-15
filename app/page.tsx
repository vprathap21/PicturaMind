import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Wand2, Zap, Image as ImageIcon, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col text-white from-gray-900 to-black">
      <header className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-4 md:p-6 space-y-4 sm:space-y-0 mb-8">
        <div className="flex items-center  space-x-3 group cursor-pointer">
          <Wand2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 group-hover:text-purple-600 transition-colors duration-500" />
          <span className="text-3xl sm:text-4xl font-extrabold tracking-wide bg-gradient-to-br from-blue-400 to-purple-700 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-700 transition-all duration-500 ease-in-out">
           PicturaMind
          </span>
        </div>

        <nav className="hidden sm:block">
        <Link href="/generate" passHref >
          <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors duration-300">
          Start Creating           
          </Button>
        </Link>
        </nav>
      </header>

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 md:px-6 text-center">
        <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
          Create Stunning Images
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Powered by AI
          </span>
        </h1>
        <p className="mb-6 md:mb-8 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          Type your ideas, and watch as AI transforms them into amazing images instantly. No design skills needed!
        </p>

        <Link href="/generate" passHref className="mb-12 md:mb-16  w-auto ">
          <button className=" flex gap-1 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Start Creating Now
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </button>
        </Link>

        <div className="mb-12 md:mb-16 grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Zap className="mb-3 md:mb-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-500" />
            <h3 className="mb-2 text-base sm:text-lg md:text-xl font-semibold">Lightning Fast</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">See your ideas come to life in seconds</p>
          </div>
          <div className="flex flex-col items-center">
            <ImageIcon className="mb-3 md:mb-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-500" />
            <h3 className="mb-2 text-base sm:text-lg md:text-xl font-semibold">High Quality</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Get detailed, professional-looking images</p>
          </div>
          <div className="flex flex-col items-center">
            <Palette className="mb-3 md:mb-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-500" />
            <h3 className="mb-2 text-base sm:text-lg md:text-xl font-semibold">Endless Possibilities</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Create any image style you can imagine</p>
          </div>
        </div>
      </main>
    </div>
  )
}