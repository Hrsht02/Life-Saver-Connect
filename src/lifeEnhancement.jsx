import "./lifeEnhancement.css";

export default function LifeEnhancement() {
    return (
        <>
            <p id="lifeEnhancement">Life Enhancement</p>
            <div className="lifeEnhancementTools">
                  <a href="https://medicine-chatbot-weld.vercel.app/" className="chatbot-button">
                <div className="chatbot">
                    <img id="medicineChatbot" src="public/medicineChatbot.jpg"  alt="Know Your Medicine" />
                    <p className="sub-head">Know Your Medicine</p>
                </div>
                </a>
                <a href="https://hydration-reminder-system.vercel.app/" className="reminder-button">
    <div className="reminder">
        <img id="hydrationReminder" src="public/hydrationReminder.png" alt="Keep Yourself Hydrated" />
        <p className="sub-head">Keep Yourself Hydrated</p>
    </div>
</a>
    
            </div>
        </>
    );
}
