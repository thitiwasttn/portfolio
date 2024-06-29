import SkillComponent from "@/component/home_component/skill/SkillComponent";

export default function ContentComponent() {
    const listAreaOfExp: string[] = [
        "Backend developer",
        "Web developer",
        "Java developer",
        "Windows server administration",
        "Linux server administration"
    ]
    return <>
        <div className={"profileInfo shadow bg-body-tertiary rounded-4 overflow-auto"}>
            <div className={"container-fluid "}>
                <div className={"row mt-5"}>
                    <div className={"col-12"}>
                        <p className="h4">AREAS OF EXPERTISE</p>
                    </div>
                    <div className={"col-12"}>
                        <ul className="list-group list-group-flush rounded-4">
                            {listAreaOfExp.map(value => {
                                return <li key={value} className="list-group-item">{value}</li>
                            })}
                        </ul>
                    </div>
                </div>


                {/*    skill */}
                <div className={"row mt-3"}>
                    <div className={"col-12"}>
                        <p className="h4">SKILLS</p>
                    </div>
                    <div className={"col-12"}>
                        <SkillComponent/>
                    </div>
                </div>

                <div className={"row mt-5"}>
                    <div className={"col-12"}>
                        <p className="h4">EXPERIENCE</p>
                    </div>
                    <div className={"col-12"}>
                        -
                    </div>
                </div>
            </div>
        </div>
    </>
}