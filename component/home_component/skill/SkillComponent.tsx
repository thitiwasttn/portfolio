'use client'
import Accordion from 'react-bootstrap/Accordion';
import {SkillM} from "@/app/modal/SkillM";
import {getSkillService} from '../ProfileService'



export default function SkillComponent() {
    const skills: SkillM[] = getSkillService();
    return (
        <>

            <Accordion alwaysOpen>
                {skills.map((value) => {
                    return (
                        <Accordion.Item key={value.value} eventKey={value.value}>
                            <Accordion.Header>{value.display}</Accordion.Header>
                            <Accordion.Body>
                                <div className={"row"}>
                                    {value.details?.map(value1 => {
                                        return <div key={value1.title} className={"col-sm-auto col-md-4 col-xl-4 mt-2"}>
                                            <div className="card h-100">
                                                <div className="card-header">
                                                    <strong>{value1.title}</strong>
                                                </div>
                                                {/*<div className="card-body">
                                                    <p className="card-text">{value1.detail}</p>
                                                </div>*/}
                                                <ul className="list-group list-group-flush">
                                                    {value1.framework.map(value2 => {
                                                        return <li key={value2}
                                                                   className="list-group-item">{value2}</li>
                                                    })}
                                                </ul>
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