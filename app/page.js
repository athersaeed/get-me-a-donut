import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col justify-center h-[44vh] gap-6">

        <div className="text-4xl font-bold flex justify-center items-center gap-4 text-white">Buy Me A Donut <span><img className="invertImg" width={80} src="tea.gif" alt="chai" /></span></div>
        <p className="text-white">A CrowdFunding Platform for Creators. Get funded by your fans and followers. Start now</p>
        <div className="flex gap-4">
          <button className='relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
              Start Now
            </span>
          </button>
          <button className='relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
              Read More
            </span>
          </button>
        </div>
      </div>

      <div className="bg-white text-black h-1 opacity-5"></div>


      <div className="text-white container mx-auto space-y-5 pb-32 pt-16">
        <h2 className="text-2xl text-center font-bold">Your fans can get you a Donut</h2>

        <div className="flex gap-16 justify-around space-y-5">

          <div className="item flex flex-col text-center items-center justify-center gap-3">
            <img className="bg-slate-400 rounded-full p-5" width={80} src="man.gif" alt="" />
            <p className="text-white font-bold">Fund Yourself</p>
            <p>Start a campaign and let your fans support you</p>
          </div>

          <div className="item flex flex-col text-center items-center justify-center gap-3">
            <img className="bg-slate-400 rounded-full p-5" width={80} src="coin.gif" alt="" />
            <p className="text-white font-bold">Fund Yourself</p>
            <p>Start a campaign and let your fans support you</p>
          </div>

          <div className="item flex flex-col text-center items-center justify-center gap-3">
            <img className="bg-slate-400 rounded-full p-5" width={80} src="group.gif" alt="" />
            <p className="text-white font-bold">Your fans want to help you</p>
            <p>Start a campaign and let your fans support you</p>
          </div>

        </div>

      </div>

      <div className="bg-white text-black h-1 opacity-5"></div>

      <div className="text-white container mx-auto space-y-5 pb-32 pt-16">
        <h2 className="text-2xl text-center font-bold">Learn more About us</h2>

        <div className="flex gap-16 justify-around space-y-5">

          <div className="item flex flex-col text-center items-center justify-center gap-3">
            <img className="bg-slate-400 rounded-full p-5" width={80} src="man.gif" alt="" />
            <p className="text-white font-bold">Fund Yourself</p>
            <p>Start a campaign and let your fans support you</p>
          </div>

          <div className="item flex flex-col text-center items-center justify-center gap-3">
            <img className="bg-slate-400 rounded-full p-5" width={80} src="coin.gif" alt="" />
            <p className="text-white font-bold">Fund Yourself</p>
            <p>Start a campaign and let your fans support you</p>
          </div>

          <div className="item flex flex-col text-center items-center justify-center gap-3">
            <img className="bg-slate-400 rounded-full p-5" width={80} src="group.gif" alt="" />
            <p className="text-white font-bold">Your fans want to help you</p>
            <p>Start a campaign and let your fans support you</p>
          </div>

        </div>



      </div>
    </>
  );
}
