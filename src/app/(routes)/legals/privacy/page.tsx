import Wrapper from "@/components/common/wrapper";
import Cta from "@/sections/cta";
import { File } from "lucide-react";
import Image from "next/image";

const PrivacyPolicyPage = () => {
    return (
        <div>
            <section className=" w-full h-fit min-h-screen mb-20">
                <Wrapper className="px-2 md:px-6 w-full h-full">
                    <div className=" h-full w-full relative flex flex-col items-center pt-20">
                        <span className=" bg-white text-primary rounded-full pl-2 py-1.5 pr-3 inline-flex items-center gap-2">
                            <File  className=" size-5" />
                            <p className=" text-foreground">Legals</p>
                        </span>
                        <h1 className=" mt-2 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center">
                            Privacy Policy
                        </h1>
                        <p className="px-8 md:px-0 mt-2 text-center text-base text-foreground opacity-70">
                            Last Updated - June 06, 2025
                        </p>

                        <div className=" mt-12 max-w-3xl text-base">
                            <p>
                                This Privacy Notice for Lexos Inc. (doing business as Lexos) (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
                            </p>
                            <ul className="list-disc list-inside pl-5 my-4">
                                <li>
                                    Visit our website at <a href="https://lexosmove.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://lexosmove.com/</a>, or any website of ours that links to this Privacy Notice
                                </li>
                                <li>
                                    Use Lexos. Lexos creates AI-generated inventory lists based on photos of user&apos;s belongings to enhance moving services and experiences.
                                </li>
                                <li>
                                    Engage with us in other related ways, including any sales, marketing, or events
                                </li>
                            </ul>
                            <p>
                                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@lexosmove.com.
                            </p>
                        </div>

                        <div className="max-w-3xl mt-12">
                            <h2 className="text-xl font-semibold text-primary mb-4">SUMMARY OF KEY POINTS</h2>
                            <p className="mb-4">
                                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href="#table-of-contents" className="text-primary hover:underline">table of contents</a> below to find the section you are looking for.
                            </p>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">What personal information do we process?</h3>
                                <p>
                                    When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#personalinfo" className="text-primary hover:underline">personal information you disclose to us</a>.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">Do we process any sensitive personal information?</h3>
                                <p>
                                    Some of the information may be considered &quot;special&quot; or &quot;sensitive&quot; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">Do we collect any information from third parties?</h3>
                                <p>
                                    We do not collect any information from third parties.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">How do we process your information?</h3>
                                <p>
                                    We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#infouse" className="text-primary hover:underline">how we process your information</a>.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">In what situations and with which types of parties do we share personal information?</h3>
                                <p>
                                    We may share information in specific situations and with specific categories of third parties. Learn more about <a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#whoshare" className="text-primary hover:underline">when and with whom we share your personal information</a>.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">How do we keep your information safe?</h3>
                                <p>
                                    We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#infosafe" className="text-primary hover:underline">how we keep your information safe</a>.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">What are your rights?</h3>
                                <p>
                                    Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#privacyrights" className="text-primary hover:underline">your privacy rights</a>.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-1">How do you exercise your rights?</h3>
                                <p>
                                    The easiest way to exercise your rights is by submitting a <a href="https://app.termly.io/notify/3e7aab22-908a-499c-a306-a2b52c75f23d" className="text-primary hover:underline">data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                                </p>
                            </div>

                            <p>
                                Want to learn more about what we do with any information we collect? <a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#toc" className="text-primary hover:underline">Review the Privacy Notice in full</a>.
                            </p>
                        </div>



                        <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt="Background" />
                    </div>
                </Wrapper>
            </section>
            <section>
                <Wrapper className=" max-w-3xl md:px-0 px-0">
                    <div className="my-8">
                        <h2 id="what-information-collect" className="text-2xl font-semibold mb-3 text-primary">1. WHAT INFORMATION DO WE COLLECT?</h2>

                        <h3 id="personal-information-disclose" className="text-xl font-semibold mb-2 mt-4">Personal information you disclose to us</h3>
                        <p className="mb-4">
                            <strong>In Short:</strong> We collect personal information that you provide to us.
                        </p>
                        <p className="mb-4">
                            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                        </p>
                        <p className="mb-2">
                            <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>names</li>
                            <li>phone numbers</li>
                            <li>email addresses</li>
                            <li>usernames</li>
                            <li>passwords</li>
                            <li>mailing addresses</li>
                            <li>job titles</li>
                        </ul>
                        <p className="mb-4">
                            <strong>Sensitive Information.</strong> We do not process sensitive information.
                        </p>
                        <p className="mb-4">
                            <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice link(s) here: <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://stripe.com/gb/privacy</a>.
                        </p>
                        <p className="mb-4">
                            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="information-automatically-collected" className="text-2xl font-semibold mb-3">Information automatically collected</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                        </p>
                        <p className="mb-4">
                            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                        </p>
                        <p className="mb-4">
                            Like many businesses, we also collect information through cookies and similar technologies.
                        </p>
                        <h3 className="font-semibold mb-2">The information we collect includes:</h3>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-2">
                            <li>
                                <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware settings).
                            </li>
                            <li>
                                <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                            </li>
                            <li>
                                <strong>Location Data.</strong> We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                            </li>
                        </ul>

                        <h2 id="google-api" className="text-xl font-semibold mb-3">Google API</h2>
                        <p className="mb-4">
                            Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited_use_requirements" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Limited Use requirements</a>.
                        </p>
                    </div>

                </Wrapper>
            </section>
            <Cta />
        </div>
    );
}

export default PrivacyPolicyPage;