import React from 'react'

const Section = ({ data }) => {
    return (
        <section id={data.id}>
            <h2 className='content__heading'>{data.title.toUpperCase()}</h2>
            <div className="content__image">
                <img src={data.erDiagram} alt={data.title} />
            </div>
            <caption>FIG: ER Diagram of {data.title}</caption>
            <div className="content">
                <div className="entities__container">
                    <h3>Entities</h3>
                    <ul className="entities">
                        {data.entities.map((entity, entityIndex) => {
                            return <li key={entityIndex}>{entity}</li>
                        })}
                    </ul>
                </div>
                <div className="relations__container">
                    <h3>Relations</h3>
                    <ul className="relations">
                        {data.relations.map((relation, relationIndex) => {
                            return (
                                <li key={relationIndex}>
                                    <strong>{relation.relationTitle}</strong> : {relation.relation}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {
                    data.queryFile.length > 0 ? 
                    <div className="query__container">
                        <h3>Query File Link</h3>
                        <a href={data.queryFile} className='btn' target='__blank'>Link To SQL files</a>
                    </div>
                    : ""
                }
            </div>
            {
                data.images.length > 0 ?
                    <div>
                        <h2>Schemas</h2>
                        <div className="images">
                            {data.images.map((image, imageIndex) => {
                                return (
                                    <img src={image} key={imageIndex} alt="screenshot" />
                                )
                            })}
                        </div>
                    </div>
                : ""
            }
            <hr />
        </section>
    )
}

export default Section