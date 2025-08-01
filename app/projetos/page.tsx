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
        <div className="min-h-screen  md:h-screen ">
        <NavBar />
        
        
        <div className="grid sm:grid-cols-2 md:grid-cols-2  gap-10 p-10 lg:pl-30 lg:pr-30">


                <Card>
                    <CardHeader>
                        <CardTitle>Este portifólio!</CardTitle>
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
                </Card>
            </div>
            </div>
        
    );
    
}


