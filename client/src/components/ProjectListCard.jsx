import React from 'react';

export default function ProjectListCard() {
	return (
		<section className="resume-section">
			<div className="section-header">
				<h2>Projects</h2>
				<span>4 · Selected builds</span>
			</div>
			<div className="projects-grid">
				<article className="card">
					<div className="card-header">
						<span className="badge">Live</span>
						<span>2026</span>
					</div>
					<h3>Portfolio + Gemini Assistant</h3>
					<p className="muted">
						AI-enhanced portfolio embedded directly inside a DEV post using Google Cloud Run embeds.
					</p>
					<ul>
						<li>Gemini API + Express backend</li>
						<li>Custom prompt grounded in JSON profile</li>
						<li>Responsive React/Vite front-end</li>
					</ul>
				</article>

				<article className="card">
					<div className="card-header">
						<span className="badge neutral">Concept</span>
						<span>2025</span>
					</div>
					<h3>Commerce Ops Dashboard</h3>
					<p className="muted">
						Operational dashboard featuring live sales metrics, AI-generated insights, and workflow automations.
					</p>
					<ul>
						<li>Role-based React app</li>
						<li>Node.js & MongoDB API</li>
						<li>Gemini quick insight cards</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
