import AboutMe from "@/app/components/AboutMe";
import EducationSection from "@/app/components/EducationSection";
import Projetos from "@/app/components/Projetos";


import { ModeToggle } from "@/app/components/mode-toggle";
import NavBar, { DesktopNavbar, MobileNavbar } from "./components/NavBar";
export default function Home() {
  return (
    <main className="min-h-screen md:h-screen flex flex-col bg-white dark:bg-neutral-900 pb-16 sm:pb-0">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-9">
       
				{/* Left Column - Profile */}
				<div className=" md:col-span-2 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 md:flex md:items-center">
					<MobileNavbar />
					<AboutMe />
           
				</div>

				

				{/* Right Column - Skills and Experience */}
				<div className="md:col-span-7  flex flex-col md:justify-center lg:items-start lg:pl-25">
				
				
				<div className="">
					<DesktopNavbar />
				</div>
					{/* Skills Section */}
				
					
					<div className="">
            <Projetos />
						
					</div>

					{/* Experience Section */}
					<div>
						<EducationSection />
					</div>
				</div>
        
			</div>
     
      
		</main>
  );
}
