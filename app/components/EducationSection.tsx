const EducationSection = () => {
	const experiences = [
		{
			role: 'Bacharelado em Ciência da Computação',
			company: 'USP - FFCLRP',
			period: '2023 - Presente',
			highlights: 'Curso generalista que provê conhecimentos teóricos e práticos gerais em Ciência da Computação, possuindo foco pessoal em desenvolvimento de projetos com IA, ciência e análise de dados, com o apoio de matérias optativas.',
		},
		
	];

	return (
		<div className="py-6 bg-white dark:bg-neutral-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-neutral-900 dark:text-white text-center md:text-left">Educação</h3>
					<div className="h-px w-full bg-neutral-200 dark:bg-neutral-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-neutral-200 dark:border-neutral-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-neutral-900 dark:text-white">{exp.role}</h4>
										<span className="text-sm text-neutral-500 dark:text-neutral-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{exp.company}</p>
									<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EducationSection;