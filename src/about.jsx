import "./about.css";

export default function About() {
    return (
        <div id="about-container">
            <div className="about-content">
                
                <h2>Life Saver Connect</h2>
                <p>
                    This Life Saver Connect platform combines technology, information, and connectivity 
                    to enhance emergency medical services. By empowering the users with critical data and facilitating 
                    seamless communication, it contributes to saving lives and improving overall healthcare accessibility.
                </p>
                <p id="p2">
                    It is a platform where users can connect to their desired hospital when they are in an emergency 
                    or in any circumstances. Its main aim is to build the connectivity between the user, hospital, 
                    and transportation within no time when they are in emergency.
                </p>
            </div>
            <div className="about-image">
                <img src="/logo.png" alt="Life Saver Connect Logo" />
            </div>
        </div>
    );
}
