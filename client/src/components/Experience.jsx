import React from 'react';

export default function ExperienceList({ experience }) {
	return (
		<section className="resume-section">
			<div className="section-header">
				<h2>Experience</h2>
				<span>3 · Timeline</span>
			</div>
			<div className="timeline">
				{experience.map((item) => (
					<article key={item.company}>
						<header>
							<h3>{item.role}</h3>
							<span>{item.years}</span>
						</header>
						<p className="muted">{item.company}</p>
						<p>{item.summary}</p>
					</article>
				))}
			</div>
		</section>
	);
}
