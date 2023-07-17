import React from 'react'

const Section = ({ data }) => {
    console.log(data[0].erDiagram);
    // {
    //     id: 'bank-ms',
    //     title: "Bank Management System",
    //     erDiagram: '/images/Bank Management System ERD.png',
    //     entities: ['Customer', 'Account', 'Transaction', 'Branch', 'Employee'],
    //     relations: [
    //       {
    //         relationTitle: "Cutomer - Account",
    //         relation: "One to Many"
    //       },
    //       {
    //         relationTitle: "Account - Transaction",
    //         relation: "One to Many"
    //       },
    //       {
    //         relationTitle: "Account - Branch",
    //         relation: "Many to One"
    //       },
    //       {
    //         relationTitle: "Branch - Employee",
    //         relation: "One to Many"
    //       }
    //     ],
    //     images: []
    //   },
    return (
        <section id={data.id}>
            <h2 className='content__heading'>{data[0].title.toUpperCase()}</h2>
            <div className="content__image">
                <img src={data[0].erDiagram} alt={data[0].title} />
            </div>
            <caption>FIG: ER Diagram of {data[0].title}</caption>
            <div className="content">
                <div className="entities__container">
                    <h3>Entities</h3>
                    <ul className="entities">
                        {data[0].entities.map((entity, entityIndex) => {
                            return <li key={entityIndex}>{entity}</li>
                        })}
                    </ul>
                </div>
                <div className="relations__container">
                    <h3>Relations</h3>
                    <ul className="relations">
                        {data[0].relations.map((relation, relationIndex) => {
                            return (
                                <li key={relationIndex}>
                                    <strong>{relation.relationTitle}</strong> : {relation.relation}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default Section