import './index.css'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {Chrono} from 'react-chrono'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList.map(element => ({title: element.title}))

  const projectCards = timelineItemsList.map(element => 
    element.categoryId !== 'COURSE' ? (
      <div className="item-con">
        <ProjectTimelineCard content={element} key={element.id} />
      </div>
    ) : (
      <div className="item-con">
        <CourseTimelineCard content={element} key={element.id} />
      </div>
    ),
  )

  return (
    <div className="roadmap-bag">
      <h1 className="heading">
        MY JOURNEY OF
        <span className="content-text">CCBP 4.0</span>
      </h1>
      <div className="sub">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            cardBgColor: 'white',
            titleColor: '#0967d2',
          }}
        >
          {projectCards}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
