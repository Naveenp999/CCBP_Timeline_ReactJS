import { AiFillClockCircle } from "react-icons/ai";
import './index.css'

const CourseTimelineCard = props => {
  const {content} = props
  const {id, categoryId, title, courseTitle, description, duration, tagsList} =
    content
  return (
    <div className="item-container">
      <div className="horizantal">
        <h1 className="title">{courseTitle}</h1>
        <div className="hori">
          <AiFillClockCircle className="icon" />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="features-container">
        {tagsList.map(element => (
          <p className="feature" key={element.id}>
            {element.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
