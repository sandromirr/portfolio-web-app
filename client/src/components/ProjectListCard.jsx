import React from 'react';

export default function ProjectListCard() {
	return (
		<section className="resume-section">
			<div className="section-header">
				<h2>Projects</h2>
				<span>4 · Selected work</span>
			</div>
			<div className="projects-grid">
				<article className="card">
					<div className="card-header">
						<span className="badge">Live</span>
						<span>2019</span>
					</div>
					<h3>Student Portfolio Management System</h3>
					<p className="muted">
						Web application for managing and showcasing student portfolios used in an educational setting.
					</p>
					<ul>
						<li>C#, ASP.NET MVC, and Microsoft SQL Server backend</li>
						<li>Designed and implemented core backend functionality</li>
						<li>Delivered a production-ready system within a short timeframe</li>
					</ul>
				</article>

				<article className="card">
					<div className="card-header">
						<span className="badge neutral">Concept</span>
						<span>Teaching</span>
					</div>
					<h3>Programming Courses & Syllabus</h3>
					<p className="muted">
						Designing and teaching programming courses for new developers at GITA and Mziuri Computer School.
					</p>
					<ul>
						<li>Created Python course syllabus from scratch</li>
						<li>Taught Python, C++, algorithms, and data structures</li>
						<li>Mentored students on best practices and problem-solving</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
