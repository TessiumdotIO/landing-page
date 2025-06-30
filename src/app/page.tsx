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
					The New Layer for Content: Gamified,
					Social and{' '}
					<br className='hidden sm:block' />
					Powered by Real Creators
				</p>
				<div className='flex items-center justify-center gap-3 mt-6'>
					<button className='flex items-center gap-1 text-white bg-[#461da1] px-6 py-2 rounded-md hover:bg-[#5a2db6] transition-colors duration-300 cursor-pointer'>
						<p>Launch App</p>
						<Rocket size={25} />
					</button>
					<a
						href='https://waitlist.tessium.io'
						target='_blank'
						rel='noopener noreferrer'
						className='border border-gray-300 px-4 py-2 rounded-md cursor-pointer'>
						Join Waitlist
					</a>{' '}
				</div>
			</section>
			{/* Tess Rank Banner Section */}
			<section className='relative overflow-hidden bg-gradient-to-r from-[#461da1] via-[#5a2db6] to-[#461da1] py-16 px-5 mt-20'>
				<div className='absolute inset-0 bg-black/10'></div>
				<div className='relative z-10 max-w-6xl mx-auto text-center'>
					<div className='inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6'>
						<div className='w-3 h-3 bg-[#ffc884] rounded-full animate-pulse'></div>
						<span className='text-white font-semibold text-lg'>
							Introducing
						</span>
					</div>

					<h2 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
						Tess Rank
					</h2>

					<div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-white/20'>
						<p className='text-white/90 text-lg sm:text-xl leading-relaxed mb-8'>
							Your evolving onchain
							versatility score -
							built from every module,
							game, onchain
							checkpoint, wave, AI
							prompt and creator
							activity you complete
							across Tessium
						</p>

						{/* Score Visualization */}
						<div className='flex items-center justify-center mb-8'>
							<div className='relative'>
								<div className='w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center'>
									<div className='w-24 h-24 rounded-full bg-gradient-to-br from-[#ffc884] via-[#ff5f6d] to-[#a022f5] flex items-center justify-center'>
										<span className='text-white font-bold text-2xl'>
											∞
										</span>
									</div>
								</div>
								<div className='absolute -top-2 -right-2 w-8 h-8 bg-[#ffc884] rounded-full flex items-center justify-center'>
									<span className='text-white text-xs font-bold'>
										+
									</span>
								</div>
							</div>
						</div>

						{/* Progress Indicators */}
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8'>
							<div className='text-center'>
								<div className='text-[#ffc884] text-3xl font-bold mb-2'>
									Dynamic
								</div>
								<div className='text-white/80 text-sm'>
									Always
									Evolving
								</div>
							</div>
							<div className='text-center'>
								<div className='text-[#ff5f6d] text-3xl font-bold mb-2'>
									Onchain
								</div>
								<div className='text-white/80 text-sm'>
									Verified
									Progress
								</div>
							</div>
							<div className='text-center'>
								<div className='text-[#a022f5] text-3xl font-bold mb-2'>
									Unique
								</div>
								<div className='text-white/80 text-sm'>
									Your
									Journey
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center'>
							<div className='bg-gradient-to-r from-[#ffc884] to-[#ff5f6d] rounded-full px-8 py-3 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
								Track Your
								Progress
							</div>
						</div>
					</div>
				</div>

				{/* Decorative elements */}
				<div className='absolute top-10 left-10 w-20 h-20 bg-[#ffc884]/20 rounded-full blur-xl'></div>
				<div className='absolute bottom-10 right-10 w-32 h-32 bg-[#ff5f6d]/20 rounded-full blur-xl'></div>
				<div className='absolute top-1/2 left-1/4 w-16 h-16 bg-[#a022f5]/20 rounded-full blur-xl'></div>
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
							Gamified, structured
							web3 edtech — built to
							easily onboard the next
							wave of builders. <br />{' '}
							Interactive learning
							tracks with AI
							companions. <br />{' '}
							Onchain tracking and
							earning avenues for
							sustained progress.{' '}
							<br />
							Community connections
							and integration.
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
					<div className='bg-[#f1edfa] py-7 px-5 sm:px-7 rounded-xl relative overflow-hidden'>
						{/* Releasing Soon Badge */}
						<div className='absolute -top-1 -right-1 bg-gradient-to-r from-[#461da1] to-[#5a2db6] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg'>
							<span className='flex items-center gap-1'>
								<div className='w-2 h-2 bg-[#ffc884] rounded-full animate-pulse'></div>
								Releasing Soon
							</span>
						</div>
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
							High value community
							building for projects…{' '}
							<br />
						</p>
						<div className='flex items-center gap-2 flex-wrap text-sm mt-4 text-white'>
							<p className='py-1 px-2 bg-[#461da1] rounded-md'>
								Custom Campaigns
							</p>
							<p className='py-1 px-2 bg-[#461da1] rounded-md'>
								Community Growth
							</p>
							<p className='py-1 px-2 bg-[#461da1] rounded-md'>
								Immersive
								Experience
							</p>
						</div>
					</div>
					<div className='bg-[#f7edee] py-7 px-5 sm:px-7 rounded-xl relative overflow-hidden'>
						{/* Releasing Soon Badge */}
						<div className='absolute -top-1 -right-1 bg-gradient-to-r from-[#ff5f6d] to-[#ff7a85] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg'>
							<span className='flex items-center gap-1'>
								<div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
								Releasing Soon
							</span>
						</div>
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
							Evolve through play —
							where web3 versatility
							meets competitive fun.{' '}
							<br />
							Positive-sum games built
							with education at its
							core. <br />
							Real ecosystem onchain
							games tied to your Tess
							Rank.
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
					<div className='bg-[#f6f0fa] py-7 px-5 sm:px-7 rounded-xl relative overflow-hidden'>
						{/* Releasing Soon Badge */}
						<div className='absolute -top-1 -right-1 bg-gradient-to-r from-[#a022f5] to-[#b844f7] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg'>
							<span className='flex items-center gap-1'>
								<div className='w-2 h-2 bg-[#ffc884] rounded-full animate-pulse'></div>
								Releasing Soon
							</span>
						</div>
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
							Next generation creator
							engine…
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
