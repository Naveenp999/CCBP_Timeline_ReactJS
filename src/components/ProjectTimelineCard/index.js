import './index.css'
import { AiFillCalendar } from "react-icons/ai";


const ProjectTimelineCard = props => {
  const {content} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = content
  console.log('content')
  return (
    <div className="item-container">
      <img src={imageUrl} alt={categoryId} className="project-icon" />
      <div className="horizantal">
        <h1 className="title">{projectTitle}</h1>
        <div className="hori">
          <AiFillCalendar className="icon" />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
