import './ProfileInfoComponent.css'
import avatar from '@/public/image/avatar.jpg'
import home from '@/public/image/home.png'
import HomeIcon from "@/component/home_component/HomeIcon";
import thailandFlag from '@/public/image/thailand.png'
import emailIcon from '@/public/image/email.png'
import telephoneIcon from '@/public/image/telephone.png'
import SocialMediaButtons from "@/component/home_component/SocialMediaButtons";


export default function ProfileInfoComponent() {

    const name: string = 'Thitiwas Nupan'
    const rolePosition: string = 'Software Developer '
    return (
        <>
            <div className={"profileInfo shadow bg-body-tertiary rounded"}>
                <div className={"container "}>
                    <div className={"row mt-5"}>
                        <div className={"col-12"}>
                            <img src={avatar.src} className="rounded mx-auto d-block" alt="..."/>
                        </div>
                        <div className={"col-12 mt-3"}>
                            <span className="fs-3 d-flex justify-content-center">{name}</span>
                        </div>
                        <div className={"col-12 mt-2"}>
                            <span
                                className="fs-5 d-flex justify-content-center fst-italic text-body-secondary">{rolePosition}</span>
                        </div>
                        <div className={"col-12"}>
                            <hr/>
                        </div>
                        <div className={"col-12 mt-2"}>
                            <div className={"d-flex align-items-center"}>
                                <span className={"ms-3 me-2"}>
                                    <img src={home.src} height={16} width={16} alt=""/>
                                </span>
                                <span className={"me-2"}>Bangkok, Thailand</span>
                                <img src={thailandFlag.src} height={16} width={16} alt=""/>
                            </div>
                        </div>

                        <div className={"col-12 mt-2"}>
                            <div className={"d-flex align-items-center "}>
                                <img className={"ms-3 me-2"} src={emailIcon.src} height={17} width={17} alt=""/>
                                <span className={"me-2"}>thitiwas.nn@gmail.com</span>
                            </div>
                        </div>

                        <div className={"col-12 mt-2"}>
                            <div className={"d-flex align-items-center "}>
                                <img className={"ms-3 me-2"} src={telephoneIcon.src} height={17} width={17} alt=""/>
                                <span className={"me-2"}>094-251-8661</span>
                            </div>
                        </div>
                        <SocialMediaButtons/>
                    </div>
                </div>

            </div>
        </>
    )
}