import React from 'react';

export default function AboutCard({ highlights }) {
	return (
		<section className="resume-section">
			<div className="section-header">
				<h2>About me</h2>
				<div className="section-header-right">
					<span>2 · Profile</span>
				</div>
			</div>
			<p>
				Senior Software Engineer based in Tbilisi, Georgia, focused on backend-heavy systems, clean architecture, and
				scalable web applications. I enjoy working with .NET, search technologies, and helping engineers grow through
				mentoring and teaching.
			</p>
			<div className="chips">
				{highlights.map((item) => (
					<span key={item} className="chip">
						{item}
					</span>
				))}
			</div>
		</section>
	);
}
