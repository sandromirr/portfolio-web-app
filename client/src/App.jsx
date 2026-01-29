import { useEffect, useState } from 'react';
import CareerGeminiChat from './components/CareerGeminiChat.jsx';
import ExperienceList from './components/Experience.jsx';
import SkillCard from './components/SkillCard.jsx';
import ContactCard from './components/ContactCard.jsx';
import ProjectListCard from './components/ProjectListCard.jsx';
import AboutCard from './components/AboutCard.jsx';

export default function App() {
	const [theme, setTheme] = useState(() => {
		if (typeof window === 'undefined') return 'dark';
		return window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
	});

	useEffect(() => {
		const root = document.documentElement;
		root.dataset.theme = theme;
		if (document.body) {
			document.body.dataset.theme = theme;
		}
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const highlights = ['.NET & C#', 'Distributed systems', 'Search & messaging', 'Teaching & mentoring'];
	const experience = [
		{
			company: 'HR.GE',
			role: 'Senior Software Engineer',
			years: '2023 — Present',
			summary: 'Designing and maintaining scalable backend services with .NET, Elasticsearch, Kafka, and RabbitMQ.',
		},
		{
			company: 'HR.GE',
			role: 'Software Engineer',
			years: '2021 — 2022',
			summary: 'Built and improved internal web applications with ASP.NET MVC and SQL Server.',
		},
		{
			company: 'GITA',
			role: 'Course Instructor',
			years: '2024 — Present',
			summary: 'Teaching programming fundamentals, algorithms, and data structures to new developers.',
		},
		{
			company: 'Mziuri Computer School',
			role: 'Course Instructor',
			years: '2019 — Present',
			summary: 'Created Python syllabus and taught Python, C++, and core programming concepts.',
		},
		{
			company: 'GeoLab',
			role: 'Software Developer',
			years: '2018 — 2019',
			summary: 'Developed educational web applications, including a student portfolio system.',
		},
	];
	const skills = [
		'C# & .NET',
		'ASP.NET MVC',
		'Microsoft SQL Server',
		'Elasticsearch, Kafka & RabbitMQ',
		'MongoDB & relational databases',
		'JavaScript, HTML & CSS',
		'Python & Flask',
		'Algorithms & data structures',
	];

	return (
		<div className="app">
			<button
				type="button"
				className="theme-toggle"
				onClick={toggleTheme}
				aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
			>
				{theme === 'light' ? '🌙' : '☀️ '}
			</button>
			<div className="split-layout">	
				<aside className="panel chat-panel">
					<CareerGeminiChat />
				</aside>
				<section className="panel resume-panel">
					<header className="resume-hero">
						<div className="resume-hero-top">
							<div>
							<p className="eyebrow">Sandro Mirianashvili · Senior Software Engineer</p>
							<h1>Backend-heavy systems with a focus on clean architecture.</h1>
							<p className="lead">
								Senior Software Engineer with 6+ years building scalable .NET services, search-heavy systems, and educational
								platforms — with a strong passion for teaching and mentoring.
							</p>
							</div>
						</div>
					</header>

					<div className="resume-grid">
						<AboutCard highlights={highlights} />
						<ExperienceList experience={experience} />
						<ProjectListCard />
						<SkillCard skills={skills} />
						<ContactCard />
					</div>
				</section>
			</div>
		</div>
	);
}