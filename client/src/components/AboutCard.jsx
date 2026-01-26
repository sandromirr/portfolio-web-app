import React from 'react';

export default function AboutCard({ highlights }) {
	return (
		<section className="resume-section">
			<div className="section-header">
				<h2>About me</h2>
				<div className="section-header-right">
					<span>2 · Stack</span>
				</div>
			</div>
			<p>
				Maker at heart. I craft human-centered experiences leveraging React, Node.js, and thoughtful motion. Recently
				focused on weaving Gemini assistants into real client flows.
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
