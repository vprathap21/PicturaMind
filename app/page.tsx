import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Wand2, Zap, Image as ImageIcon, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col text-white  from-gray-900 to-black">
      <header className="container  mx-auto flex items-center justify-between p-4 md:p-6">
      <div className="flex items-center space-x-3 group cursor-pointer">
  <Wand2 className="h-8 w-8 text-blue-400 group-hover:text-purple-600 transition-colors duration-500" />
  <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-br from-blue-400 to-purple-700 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-700 transition-all duration-500 ease-in-out">
    Image<span className="text-blue-600 group-hover:text-purple-600 transition-colors duration-500">Craft</span>
    <span className="text-purple-600 group-hover:text-blue-600 transition-colors duration-500"> AI</span>
  </span>
</div>

        <nav>
          <Link href="/generate" passHref>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors duration-300">
              Start Creating
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 md:px-6 text-center">
        <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
          Create Stunning Images
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Powered by AI
          </span>
        </h1>
        <p className="mb-6 md:mb-8 max-w-xl md:max-w-2xl text-base md:text-xl text-gray-300">
          Transform your ideas into breathtaking visuals in seconds. No design skills needed.
        </p>

        <Link href="/generate" passHref className="mb-12 md:mb-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors duration-300">
            Start Creating Now
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </Link>

        <div className="mb-12 md:mb-16 grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Zap className="mb-3 md:mb-4 h-10 w-10 md:h-12 md:w-12 text-blue-500" />
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Lightning Fast</h3>
            <p className="text-sm md:text-base text-gray-300">Generate images in seconds</p>
          </div>
          <div className="flex flex-col items-center">
            <ImageIcon className="mb-3 md:mb-4 h-10 w-10 md:h-12 md:w-12 text-purple-500" />
            <h3 className="mb-2 text-lg md:text-xl font-semibold">High Quality</h3>
            <p className="text-sm md:text-base text-gray-300">Stunning, detailed visuals</p>
          </div>
          <div className="flex flex-col items-center">
            <Palette className="mb-3 md:mb-4 h-10 w-10 md:h-12 md:w-12 text-blue-500" />
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Endless Possibilities</h3>
            <p className="text-sm md:text-base text-gray-300">Create any style or concept</p>
          </div>
        </div>
      </main>

    </div>
  )
}