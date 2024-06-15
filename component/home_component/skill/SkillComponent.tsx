'use client'
import Accordion from 'react-bootstrap/Accordion';

interface SkillM {
    display: string;
    value: string;
    details?: Detail[]
}

interface Detail {
    value: string
}

export default function SkillComponent() {
    const skills: SkillM[] = [{
        display: "Programming skills", value: "programmingSkill",
        details: [
            {value: "Expert Java (spring, spring boot)"},
            {value: "Expert SQL"},
            {value: "Expert JavaScript, TypeScript (React, Angular, Jquery)"}
        ]
    }, {
        display: "Database", value: "database",
    }, {
        display: "OS", value: "os",
    }, {
        display: "Tools", value: "tool",
    }]

    return (
        <>

            <Accordion defaultActiveKey={!!skills ? skills.at(0)?.value : ''}>
                {skills.map((value) => {
                    return (
                        <Accordion.Item key={value.value} eventKey={value.value}>
                            <Accordion.Header>{value.display}</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.

                                <div className={"row"}>
                                    <ul className="list-group list-group-horizontal flex-fill list-group-numbered">
                                        <li className="col list-group-item">An item</li>
                                        <li className="col list-group-item">A second item</li>
                                        <li className="col list-group-item">A third item</li>
                                        <li className="col list-group-item">A second item</li>
                                        <li className="col list-group-item">A third item</li>
                                        <li className="col list-group-item">A second item</li>
                                        <li className="col list-group-item">A third item</li>
                                    </ul>
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