import Wrapper from "@/components/common/wrapper";
import Cta2 from "@/sections/cta-2";
import { File } from "lucide-react";
import Image from "next/image";

const TermsPage = () => {
    return (
        <div>
            <section className=" w-full h-fit md:mb-8">
                <Wrapper className="px-2 md:px-6 w-full h-full">
                    <div className=" h-full w-full relative flex flex-col items-center pt-20">
                        <span className=" bg-white text-primary rounded-full pl-2 py-1.5 pr-3 inline-flex items-center gap-2">
                            <File className=" size-5" />
                            <p className=" text-foreground">Legals</p>
                        </span>
                        <h1 className=" mt-2 font-manrope text-4xl md:text-5xl md:leading-[60px] font-bold text-center">
                            Terms & Conditions
                        </h1>
                        <p className="px-8 md:px-0 mt-2 text-center text-base text-foreground opacity-70">
                            Last Updated - May 03, 2025
                        </p>

                        <div className=" mt-12 max-w-3xl text-base px-4">
                            <h2 className="text-2xl font-semibold mb-3 text-primary uppercase">Agreement to our legal terms</h2>

                            <p className="mb-4">
                                We are Lexos Inc., doing business as Lexos (&quot;<strong>Company</strong>,&quot; &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; &quot;<strong>our</strong>&quot;), a company registered in Delaware, United States at 108 West 13th St, Wilmington, DE 19801.
                            </p>
                            <p className="mb-4">
                                We operate the website <a href="https://lexosmove.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lexosmove.com</a> (the &quot;<strong>Site</strong>&quot;), as well as any other related products and services that refer or link to these legal terms (the &quot;<strong>Legal Terms</strong>&quot;) (collectively, the &quot;<strong>Services</strong>&quot;).
                            </p>
                            <p className="mb-4">
                                Lexos creates AI-generated inventory lists that are used to enhance moving services and experiences.
                            </p>
                            <p className="mb-4">
                                You can contact us by phone at <a href="tel:617-798-4863" className="text-primary hover:underline">617-798-4863</a>, email at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a>, or by mail to 128 Dorrance St, Unit 220, Providence, RI 02903, United States.
                            </p>
                            <p className="mb-4">
                                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;<strong>you</strong>&quot;), and Lexos Inc., concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                            </p>
                            <p className="mb-4">
                                We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by <a href="mailto:no-reply@lexosmove.com" className="text-primary hover:underline">no-reply@lexosmove.com</a>, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
                            </p>
                            <p className="mb-4">
                                The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                            </p>
                            <p className="mb-4">
                                We recommend that you print a copy of these Legal Terms for your records.
                            </p>
                        </div>





                        <Image fill quality={50} priority src="/assets/hero-bg-1.svg" className=" opacity-80 rounded-t-xl object-cover object-top z-[-1]" alt="Background" />
                    </div>
                </Wrapper>
            </section>
            <section>
                <Wrapper className=" max-w-3xl md:px-0 px-6">
                    {/* Section 1: Our Services */}
                    <div className="my-8">
                        <h2 id="our-services" className="text-2xl font-semibold mb-3 text-primary uppercase">1. OUR SERVICES</h2>
                        <p className="mb-4">
                            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                        </p>
                        <p className="mb-4">
                            Our platform, Lexos, is committed to complying with all industry-specific laws and regulations that apply to the moving and relocation services sector. This includes, but is not limited to, adherence to state and federal regulations governing the licensing, insurance, and operational standards of moving companies. Lexos ensures that all participating moving companies meet the necessary legal requirements and maintain up-to-date certifications and insurance coverage as mandated by law.
                        </p>
                    </div>

                    {/* Section 2: Intellectual Property Rights */}
                    <div className="my-8">
                        <h2 id="intellectual-property" className="text-2xl font-semibold mb-3 text-primary uppercase">2. INTELLECTUAL PROPERTY RIGHTS</h2>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Our intellectual property</h3>
                        <p className="mb-4">
                            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).
                        </p>
                        <p className="mb-4">
                            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                        </p>
                        <p className="mb-4">
                            The Content and Marks are provided in or through the Services &quot;AS IS&quot; for your internal business purpose only.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Your use of our Services</h3>
                        <p className="mb-4">
                            Subject to your compliance with these Legal Terms, including the &quot;<a href="#prohibited-activities" className="text-primary hover:underline">PROHIBITED ACTIVITIES</a>&quot; section below, we grant you a non-exclusive, non-transferable, revocable license to:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>access the Services; and</li>
                            <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
                        </ul>
                        <p className="mb-4">
                            solely for your internal business purpose.
                        </p>
                        <p className="mb-4">
                            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                        </p>
                        <p className="mb-4">
                            If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                        </p>
                        <p className="mb-4">
                            We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                        </p>
                        <p className="mb-4">
                            Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                        </p>
                        <h3 className="text-xl font-semibold mb-2 mt-4">Your submissions</h3>
                        <p className="mb-4">
                            Please review this section and the &quot;<a href="#prohibited-activities" className="text-primary hover:underline">PROHIBITED ACTIVITIES</a>&quot; section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                        </p>
                        <p className="mb-4">
                            <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&quot;Submissions&quot;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                        </p>
                        <p className="mb-4">
                            <strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>confirm that you have read and agree with our &quot;<a href="#prohibited-activities" className="text-primary hover:underline">PROHIBITED ACTIVITIES</a>&quot; and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                            <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
                            <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
                            <li>warrant and represent that your Submissions do not constitute confidential information.</li>
                        </ul>
                        <p className="mb-4">
                            You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party&apos;s intellectual property rights, or (c) applicable law.
                        </p>
                    </div>

                    {/* Section 3: User Representations */}
                    <div className="my-8">
                        <h2 id="user-representations" className="text-2xl font-semibold mb-3 text-primary uppercase">3. USER REPRESENTATIONS</h2>
                        <p className="mb-4">
                            By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
                        </p>
                        <p className="mb-4">
                            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                        </p>
                    </div>

                    {/* Section 4: User Registration */}
                    <div className="my-8">
                        <h2 id="user-registration" className="text-2xl font-semibold mb-3 text-primary uppercase">4. USER REGISTRATION</h2>
                        <p className="mb-4">
                            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </p>
                    </div>

                    {/* Section 5: Purchases and Payment */}
                    <div className="my-8">
                        <h2 id="purchases-payment" className="text-2xl font-semibold mb-3 text-primary uppercase">5. PURCHASES AND PAYMENT</h2>
                        <p className="mb-2">
                            We accept the following forms of payment:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>American Express</li>
                            <li>Mastercard</li>
                            <li>Visa</li>
                        </ul>
                        <p className="mb-4">
                            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
                        </p>
                        <p className="mb-4">
                            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                        </p>
                        <p className="mb-4">
                            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
                        </p>
                    </div>

                    {/* Section 6: Subscriptions */}
                    <div className="my-8">
                        <h2 id="subscriptions" className="text-2xl font-semibold mb-3 text-primary uppercase">6. SUBSCRIPTIONS</h2>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Billing and Renewal</h3>
                        <p className="mb-4">
                            Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Free Trial</h3>
                        <p className="mb-4">
                            We offer a 30-day free trial to new users who register with the Services. The account will be charged according to the user&apos;s chosen subscription at the end of the free trial.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Cancellation</h3>
                        <p className="mb-4">
                            You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a>.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Fee Changes</h3>
                        <p className="mb-4">
                            We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
                        </p>
                    </div>


                    {/* Section 7: Prohibited Activities */}
                    <div className="my-8">
                        <h2 id="prohibited-activities" className="text-2xl font-semibold mb-3 text-primary uppercase">7. PROHIBITED ACTIVITIES</h2>
                        <p className="mb-4">
                            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>
                        <p className="mb-2">
                            As a user of the Services, you agree not to:
                        </p>
                        <ul className="list-disc list-inside pl-5 mb-4 space-y-1">
                            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                            <li>Engage in unauthorized framing of or linking to the Services.</li>
                            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                            <li>Attempt to impersonate another user or person or use the username of another user.</li>
                            <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&quot;gifs&quot;), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &quot;spyware&quot; or &quot;passive collection mechanisms&quot; or &quot;pcms&quot;).</li>
                            <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                            <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                            <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                            <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
                            <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                            <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                            <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
                            <li>Sell or otherwise transfer your profile.</li>
                        </ul>
                    </div>

                </Wrapper>
            </section>
            <div className=" h-28" />
            <Cta2 />
        </div>
    );
}

export default TermsPage;