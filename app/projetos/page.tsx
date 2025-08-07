import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import NavBar, { DesktopNavbar, MobileNavbar } from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { ModeToggle } from "../components/mode-toggle";

export default function Home(){
    const skills = [
		{
			name: 'Portifolio',
			tech: ['TypeScript', 'Python', 'Go', 'C', 'Java'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3" />
				</svg>
			),
		},
    ];
    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 pb-16 sm:pb-0 overflow-y: scroll">

        
            <div className="flex-1 grid grid-cols-1 md:grid-cols-5">

				<div className=" md:col-span-1 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 md:flex md:items-center">
					<MobileNavbar />
					<div className='absolute top-0 hidden md:block '>
                                            <ModeToggle />
                                        </div>
           
				</div>

            	{/* Right Column - Skills and Experience */}
				<div className="md:col-span-4  flex flex-col  md:justify-center lg:items-start lg:pl-15 pb-1">
                    <div className="relative  ">
					    <DesktopNavbar />
				    </div>
                    <div className=" ">
                        <div className="grid  sm:grid-cols-2  md:grid-cols-2 md:grid  gap-5  p-5 lg:pr-30  ">

                            
                            <CardSpotlight>
                                
                                <CardHeader>
                                    
                                    <CardTitle>Este portifólio!
                                        
                                    </CardTitle>
                                    <CardAction className="hover:text-fuchsia-600 bold">Leia mais!</CardAction>
                                </CardHeader>
                                <CardContent>
                                    
                                    <CardDescription>O primeiro projeto adicionado nesta lista será o site no qual você está lendo isso!</CardDescription>

                                
                                </CardContent>
                                <CardFooter>
                                    
                                    
                                    <div className="flex flex-wrap gap-1.5">
                                            
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Typescript
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            React
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Nextjs
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Tailwind
                                        </span>
                                            
                                        </div>
                                </CardFooter>
                            </CardSpotlight>
                
                            <CardSpotlight>
                                
                                <CardHeader>
                                    
                                    <CardTitle>Este portifólio!
                                        
                                    </CardTitle>
                                    <CardAction className="hover:text-fuchsia-600 bold">Leia mais!</CardAction>
                                </CardHeader>
                                <CardContent>
                                    
                                    <CardDescription>O primeiro projeto adicionado nesta lista será o site no qual você está lendo isso!</CardDescription>

                                
                                </CardContent>
                                <CardFooter>
                                    
                                    
                                    <div className="flex flex-wrap gap-1.5">
                                            
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Typescript
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            React
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Nextjs
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Tailwind
                                        </span>
                                            
                                        </div>
                                </CardFooter>
                            </CardSpotlight>

                                    
                            <CardSpotlight>
                                
                                <CardHeader>
                                    
                                    <CardTitle>Este portifólio!
                                        
                                    </CardTitle>
                                    <CardAction className="hover:text-fuchsia-600 bold">Leia mais!</CardAction>
                                </CardHeader>
                                <CardContent>
                                    
                                    <CardDescription>O primeiro projeto adicionado nesta lista será o site no qual você está lendo isso!</CardDescription>

                                
                                </CardContent>
                                <CardFooter>
                                    
                                    
                                    <div className="flex flex-wrap gap-1.5">
                                            
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Typescript
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            React
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Nextjs
                                        </span>
                                        <span 								
                                            className="px-2.5 py-1 text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                                            Tailwind
                                        </span>
                                            
                                        </div>
                                </CardFooter>
                            </CardSpotlight>



                        </div>
                    </div>
                </div>
            
        </div>
        </main>
        
    );
    
}


