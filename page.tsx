import Link from "next/link";

export default function Home(){
  return(
    <div className="bg-[#1D1E2C] min-h-screen flex flex-col items-center">
      <nav className="w-full h-20 pt-6 pb-6 flex justify-between items-center px-14">
      <h3 className="text-2xl font-bold leading-8 font-monsterrat text-white pl-32">BrandName</h3>

         <ul className="font-semibold flex flex-row text-white gap-x-8 mx-auto">
              <li className="w-[43px] h-6 cursor-pointer">Home</li>
              <li className="w-[59px] h-6 cursor-pointer">Product</li>
              <li className="w-[52px] h-6 cursor-pointer">Pricing</li>
              <li className="w-[58px] h-6 cursor-pointer">Contact</li>
          </ul> 
<div className=" flex items-center  mr-6 space-x-6">
  <Link href="/page.tsx" className= "text-white pt-2  text-sm font-bold">Login</Link>
    <button className="bg-[#23A6F0] text-white text-sm py-2 px-4 rounded ">JOIN US </button>
          </div>
      </nav>
<div className="flex flex-col items-center text-center mt-10 mb-10 gap-10">
  <h5 className="text-base leading-6 font-montserrat tracking-[0.1px] font-bold text-[#23A6F0]">Welcome</h5>
  <h1 className="w-[542px] h-[160px] font-montserrat leading-[80px] text-5xl text-white font-bold tracking-widest text-center whitespace-normal">Selling on the
     internet like a pro</h1>
     <h4 className="text-[#FFFFFF] text-center font-normal text-xl font-Montserrat leading-7 tracking-[0.2px]">
      <span className="block">We know how large objects will act, but things on </span>
     <span className="block">small scale just do not act that way. </span>
     </h4>
     <div className="flex justify-center space-x-4">
      <button className="bg-[#23A6F0] border-[#23A6F0] text-white w-[193px] h-[52px] rounded-md pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px]">Get Quote Now</button>
      <button className="border border-[#23A6F0] text-[#23A6F0]  w-[193px] h-[52px] rounded-md font-Montserrat font-bold text-center text-sm leading-5 tracking-[0.2px]">Learn More</button>
     </div>
</div>

<div className="flex flex-row justify-items-center mt-20 mb-20 gap-10">

<div className="bg-white p-6 w-80">
<div className="bg-[#FFDCD1] w-12 h-12 mb-4 rounded"></div>
    <h2 className="text-[#252B42] font-bold text-xl mb-2">training Courses</h2>
    <div className="bg-[#E74040] w-14 h-1 rounded mb-2"></div>
  
    <p className="text-[#737373] mt-2">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>


    <div className="bg-white p-6 w-80">
      <div className="w-12 h-12 bg-[#B9EAA8] mb-4 rounded"></div>
      <h2 className="text-[[#252B42] font-bold text-xl mb-2">2,769 online courses</h2>
      <div className="bg-[#E74040] w-14 h-1 rounded mb-2 "></div>
      <p className="text-[#737373]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
    
    <div className="bg-[#23A6F0] p-6 w-80">
      <div className="bg-white w-12 h-12 mb-4 rounded"></div>
      <h2 className="text-white font-bold text-xl mb-2">training Courses</h2>
      <div className="bg-white border-yellow-900 w-14 h-1 rounded mb-2"></div>
      <p className="text-white">The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>
</div>
</div>)}
  




