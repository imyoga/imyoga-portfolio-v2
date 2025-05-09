import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'
import '../styles/ProjectBuilder.css'
const ProjectBuilder = (props) => {
	let project = props.project

	return (
		<div className='container-project-card'>
			<div className='container-project-details'>
				<h3 className='project-title'>{project.title}</h3>

				<ul className='container-project-technologies'>
					{project.technologies.map((technology, key) => {
						return <li key={key}>{technology}</li>
					})}
				</ul>

				<p className='project-description'>{project.description}</p>

				<p className='project-notes'>Note: {project.note}</p>

				<div className='container-urls'>
					<a target='_blank' rel='noreferrer' href={project.links[1]}>
						{project.links[0]}
					</a>

					{project.links[2] ? (
						<a target='_blank' rel='noreferrer' href={project.links[3]}>
							{project.links[2]}
						</a>
					) : null}
				</div>
			</div>

			<div className='container-youtube'>
				<YoutubeEmbed embedId={project.embedId} />
				<div className='youtube-border'></div>
			</div>
		</div>
	)
}

export default ProjectBuilder
