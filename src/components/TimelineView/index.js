// Write your code here

import {chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styled.components'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.category === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}

export default TimelineView
