'use client'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent, timelineOppositeContentClasses} from "@mui/lab";
import React from "react";
import gable from "@/public/image/gable.png";
import ais from "@/public/image/ais.png";
import digile from "@/public/image/digile.png";

interface Experience {
    date: string,
    name: string,
    link: string
    responsibilities: string[]
    image: string []
    project: string []
}

export default function TimelineExperience() {
    const experience: Experience[] = [
        {
            date: "1 APRIL 2020 - APRIL 2023",
            name: "Application Developer | G-ABLE",
            link: 'https://www.g-able.com/',
            responsibilities: [
                "Implement server and setting network architecture",
                "Deploy Application and install necessary tools",
                "Database design and implement",
                "Develop Backend restful API",
                "Develop Web Frontend, Web Admin",
                "Unit test",
                "Maintain the system to smoothly continue",
                "Learning new technology",
            ],
            image: [gable.src], project: [
                "Develop Backend, Design Database and Web admin for Coffee Mobile Ordering Application (แอปพลิเคชั่น สั่งกาแฟ)",
                "Develop Backend, Design Database and Web admin for University Application (แอปพลิเคชั่นสำหรับนักศึกษามหาวิทยาลัย)",
                "Maintain Company SMS backend (ดูแลรักษา SMS ของบริษัท)",
                'งาน presale ศึกษาความเป็นไปได้ด้านเทคโนโลยีของโปรเจคที่ลูกค้าสนใจ'
            ]
        },
        {
            date: "APRIL 2023 - PRESENT",
            name: "Java Developer, Software Developer | Degile (On site AIS)",
            link: 'https://digile.com/',
            responsibilities: ["-"
            ],
            image: [digile.src, ais.src],
            project: ["-"]
        }
    ]
    return <>
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0,
                },
            }}
        >
            {
                experience.map(value => {
                    return <>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                {/*<span className={"text-secondary"}>{value.date}</span>*/}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className={"row"}>
                                    <div className={"col-12"}>
                                        <span className={"text-secondary"}>{value.date}</span>
                                    </div>
                                    <div className={'col-12 mt-2'}>
                                        {value.image.map(value1 => {
                                            // eslint-disable-next-line @next/next/no-img-element
                                            return <img key={value1} src={value1} className={"me-2"} height={30}
                                                        alt={value1}/>
                                        })}
                                    </div>
                                    <div className={"col-12 mt-2"}>
                                        <span className={"text-black fw-bold"}>
                                            <a href={value.link}
                                               target="_blank"
                                               className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                                            {value.name}
                                        </a></span>
                                    </div>
                                    <div className={"col-12 mt-2"}>
                                        <div className="card" style={{}}>
                                            <div className="card-header bg-secondary-subtle">
                                                <strong>Responsibilities</strong>
                                            </div>
                                            <ul className="list-group list-group-flush ">
                                                {value.responsibilities.map(value1 => {
                                                    return <li key={value1}
                                                               className="list-group-item  text-black">{value1}
                                                    </li>
                                                })}
                                            </ul>
                                            <div className="card-header bg-secondary-subtle">
                                                <strong>Projects</strong>
                                            </div>
                                            <ul className="list-group list-group-flush ">
                                                {value.project.map(value1 => {
                                                    return <li key={value1}
                                                               className="list-group-item text-black">{value1}
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </>
                })
            }
        </Timeline>
    </>
}