import React from 'react';
import Header from '../components/header';

function Home() {
  return (
    <section>
        <Header/>
        <main className='font-inter'>
            <section className="bg-[url('/images/header-bg.png')] bg-no-repeat bg-cover bg-center w-full h-[80vh] md:h-screen flex items-center ">
                <article className='flex flex-col items-start lg:px-[6.25rem] px-[1.06rem] lg:w-[60rem] w-[25rem]'>
                    <div className='flex flex-row items-center gap-2 bg-[#6FBE801F] text-[#6FBE80] py-[0.3rem] px-[1.43rem] rounded-full mb-[0.875rem]'>
                        <img src="./images/stethoscope.svg" alt="Stethoscope Icon" />
                        <p className="text-[1rem] font-[500] font-semibold">A Simple Reminder, A Life Saved</p>
                    </div>
                    <h1 className='text-[#002736] font-[600] lg:text-[4.375rem] text-[2rem]'>
                        Your Health Protected, One Reminder at a Time
                    </h1>
                    <p className='text-[#525252] font-[400] lg:text-[1.375rem] text-[0.75rem] lg:w-[37rem] w-[20rem]'>
                        RxReminder is coming soon, the easiest way to track your medications, stay consistent, and protect your health, be the first to know when we launch.
                    </p>
                    <form className="flex items-center bg-[#E0EEF1] rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-[#015777] w-fit lg:mt-[2rem] mt-[1rem]">
                        <input
                            type="email"
                            placeholder="Input Email Address"
                            className="bg-transparent lg:px-[2.1875rem] px-[1.39rem] lg:py-[1.2rem] py-[1rem] outline-none text-sm text-gray-700 placeholder:text-gray-500"
                        />
                        <button
                            type="submit"
                            className="bg-[#015777] text-white px-5 lg:py-3 py-2 text-sm font-medium rounded-full hover:bg-[#01405b] transition-colors lg:mr-[1rem]"
                        >
                            Get Early Access
                        </button>
                    </form>

                </article>
            </section>
            <section className='bg-[#F7F8FA] lg:px-[6.25rem] px-[1.06rem] lg:py-[5rem] py-[2.9rem] flex lg:flex-row flex-col items-center gap-8'>
                <div className='lg:w-[50%] flex flex-row flex-wrap'>
                    <h2 className='font-[600] text-[#002736] text-[2.5rem] mb-[1.3rem] '>
                        Missing a Dose Could Cost More Than You Think
                    </h2>
                    <p className='font-[400] text-[0.9rem] mb-[0.8rem] lg:w-[25rem] w-[20rem]'>
                        Most people don’t realize that forgetting a single medication dose can have devastating consequences. In fact, 1 in 4 hospitalizations could have been prevented if medications were taken correctly.
                    </p>
                    <p className='font-[400] text-[0.9rem] lg:w-[24.5rem] w-[20rem] '>                       
                        Every year, more than 25,000 deaths occur because of missed doses. Forgetfulness might seem harmless, until it leads to serious health crises. RxReminder is designed to change that, protecting you before it’s too late. 
                    </p>
                </div>
                <div>
                    <img src="/images/danger.png" alt="Drugs in tray box" />
                </div>
            </section>
            {/* How it works */}
            <section className='bg-[#F7F8FA] lg:px-[6.25rem] px-[1.06rem] lg:py-[4rem] py-[2.9rem] flex flex-col'>
                <h2 className='font-[600] text-[#001E2A] text-[2.5rem] w-fit m-auto'>
                    How It Works
                </h2>
                <article className='flex flex-row flex-wrap w-fit m-auto mt-[3rem] gap-[1.25rem] justify-center'>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-start lg:w-[18rem]'>
                        <img src="/images/drug.svg" alt="Drug Bottle" />
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Set Up
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            Quickly add your medication, even scan them with your phone for instant setup.
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-start lg:w-[18rem]'>
                        <img src="/images/notification.svg" alt="Notification Icon" />
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Get Reminded
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            Receive smart, timely notifications so you never miss a critical dose.
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-start lg:w-[18rem]'>
                        <img src="/images/connect.svg" alt="Connect Icon" />
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Stay Connected
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                        If you miss a dose, loved ones or caregivers are immediately notified.
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-start lg:w-[18rem]'>
                        <img src="/images/track.svg" alt="Track Icon" />
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Track Progress
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            Set your medication history, stay consistent and celebrate your health milestones.
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-3xl lg:px-[6rem] px-[1.5rem] lg:py-[3rem] py-[2rem] items-start lg:w-[37.25rem]'>
                        <p className='text-center text-[1.5rem] font-[600]'>
                            RxReminder works quietly in the background, so you can live your life, not worry about it.
                        </p>
                    </div>
                </article>
            </section>
            {/* Why choose us */}
            <section className='bg-[#F7F8FA] lg:px-[6.25rem] px-[1.06rem] lg:py-[4rem] py-[2.9rem] flex flex-col'>
                <h2 className='font-[600] text-[#001E2A] text-[2.5rem] w-fit m-auto'>
                    Why choose us
                </h2>
                <article className='flex flex-row flex-wrap w-fit m-auto mt-[3rem] gap-[1.25rem] justify-center'>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-center text-center lg:w-[18rem]'>
                        <img src="/images/saver.svg" alt="Life saver icon" className='w-fit m-auto' />
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            More Than a Reminder
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            It’s a life-saving tool designed to protect your health, not just beep at you
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-center text-center lg:w-[18rem]'>
                        <img src="/images/scan.svg" alt="Scan Icon" className='w-fit m-auto' />
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Scan Meds Instantly
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            Simply scan your medications to load complete drug information
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-center text-center lg:w-[18rem]'>
                        <img src="/images/label.svg" alt="Label tag Icon" className='w-fit m-auto'/>
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Name Your Pills Your Way
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            Rename medications in a way you recognize, no confusion
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-center text-center lg:w-[18rem]'>
                        <img src="/images/alert.svg" alt="Alert Icon" className='w-fit m-auto'/>
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Caregiver Alerts
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            If you miss a dose, your loved ones are alerted immediately
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-center text-center lg:w-[18rem]'>
                        <img src="/images/watch.svg" alt="SmartWatch Icon" className='w-fit m-auto'/>
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Smartwatch Ready
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            Receive reminders on your watch, even without carrying your phone
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-2xl px-[1.5rem] py-[2rem] items-center text-center lg:w-[18rem]'>
                        <img src="/images/predict.svg" alt="Predict Icon" className='w-fit m-auto'/>
                        <h3 className='font-[600] text-[#001E2A] text-[1.3rem] mt-[0.6rem] mb-[0.4rem]'>
                            Predict Problems Early
                        </h3>
                        <p className='font-[400] text-[0.8rem] '>
                            Get AI-powered insights to catch health risks before they happen
                        </p>
                    </div>
                </article>
            </section>
        </main>
    </section>
  );
}

export default Home;
