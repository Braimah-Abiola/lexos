import Wrapper from "@/components/common/wrapper";
import Cta2 from "@/sections/cta-2";
import { File } from "lucide-react";
import Image from "next/image";

const PrivacyPolicyPage = () => {
    return (
        <div>
            <section className=" w-full h-fit min-h-screen md:mb-20">
                <Wrapper className="px-2 md:px-6 w-full h-full">
                    <div className=" h-full w-full relative flex flex-col items-center pt-20">
                        <span className=" bg-white text-primary rounded-full pl-2 py-1.5 pr-3 inline-flex items-center gap-2">
                            <File className=" size-5" />
                            <p className=" text-foreground">Legals</p>
                        </span>
                        <h1 className=" mt-2 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center">
                            Privacy Policy
                        </h1>
                        <p className="px-8 md:px-0 mt-2 text-center text-base text-foreground opacity-70">
                            Last Updated - June 06, 2025
                        </p>

                        <div className=" mt-12 max-w-3xl text-base px-4">
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

                        <div className="max-w-3xl mt-20 md:mt-12 hidden md:block">
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
                <Wrapper className=" max-w-3xl md:px-0 px-6">
                    <div className="mt-0 md:hidden">
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
                    <div className="my-8">
                        <h2 id="how-we-process" className="text-2xl font-semibold mb-3 text-primary">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                        </p>
                        <p className="mb-4">
                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-3">
                            <li>
                                <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.
                            </li>
                            <li>
                                <strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.
                            </li>
                            <li>
                                <strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                            </li>
                            <li>
                                <strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                            </li>
                            <li>
                                <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
                            </li>
                            <li>
                                <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
                            </li>
                            <li>
                                <strong>To save or protect an individual&apos;s vital interest.</strong> We may process your information when necessary to save or protect an individual&apos;s vital interest, such as to prevent harm.
                            </li>
                        </ul>
                    </div>
                    <div className="my-8">
                        <h2 id="legal-bases" className="text-2xl font-semibold mb-3 text-primary">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
                        </p>
                        <p className="mb-4 italic font-semibold">
                            If you are located in the EU or UK, this section applies to you.
                        </p>
                        <p className="mb-4">
                            The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-3">
                            <li>
                                <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#withdrawconsent" className="text-primary hover:underline">withdrawing your consent</a>.
                            </li>
                            <li>
                                <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                            </li>
                            <li>
                                <strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                                    <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
                                    <li>Understand how our users use our products and services so we can improve user experience</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                            </li>
                            <li>
                                <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                            </li>
                        </ul>
                    </div>
                    <div className="my-8">
                        <h2 id="when-and-with-whom-share" className="text-2xl font-semibold mb-3 text-primary">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following categories of third parties.
                        </p>
                        <p className="mb-2">
                            <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (&quot;<strong>third parties</strong>&quot;) who perform services for us or on our behalf and require access to such information to do that work.
                        </p>
                        <p className="mb-2">
                            The categories of third parties we may share personal information with are as follows:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>AI Platforms</li>
                            <li>Cloud Computing Services</li>
                            <li>Data Analytics Services</li>
                            <li>Data Storage Service Providers</li>
                            <li>Payment Processors</li>
                            <li>User Account Registration & Authentication Services</li>
                            <li>Website Hosting Service Providers</li>
                            <li>Sales & Marketing Tools</li>
                            <li>Testing Tools</li>
                        </ul>
                        <p className="mb-2">
                            We also may need to share your personal information in the following situations:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-3">
                            <li>
                                <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                            </li>
                            <li>
                                <strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise. We obtain and store on your device (&quot;cache&quot;) your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.
                            </li>
                            <li>
                                <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
                            </li>
                        </ul>
                    </div>
                    <div className="my-8">
                        <h2 id="cookies-tracking" className="text-2xl font-semibold mb-3 text-primary">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
                        </p>
                        <p className="mb-4">
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                        </p>
                        <p className="mb-4">
                            We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                        </p>
                        <p className="mb-4">
                            To the extent these online tracking technologies are deemed to be a &quot;sale&quot;/&quot;sharing&quot; (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section &quot;<a href="https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=3e7aab22-908a-499c-a306-a2b52c75f23d#usstates" className="text-primary hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>&quot;
                        </p>
                        <p className="mb-4">
                            Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Google Analytics</h3>
                        <p className="mb-4">
                            We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Google Analytics Demographics and Interests Reporting, Remarketing with Google Analytics and Google Display Network Impressions Reporting. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a>. You can opt out of Google Analytics Advertising Features through <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ads Settings</a> and Ad Settings for mobile apps. Other opt out means include <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://optout.networkadvertising.org/</a> and <a href="http://www.networkadvertising.org/mobile-choice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.networkadvertising.org/mobile-choice</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy & Terms page</a>.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="ai-products" className="text-2xl font-semibold mb-3 text-primary">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
                        </p>
                        <p className="mb-4">
                            As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, &quot;AI Products&quot;). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Our AI Products</h3>
                        <p className="mb-2">
                            Our AI Products are designed for the following functions:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Image analysis</li>
                            <li>AI automation</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-2 mt-4">How We Process Your Data Using AI</h3>
                        <p className="mb-4">
                            All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data&apos;s safety.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="how-long-keep-info" className="text-2xl font-semibold mb-3 text-primary">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
                        </p>
                        <p className="mb-4">
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                        </p>
                        <p className="mb-4">
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="how-keep-info-safe" className="text-2xl font-semibold mb-3 text-primary">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
                        </p>
                        <p className="mb-4">
                            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="collect-from-minors" className="text-2xl font-semibold mb-3 text-primary">9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
                        </p>
                        <p className="mb-4">
                            We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a>.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="privacy-rights" className="text-2xl font-semibold mb-3 text-primary">10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
                        </p>
                        <p className="mb-4">
                            In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section &quot;<a href="#how-contact-us" className="text-primary hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below.
                        </p>
                        <p className="mb-4">
                            We will consider and act upon any request in accordance with applicable data protection laws.
                        </p>
                        <p className="mb-4">
                            If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Member State data protection authority</a> or <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UK data protection authority</a>.
                        </p>
                        <p className="mb-4">
                            If you are located in Switzerland, you may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Federal Data Protection and Information Commissioner</a>.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Withdrawing your consent</h3>
                        <p className="mb-4">
                            If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &quot;<a href="#how-contact-us" className="text-primary hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below.
                        </p>
                        <p className="mb-4">
                            However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Opting out of marketing and promotional communications</h3>
                        <p className="mb-4">
                            You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; to the SMS messages that we send, or by contacting us using the details provided in the section &quot;<a href="#how-contact-us" className="text-primary hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                        </p>
                        <p className="mb-4">
                            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Account Information</h3>
                        <p className="mb-2">
                            If you would at any time like to review or change the information in your account or terminate your account, you can:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Contact us using the contact information provided.</li>
                        </ul>
                        <p className="mb-4">
                            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Cookies and similar technologies</h3>
                        <p className="mb-4">
                            Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
                        </p>
                        <p className="mb-4">
                            If you have questions or comments about your privacy rights, you may email us at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a>.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="dnt-features" className="text-2xl font-semibold mb-3 text-primary">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                        <p className="mb-4">
                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                        </p>
                        <p className="mb-4">
                            California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="california-privacy-rights" className="text-2xl font-semibold mb-3 text-primary">12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                        </p>
                        <p className="mb-4">
                            California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                        </p>
                        <p className="mb-4">
                            If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">CCPA Privacy Notice</h3>
                        <p className="mb-2">
                            The California Code of Regulations defines a &quot;resident&quot; as:
                        </p>
                        <ul className="list-decimal list-inside pl-5 mb-4 space-y-1">
                            <li>every individual who is in the State of California for other than a temporary or transitory purpose and</li>
                            <li>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
                        </ul>
                        <p className="mb-4">
                            All other individuals are defined as &quot;non-residents.&quot;
                        </p>
                        <p className="mb-4">
                            If this definition of &quot;resident&quot; applies to you, we must adhere to certain rights and obligations regarding your personal information.
                        </p>
                        <p className="mb-4">
                            What categories of personal information do we collect?
                        </p>
                        <p className="mb-4">
                            We have collected the following categories of personal information in the past twelve (12) months:
                        </p>

                        <div className="overflow-x-auto my-6 -mx-4 sm:mx-0">
                            <div className="min-w-full p-4 sm:p-0">
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 w-1/4">Category</th>
                                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 w-1/2">Examples</th>
                                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 w-1/4">Collected</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top font-medium">A. Identifiers</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-xs sm:text-sm">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-center font-bold text-primary">YES</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top font-medium">B. Personal information</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-xs sm:text-sm">Name, contact information, education, employment, employment history, and financial information</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-center">NO</td>
                                        </tr>
                                        {/* Other rows follow the same pattern */}
                                        <tr>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top font-medium">C. Protected classification</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-xs sm:text-sm">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-center">NO</td>
                                        </tr>
                                        {/* Continue with other rows... */}
                                        <tr>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top font-medium">K. Inferences</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-xs sm:text-sm">Inferences drawn from collected personal information to create a profile about an individual&apos;s preferences and characteristics</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-center font-bold text-primary">YES</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top font-medium">L. Sensitive personal Information</td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-xs sm:text-sm"></td>
                                            <td className="border border-gray-300 px-2 sm:px-4 py-2 align-top text-center">NO</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 italic px-4 sm:px-0">Swipe horizontally to view all content on small screens</p>
                        </div>
                        <p className="mb-4">
                            We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Receiving help through our customer support channels;</li>
                            <li>Participation in customer surveys or contests; and</li>
                            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                        </ul>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Receiving help through our customer support channels;</li>
                            <li>Participation in customer surveys or contests; and</li>
                            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                        </ul>

                        <h3 className="text-lg font-semibold mb-2 mt-6">How do we use and share your personal information?</h3>
                        <p className="mb-4">
                            We will use and retain the collected personal information as needed to provide the Services or for:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Category A - As long as the user has an account with us.</li>
                            <li>Category B - As long as the user has an account with us.</li>
                            <li>Category K - As long as the user has an account with us.</li>
                        </ul>

                        <h4 className="text-md font-semibold mb-1 mt-4">Sources of Personal Information</h4>
                        <p className="mb-4">
                            Learn more about the sources of personal information we collect in &quot;<a href="#what-information-collect" className="text-primary hover:underline">WHAT INFORMATION DO WE COLLECT?</a>&quot;
                        </p>

                        <h4 className="text-md font-semibold mb-1 mt-4">How We Use and Share Personal Information</h4>
                        <p className="mb-4">
                            Learn more about how we use your personal information in the section, &quot;<a href="#how-we-process" className="text-primary hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a>&quot;
                        </p>

                        <h4 className="text-md font-semibold mb-1 mt-4">Will your information be shared with anyone else?</h4>
                        <p className="mb-4">
                            We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, &quot;<a href="#when-and-with-whom-share" className="text-primary hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>&quot;
                        </p>
                        <p className="mb-4">
                            We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal information.
                        </p>
                        <p className="mb-4">
                            We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Category A. Identifiers</li>
                            <li>Category B. Personal information as defined in the California Customer Records law</li>
                        </ul>
                        <p className="mb-4">
                            The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under &quot;<a href="#when-and-with-whom-share" className="text-primary hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>&quot;
                        </p>
                        <h3 className="text-lg font-semibold mb-2 mt-6">Your Rights</h3>
                        <p className="mb-4">
                            You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Right to know whether or not we are processing your personal data</li>
                            <li>Right to access your personal data</li>
                            <li>Right to correct inaccuracies in your personal data</li>
                            <li>Right to request the deletion of your personal data</li>
                            <li>Right to obtain a copy of the personal data you previously shared with us</li>
                            <li>Right to non-discrimination for exercising your rights</li>
                            <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California&apos;s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (&quot;profiling&quot;)</li>
                        </ul>
                        <p className="mb-4">
                            Depending upon the state where you live, you may also have the following rights:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                            <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                            <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                            <li>Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Minnesota)</li>
                            <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                            <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
                        </ul>

                        <h3 className="text-lg font-semibold mb-2 mt-6">How to Exercise Your Rights</h3>
                        <p className="mb-4">
                            To exercise these rights, you can contact us by submitting a <a href="https://app.termly.io/notify/3e7aab22-908a-499c-a306-a2b52c75f23d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">data subject access request</a>, by emailing us at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a>, or by referring to the contact details at the bottom of this document.
                        </p>
                        <p className="mb-4">
                            Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                        </p>

                        <h4 className="text-md font-semibold mb-1 mt-4">Request Verification</h4>
                        <p className="mb-4">
                            Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud prevention purposes.
                        </p>
                        <p className="mb-4">
                            If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                        </p>

                        <h4 className="text-md font-semibold mb-1 mt-4">Appeals</h4>
                        <p className="mb-4">
                            Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                        </p>

                        <h4 className="text-md font-semibold mb-1 mt-4">California &quot;Shine The Light&quot; Law</h4>
                        <p className="mb-4">
                            California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section &quot;<a href="#how-contact-us" className="text-primary hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot;
                        </p>
                    </div>
                    <div className="my-8">
                        <h2 id="user-feedback" className="text-2xl font-semibold mb-3 text-primary">13. USER FEEDBACK AND COMMUNICATION</h2>
                        <p className="mb-4">
                            We may use the information you provide at sign-up, including your email address and phone number, to contact you for feedback regarding our services and to improve your user experience. This communication may include, but is not limited to: Product Feedback: We may reach out to you via email or phone to request your input on how we can improve our Services or to conduct user surveys. Service Updates: We may contact you with updates or changes to the features of our product and invite your feedback on those changes. Opt-out Option: You have the right to opt-out of receiving feedback requests at any time. You can do so by following the instructions provided in the communication or by contacting our support team directly. By using our services, you consent to receiving these communications as part of our efforts to enhance the product experience.
                        </p>
                    </div>

                    <div className="my-8">
                        <h2 id="updates-to-notice" className="text-2xl font-semibold mb-3 text-primary">14. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                        <p className="mb-4">
                            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                        </p>
                        <p className="mb-4">
                            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                        </p>
                    </div>

                    <div className="my-8">
                        <h2 id="how-contact-us" className="text-2xl font-semibold mb-3 text-primary">15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                        <p className="mb-2">
                            If you have questions or comments about this notice, you may email us at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a> or contact us by post at:
                        </p>
                        <address className="not-italic">
                            Lexos Inc.<br />
                            108 West 13th Street<br />
                            Wilmington, DE 19801<br />
                            United States
                        </address>
                    </div>

                    <div className="my-8">
                        <h2 id="review-update-delete-data" className="text-2xl font-semibold mb-3 text-primary">16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
                        <p className="mb-4">
                            Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <a href="https://app.termly.io/notify/3e7aab22-908a-499c-a306-a2b52c75f23d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">data subject access request</a>.
                        </p>
                    </div>
                </Wrapper>
            </section>
            <div className=" h-28" />
            <Cta2 />
        </div>
    );
}

export default PrivacyPolicyPage;