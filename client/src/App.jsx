import { useEffect, useState } from 'react';
import CareerGeminiChat from './components/CareerGeminiChat.jsx';
import ExperienceList from './components/Experience.jsx';
import SkillCard from './components/SkillCard.jsx';
import ContactCard from './components/ContactCard.jsx';
import ProjectListCard from './components/ProjectListCard.jsx';
import AboutCard from './components/AboutCard.jsx';

export default function App() {
	const highlights = ['React & Next.js', 'Node.js & Express', 'AI + UX Storytelling', 'Cloud Run & GCP'];
	const experience = [
		{
			company: 'Tech Company',
			role: 'Full-Stack Developer',
			years: '2022 — Present',
			summary: 'Leading modern web builds and integrating AI-assisted features.',
		},
		{
			company: 'Startup Inc.',
			role: 'Product Engineer',
			years: '2020 — 2022',
			summary: 'Rapid prototyping and shipping MVPs in cross-functional pods.',
		},
	];
	const skills = [
		'JavaScript & TypeScript',
		'React, Next.js & Vite',
		'Node.js, Express & REST APIs',
		'PostgreSQL & MongoDB',
		'Cloud Run, Cloud Build & GCP',
		'Gemini API & AI UX',
	];
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<div className="app">
			<div className="split-layout">
        		<aside className="panel chat-panel">
					<CareerGeminiChat />
				</aside>
				<section className="panel resume-panel">
					<header className="resume-hero">
						<div className="resume-hero-top">
							<div>
							<p className="eyebrow">Sandro Mirr · Full-Stack Developer</p>
							<h1>Human-centered engineering fused with Gemini superpowers.</h1>
							<p className="lead">
								I translate ambiguous product briefs into expressive experiences. Frontend craft, resilient Node.js services, and
								AI copilots working in harmony.
							</p>
							</div>
							<button
								type="button"
								className="pill secondary theme-toggle"
								onClick={toggleTheme}
								aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
								title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
							>
								{theme === 'dark' ? '🌞' : '🌙'}
							</button>
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
