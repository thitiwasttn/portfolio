'use client'
import Accordion from 'react-bootstrap/Accordion';

interface SkillM {
    display: string;
    value: string;
    details?: Detail[]
}

interface Detail {
    title: string
    detail: string
}

export default function SkillComponent() {
    const skills: SkillM[] = [
        {
            display: "Programming skills",
            value: "programmingSkill",
            details: [
                {
                    title: "Expert Java",
                    detail: "Spring, Spring boot"
                },
                {
                    title: "Expert SQL",
                    detail: "-"
                },
                {
                    title: "Expert JavaScript, TypeScript",
                    detail: "React, Next.js, Angular, Jquery"
                },
                {
                    title: "Python",
                    detail: "-"
                },
                {
                    title: "HTML, CSS",
                    detail: "Bootstrap CSS framework"
                },
                {
                    title: "Basic Predictive Machine Learning",
                    detail: "-"
                },
                {
                    title: "PHP",
                    detail: "-"
                }
            ]
        }, {
            display: "Database",
            value: "database",
            details: [
                {
                    title: "MySQL",
                    detail: "-"
                },
                {
                    title: "PostgresSQL",
                    detail: "-"
                },
                {
                    title: "Oracle",
                    detail: "-"
                },
            ]
        }, {
            display: "OS", value: "os",
        }, {
            display: "Tools", value: "tool",
        }
    ]

    return (
        <>

            <Accordion defaultActiveKey={!!skills ? skills.at(0)?.value : ''}>
                {skills.map((value) => {
                    return (
                        <Accordion.Item key={value.value} eventKey={value.value}>
                            <Accordion.Header>{value.display}</Accordion.Header>
                            <Accordion.Body>
                                <div className={"row"}>
                                    {value.details?.map(value1 => {
                                        return <div key={value1.title} className={"col-sm-auto col-md-4 col-xl-4 mt-2"}>
                                            <div className="card h-100">
                                                <div className="card-body">
                                                    <h6 className="card-title">{value1.title}</h6>
                                                    <p className="card-text">{value1.detail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>

            {/*<Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>*/}
        </>
    );
}