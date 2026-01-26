import React from 'react';

export default function SkillCard({ skills }) {
	return (
		<section className="resume-section">
			<div className="section-header">
				<h2>Skills</h2>
				<span>5 · Toolbox</span>
			</div>
			<div className="chips">
				{skills.map((s) => (
					<span key={s} className="chip">
						{s}
					</span>
				))}
			</div>
		</section>
	);
}
