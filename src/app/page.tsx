// import Image from "next/image";

import Footer from '@/components/footer/page';
import Navbar from '@/components/navbar/page';
import { CornerRightDown, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='bg-white'>
			<Navbar />
			<section
				className='mt-28 sm:mt-40 bg-white text-black px-5 bg-cover min-h-[60vh]'
				style={{
					backgroundImage: `url('/hero-bg.png')`,
					backgroundSize: '110% auto',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}>
				<h1 className='text-center sm:text-6xl text-4xl text-[#461da1] font-sans'>
					Enter Web3 <br />
					Evolve Onchain
				</h1>
				<p className='text-center sm:text-xl mt-5'>
					The New Layer for Web3 Content:
					Gamified, Social, and{' '}
					<br className='hidden sm:block' />
					Powered by Real Creators
				</p>
				<div className='flex items-center justify-center gap-3 mt-6'>
					<button className='flex items-center gap-1 text-white bg-[#461da1] px-6 py-2 rounded-md hover:bg-[#5a2db6] transition-colors duration-300 cursor-pointer'>
						<p>Launch App</p>
						<Rocket size={25} />
					</button>
					<button className='border border-gray-300 px-4 py-2 rounded-md cursor-pointer'>
						Join Waitlist
					</button>
				</div>
			</section>
			<section className='px-5'>
				<div className='flex items-center justify-center gap-1 mt-12 mb-5'>
					
					<CornerRightDown
						size={20}
						className=''
					/>
				</div>
				<Image
					src={'/tessium-extend.svg'}
					width={500}
					height={500}
					alt='tess'
					className='flex items-center justify-center mx-auto mt-20 md:w-[60%] '
				/>
			</section>
			<section className='flex sm:flex-row flex-col items-center px-5 sm:px-16 bg-[#efefef] rounded-xl md:mx-20 mx-7 mt-20'>
				<div>
					<p className='font-bold my-5 md:text-lg'>
						Millions of users enter web3
						annually.
					</p>
					<p className='md:w-[70%]'>
						Excited learners, developers,
						and explorers are joining the
						decentralized world—ready to
						learn, build, and grow.
					</p>
				</div>
				<Image
					src={'/glass.svg'}
					width={400}
					height={400}
					alt='tess'
					className='flex items-center justify-center mx-auto mt-20 mb-7'
				/>
			</section>
			<section className='sm:px-16 mb-20 mt-16'>
				<h1 className='text-center sm:text-5xl text-3xl md:mb-16 text-[#461da1]'>
					Our Core Features
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 px-5 mt-10'>
					<div className='bg-[#f7f1ea] py-7 px-5 sm:px-7 rounded-xl'>
						<Image
							src={'/tessium-edu.svg'}
							width={50}
							height={50}
							alt='tess'
							className=''
						/>
						<p className='font-bold my-2'>
							Tessium Edu
						</p>
						<p className='sm:w-[80%]'>
						Gamified, structured web3 edtech — built to easily onboard the next wave of builders.
						Interactive learning tracks with AI companions.
						Onchain tracking and earning avenues for sustained progress.
						Community connections and integration.
						</p>
						<div className='flex items-center gap-2 flex-wrap text-sm mt-4'>
							<p className='py-1 px-2 bg-[#ffc884] rounded-md'>
							Learn
							</p>
							<p className='py-1 px-2 bg-[#ffc884] rounded-md'>
							Evolve
							</p>
							<p className='py-1 px-2 bg-[#ffc884] rounded-md'>
							Rewards 
							</p>
						</div>
					</div>
					<div className='bg-[#f1edfa] py-7 px-5 sm:px-7 rounded-xl'>
						<Image
							src={
								'/tessium-waves.svg'
							}
							width={50}
							height={50}
							alt='tess'
							className=''
						/>
						<p className='font-bold my-2'>
							Tessium Waves
						</p>
						<p className='sm:w-[80%]'>
						High value community building for projects… <br />

						</p>
						<div className='flex items-center gap-2 flex-wrap text-sm mt-4 text-white'>
							<p className='py-1 px-2 bg-[#461da1] rounded-md'>
								Custom Campaigns
							</p>
							<p className='py-1 px-2 bg-[#461da1] rounded-md'>
							Community Growth
							</p>
							<p className='py-1 px-2 bg-[#461da1] rounded-md'>
							Immersive Experience
							</p>
						</div>
					</div>
					<div className='bg-[#f7edee] py-7 px-5 sm:px-7 rounded-xl'>
						<Image
							src={
								'/tessium-games.svg'
							}
							width={50}
							height={50}
							alt='tess'
							className=''
						/>
						<p className='font-bold my-2'>
							Tessium Games
						</p>
						<p className='sm:w-[80%]'>
						Evolve through play — where web3 versatility meets competitive fun.
						Positive-sum games built with education at its core.
						Real ecosystem onchain games tied to your Tess Rank.
						</p>
						<div className='flex items-center gap-2 flex-wrap text-sm mt-4 text-white'>
							<p className='py-1 px-2 bg-[#ff5f6d] rounded-md'>
							Level Up
							</p>
							<p className='py-1 px-2 bg-[#ff5f6d] rounded-md'>
							Onchain
							</p>
							<p className='py-1 px-2 bg-[#ff5f6d] rounded-md'>
							Tiered Rewards
							</p>
						</div>
					</div>
					<div className='bg-[#f6f0fa] py-7 px-5 sm:px-7 rounded-xl'>
						<Image
							src={
								'/tessium-creator.svg'
							}
							width={50}
							height={50}
							alt='tess'
							className=''
						/>
						<p className='font-bold my-2'>
							Tessium Creator
						</p>
						<p className='sm:w-[80%]'>
						Next generation creator engine…

						</p>
						<div className='flex items-center gap-2 flex-wrap text-sm mt-4 text-white'>
							<p className='py-1 px-2 bg-[#a022f5] rounded-md'>
							Create
							</p>
							<p className='py-1 px-2 bg-[#a022f5] rounded-md'>
							Scale
							</p>
							<p className='py-1 px-2 bg-[#a022f5] rounded-md'>
							Earn
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
