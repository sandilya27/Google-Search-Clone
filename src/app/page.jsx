import HomeHeader from "@/components/HomeHeader"
import HomeSearch from "@/components/HomeSearch"
import Image from "next/image"


const Home = () => {
  return (
    <>
      <HomeHeader/>
      <div className="flex flex-col items-center mt-24 gap-2">
        <Image 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxDNWh7hH3GUnryIpBGSdLFdcZigSz2TDXvp5x-ybhw&s"
          alt="logo"
          width={300}
          height={100}
          priority
        />
        <HomeSearch/>
      </div>
    </>
  )
}

export default Home