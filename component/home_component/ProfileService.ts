import {SkillM} from "@/app/modal/SkillM";
import {Experience} from "@/app/modal/ExperienceM";
import gable from "@/public/image/gable.png";
import digile from "@/public/image/digile.png";
import ais from "@/public/image/ais.png";
import {ProfileInfoM} from "@/app/modal/ProfileM";


export function getListAreaOfExp(): string[] {
    return [
        "Backend developer",
        "Web developer",
        "Java developer",
        "Windows server administration",
        "Linux server administration"
    ];
}


export function getLastUpdate(): string {
    return "2024 June"
}


export function getLinkCV(): string {
    return "https://drive.google.com/file/d/1ID_sNAynq6y8GHXasc1mPi8l2F_jSEND/view?usp=drive_link";
}

export function getProfile(): ProfileInfoM {
    return {
        email: "twopee26@gmail.com", name: "Thitiwas Nupan", rolePosition: "Software Developer", telno: "094-251-8661"
    }
}

export function getExperience(): Experience[] {
    return [
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
            responsibilities: [
                "Receive requirements form user and convert to development task",
                "Estimate task to develop time",
                "Design Database structure",
                "Develop software (Backend, Frontend, Server Task)",
                "Deploy software to Development Server & Staging Server",
                "Diagnosis & fix if any defects or issues from Production",
                "Support staff & team",
                "Communicate between user & development team",
                "Support deployment software to production"
            ],
            image: [digile.src, ais.src],
            project: [
                "Internal 6 Software for engineers",
                "SMS Software for AIS activities"
            ]
        }
    ]
}


export function getSkillService(): SkillM[] {
    return [
        {
            display: "Programming skills",
            value: "programmingSkill",
            details: [
                {
                    title: "Expert Java",
                    detail: "-",
                    framework: [
                        "Spring",
                        "Spring boot",
                        "Spring Reactive",
                        "Java EE"
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
                    framework: [
                        "Bootstrap CSS framework",
                        "Prime NG"
                    ]
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
        },

        {
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
        },
        {
            details: [
                {
                    detail: "",
                    framework: [
                        "Very good communication",
                        "Can explain well",
                        "Easy to understand",
                        "Fast learning"
                    ],
                    title: "Communication"
                }, {
                    detail: "",
                    framework: [
                        "Task splitting",
                        "Estimate time task"
                    ],
                    title: "Management Skill"
                }
            ], display: "Soft Skill", value: "Soft Skill"
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
                },
                {
                    detail: "", framework: [
                        "HTTP",
                        "REST Service",
                        "Web socket",
                        "Remote EJB",
                        "Video Steaming HLS"
                    ],
                    title: "Protocol"
                }
            ], display: "Other", value: "Other"
        }
    ]
}