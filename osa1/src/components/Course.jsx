import React from 'react'
import Subcomponents from './Subcomponents'

const Course = ({ courses }) => {

    return (
        <div>
            <div>
                <h1>Web development curriculum</h1>
            </div>
            <div>
                {courses.map((course) => {
                    return <Subcomponents
                        courses={course.parts}
                        header={course.name}
                        key={course.parts.map(id => id.id)}
                    />
                })
                }
            </div>
        </div>

    )
}

export default Course