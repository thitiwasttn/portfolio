import Image from "next/image";
import ProfileInfoComponent from "@/component/home_component/ProfileInfoComponent";
import ContentComponent from "@/component/home_component/ContentComponent";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 height-100 p-4">
                        <ProfileInfoComponent/>
                    </div>
                    <div className="col-md-9 height-100 p-4">
                        <ContentComponent/>
                    </div>
                </div>
            </div>
        </>
    );
}
