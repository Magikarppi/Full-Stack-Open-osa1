import React from 'react'


const Part = ({ parts, header }) => {
    return (
        <div>
            <h2>{header}</h2>
            <ul>
                {parts.map((part) => {
                    return <li key={part.id}>{part.name} {part.exercises}</li>
                })
                }
            </ul>
        </div>
    )
}

const Content = ({courses, header}) => {
    return (
        <div>
            <Part parts={courses} header={header} />
        </div>
    )
}

const Total = ({courses}) => {
    return (
        <div>
            <p>Total of {courses.reduce((sum, part) => sum += part.exercises, 0)} exercises</p>
        </div>
    )
}

const Subcomponents = ({ courses, header }) => {
    return (
        <div>
            <Content courses={courses} header={header} />
            <Total courses={courses} />
        </div>
    )
}

export default Subcomponents