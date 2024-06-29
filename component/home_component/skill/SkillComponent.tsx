'use client'
import Accordion from 'react-bootstrap/Accordion';

interface SkillM {
    display: string;
    value: string;
    details: Detail[]
}

interface Detail {
    title: string
    detail: string
    framework: string[]
}

export default function SkillComponent() {
    const skills: SkillM[] = [
        {
            display: "Programming skills",
            value: "programmingSkill",
            details: [
                {
                    title: "Expert Java",
                    detail: "-",
                    framework: [
                        "Spring",
                        "Spring boot"
                    ]
                },
                {
                    title: "Expert SQL",
                    detail: "-",
                    framework: ["-"]
                },
                {
                    title: "Expert JavaScript, TypeScript",
                    detail: "-",
                    framework: [
                        "React",
                        "Next.js",
                        "Angular",
                        "Jquery"
                    ]
                },
                {
                    title: "HTML, CSS",
                    detail: "-",
                    framework: ["Bootstrap CSS framework"]
                },
                {
                    title: "Python",
                    detail: "-",
                    framework: ["-"]
                },
                {
                    title: "Machine Learning",
                    detail: "Basic Predictive Machine Learning",
                    framework: ["-"]
                },
                {
                    title: "PHP",
                    detail: "-",
                    framework: ["-"]
                }
            ]
        }, {
            display: "Database",
            value: "database",
            details: [
                {
                    title: "MySQL",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "PostgresSQL",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Oracle",
                    detail: "",
                    framework: ["-"]
                },
            ]
        }, {
            display: "OS",
            value: "os",
            details: [
                {
                    title: "Windows Server",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Linux Server",
                    detail: "",
                    framework: ["Ubuntu"]
                }
            ]
        }, {
            display: "Tools",
            value: "tool",
            details: [
                {
                    title: "Docker",
                    detail: "",
                    framework: ["Docker Compose"]
                },
                {
                    title: "K8s",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "GCP",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Web Server",
                    detail: "",
                    framework: ["Nginx", "Apache"]
                },
                {
                    title: "CMS",
                    detail: "",
                    framework: ["Strapi"]
                },
                {
                    title: "Source Control",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "Jetbrain",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "VMware sphere",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "ELK Stack",
                    detail: "",
                    framework: ["-"]
                },
                {
                    title: "AWS",
                    detail: "",
                    framework: ["ECS", "EC2"]
                }
            ]
        }, {
            details: [
                {
                    detail: "",
                    framework: ["-"],
                    title: "Windows command and Linux command"
                },
                {
                    detail: "",
                    framework: ["-"],
                    title: "Knowledge in network architecture and server infrastructure"
                },
                {
                    detail: "",
                    framework: ["-"],
                    title: "Video Streaming Server"
                },
                {
                    detail: "",
                    framework: ["-"],
                    title: "VPN server"
                }
            ], display: "Other", value: "Other"
        }
    ]

    return (
        <>

            <Accordion defaultActiveKey={!!skills ? skills.at(0)?.value : ''} alwaysOpen>
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