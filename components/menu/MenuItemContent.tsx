
interface ContentProps {
    tittle: String;
    description: String;
}

interface MenuItemContentProps {
    tittle: String;
    content: ContentProps[];
}


export default function MenuItemContent(content: MenuItemContentProps) {
    return (
        <div>
            <h1 className="text-2xl">{content.tittle}</h1>
            {content.content.map((item, index) => (
                <div key={index}>
                    <p className="pt-4 text-sky-700 underline hover:underline-offset-0">{item.tittle}</p>
                    <p>{item.description}</p>
                </div>
            ))}


            {/* <div>
                <p>Web App Firewall</p>
                <p>Reduce complexity and enforce consistent app security policies across clouds, on-prem and edge locations</p>
            </div>
            <div>
                <p>DDoS Protection</p>
                <p>Mitigate app-based (Layer 7) and volumetric (Layer 3) distributed denial of service (DDoS) attacks</p>
            </div>
            <div>
                <p>Bot Defense</p>
                <p>Detect and mitigate malicious bot attacks in real-time while ensuring an optimal user experience</p>
            </div>
            <div>
                <p>API Security</p>
                <p>Automatically discover API endpoints, allow legitimate transactions and monitor for anomalous behavior</p>
            </div>
            <div>
                <p>Client-Side Defense</p>
                <p>Protect customer credentials, financial details and PII against client-side supply chain attacks.</p>
            </div>
            <div>
                <p>Web App Scanning</p>
                <p>Dynamically scan your external attack surface. Uncover vulnerabilities with automated penetration testing of web apps and APIs.</p>
            </div> */}
        </div>
    );
}