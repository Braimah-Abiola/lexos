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

                    {/* Section 8: User Generated Contributions */}
                    <div className="my-8">
                        <h2 id="user-generated-contributions" className="text-2xl font-semibold mb-3 text-primary uppercase">8. USER GENERATED CONTRIBUTIONS</h2>

                        <p className="mb-4">
                            The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:
                        </p>

                        <ul className="list-disc pl-5 mb-4">
                            <li className="mb-2">
                                The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
                            </li>
                            <li className="mb-2">
                                You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.
                            </li>
                            <li className="mb-2">
                                You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.
                            </li>
                            <li className="mb-2">
                                Your Contributions are not false, inaccurate, or misleading.
                            </li>
                            <li className="mb-2">
                                Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                            </li>
                            <li className="mb-2">
                                Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
                            </li>
                            <li className="mb-2">
                                Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
                            </li>
                            <li className="mb-2">
                                Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
                            </li>
                            <li className="mb-2">
                                Your Contributions do not violate any applicable law, regulation, or rule.
                            </li>
                            <li className="mb-2">
                                Your Contributions do not violate the privacy or publicity rights of any third party.
                            </li>
                            <li className="mb-2">
                                Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
                            </li>
                            <li className="mb-2">
                                Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
                            </li>
                            <li className="mb-2">
                                Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.
                            </li>
                        </ul>

                        <p className="mb-4">
                            Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
                        </p>
                    </div>

                    {/* Section 9: Contribution License */}
                    <div className="my-8">
                        <h2 id="contribution-license" className="text-2xl font-semibold mb-3 text-primary uppercase">9. CONTRIBUTION LICENSE</h2>

                        <p className="mb-4">
                            You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
                        </p>

                        <p className="mb-4">
                            By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                        </p>

                        <p className="mb-4">
                            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressy agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                        </p>
                    </div>

                    {/* Section 10: Third-Party Websites and Content */}
                    <div className="my-8">
                        <h2 id="third-party-websites-and-content" className="text-2xl font-semibold mb-3 text-primary uppercase">10. THIRD-PARTY WEBSITES AND CONTENT</h2>

                        <p className="mb-4">
                            The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                        </p>
                    </div>

                    {/* Section 11: Services Management */}
                    <div className="my-8">
                        <h2 id="services-management" className="text-2xl font-semibold mb-3 text-primary uppercase">11. SERVICES MANAGEMENT</h2>

                        <p className="mb-4">
                            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                        </p>
                    </div>

                    {/* Section 12: Privacy Policy */}
                    <div className="my-8">
                        <h2 id="privacy-policy" className="text-2xl font-semibold mb-3 text-primary uppercase">12. PRIVACY POLICY</h2>

                        <p className="mb-4">
                            We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
                        </p>
                    </div>

                    {/* Section 13: Term and Termination */}
                    <div className="my-8">
                        <h2 id="term-and-termination" className="text-2xl font-semibold mb-3 text-primary uppercase">13. TERM AND TERMINATION</h2>

                        <p className="mb-4">
                            These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                        </p>

                        <p className="mb-4">
                            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                        </p>
                    </div>

                    {/* Section 14: Modifications and Interruptions */}
                    <div className="my-8">
                        <h2 id="modifications-and-interruptions" className="text-2xl font-semibold mb-3 text-primary uppercase">14. MODIFICATIONS AND INTERRUPTIONS</h2>

                        <p className="mb-4">
                            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                        </p>

                        <p className="mb-4">
                            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
                        </p>
                    </div>

                    {/* Section 15: Governing Law */}
                    <div className="my-8">
                        <h2 id="governing-law" className="text-2xl font-semibold mb-3 text-primary uppercase">15. GOVERNING LAW</h2>

                        <p className="mb-4">
                            These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Delaware applicable to agreements made and to be entirely performed within the State of Delaware, without regard to its conflict of law principles.
                        </p>
                    </div>

                    {/* Section 16: Dispute Resolution */}
                    <div className="my-8">
                        <h2 id="dispute-resolution" className="text-2xl font-semibold mb-3 text-primary uppercase">16. DISPUTE RESOLUTION</h2>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Informal Negotiations</h3>
                        <p className="mb-4">
                            To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Binding Arbitration</h3>
                        <p className="mb-4">
                            If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the <a href="http://www.adr.org" className="text-primary hover:underline">American Arbitration Association (AAA) website</a>. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, we will pay all arbitration fees and expenses. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Providence, Rhode Island. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
                        </p>

                        <p className="mb-4">
                            If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Providence, Rhode Island, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms.
                        </p>

                        <p className="mb-4">
                            In no event shall any Dispute brought by either Party related in any way to the Services be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Restrictions</h3>
                        <p className="mb-4">
                            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Exceptions to Informal Negotiations and Arbitration</h3>
                        <p className="mb-4">
                            The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                        </p>
                    </div>

                    {/* Section 17: Corrections */}
                    <div className="my-8">
                        <h2 id="corrections" className="text-2xl font-semibold mb-3 text-primary uppercase">17. CORRECTIONS</h2>

                        <p className="mb-4">
                            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                        </p>
                    </div>

                    {/* Section 18: Disclaimer */}
                    <div className="my-8">
                        <h2 id="disclaimer" className="text-2xl font-semibold mb-3 text-primary uppercase">18. DISCLAIMER</h2>

                        <p className="mb-4">
                            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                        </p>
                    </div>

                    {/* Section 19: Limitations of Liability */}
                    <div className="my-8">
                        <h2 id="limitations-of-liability" className="text-2xl font-semibold mb-3 text-primary uppercase">19. LIMITATIONS OF LIABILITY</h2>

                        <p className="mb-4">
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO $1,000.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                        </p>
                    </div>

                    {/* Section 20: Indemnification */}
                    <div className="my-8">
                        <h2 id="indemnification" className="text-2xl font-semibold mb-3 text-primary uppercase">20. INDEMNIFICATION</h2>

                        <p className="mb-4">
                            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                        </p>
                    </div>

                    {/* Section 21: User Data */}
                    <div className="my-8">
                        <h2 id="user-data" className="text-2xl font-semibold mb-3 text-primary uppercase">21. USER DATA</h2>

                        <p className="mb-4">
                            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                        </p>
                    </div>

                    {/* Section 22: Electronic Communications, Transactions, and Signatures */}
                    <div className="my-8">
                        <h2 id="electronic-communications-transactions-and-signatures" className="text-2xl font-semibold mb-3 text-primary uppercase">22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>

                        <p className="mb-4">
                            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                        </p>
                    </div>

                    {/* Section 23: SMS Text Messaging */}
                    <div className="my-8">
                        <h2 id="sms-text-messaging" className="text-2xl font-semibold mb-3 text-primary uppercase">23. SMS TEXT MESSAGING</h2>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Program Description</h3>
                        <p className="mb-4">
                            By opting into any Twilio text messaging program, you expressly consent to receive text messages (SMS) to your mobile number. Twilio text messages may include: appointment reminders.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Message Frequency</h3>
                        <p className="mb-4">
                            When you opt into our SMS service, you may receive up to 4 messages per move request, including survey links, scheduling confirmations, and appointment reminders. These messages are triggered manually by a sales representative or as part of a scheduled move process.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Opting Out</h3>
                        <p className="mb-4">
                            If at any time you wish to stop receiving SMS messages from us, simply reply to the text with "STOP". You may receive an SMS message confirming your opt out.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Message and Data Rates</h3>
                        <p className="mb-4">
                            Please be aware that message and data rates may apply to any SMS messages sent or received. The rates are determined by your carrier and the specifics of your mobile plan.
                        </p>

                        <h3 className="text-xl font-semibold mb-2 mt-4">Support</h3>
                        <p className="mb-4">
                            If you have any questions or need assistance regarding our SMS communications, please email us at <a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a> or call at 617-798-4863.
                        </p>
                    </div>

                    {/* Section 24: California Users and Residents */}
                    <div className="my-8">
                        <h2 id="california-users-and-residents" className="text-2xl font-semibold mb-3 text-primary uppercase">24. CALIFORNIA USERS AND RESIDENTS</h2>

                        <p className="mb-4">
                            If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
                        </p>
                    </div>

                    {/* Section 25: Miscellaneous */}
                    <div className="my-8">
                        <h2 id="miscellaneous" className="text-2xl font-semibold mb-3 text-primary uppercase">25. MISCELLANEOUS</h2>

                        <p className="mb-4">
                            These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                        </p>
                    </div>

                    {/* Section 26: Third-Party Payment Processors */}
                    <div className="my-8">
                        <h2 id="third-party-payment-processors" className="text-2xl font-semibold mb-3 text-primary uppercase">26. THIRD-PARTY PAYMENT PROCESSORS</h2>

                        <p className="mb-4">
                            Lexos uses third-party payment processors (Stripe) to facilitate payments with LexPros. Lexos holds no liability for any errors, delays, or interruptions caused by third-party payment processors. Service providers and users acknowledge that by using Lexos, they are also bound by the terms and conditions of the third-party payment processor, which are incorporated by reference into this agreement.
                        </p>
                    </div>

                    {/* Section 27: Platform Availability */}
                    <div className="my-8">
                        <h2 id="platform-availability" className="text-2xl font-semibold mb-3 text-primary uppercase">27. PLATFORM AVAILABILITY</h2>

                        <p className="mb-4">
                            Lexos does not guarantee continuous, uninterrupted access to its platform. There may be downtime or errors due to maintenance, upgrades, or unforeseen technical issues. Lexos will make reasonable efforts to ensure minimal disruption to service but is not liable for any losses incurred due to platform unavailability.
                        </p>
                    </div>

                    {/* Section 28: Data Usage and Privacy */}
                    <div className="my-8">
                        <h2 id="data-usage-and-privacy" className="text-2xl font-semibold mb-3 text-primary uppercase">28. DATA USAGE AND PRIVACY</h2>

                        <p className="mb-4">
                            By using the Lexos platform, moving companies agree to the collection and use of their data in accordance with our privacy policy. Lexos will never sell, trade, or disclose company data to third parties without consent, except when necessary for payment processing or required by law.
                        </p>
                    </div>

                    {/* Section 29: Modifications to Terms and Fees */}
                    <div className="my-8">
                        <h2 id="modifications-to-terms-and-fees" className="text-2xl font-semibold mb-3 text-primary uppercase">29. MODIFICATIONS TO TERMS AND FEES</h2>

                        <p className="mb-4">
                            Lexos reserves the right to modify its pricing or Terms and Conditions at any time. Changes will be communicated to moving companies via email. Continued use of the Lexos platform after such changes go into effect constitutes acceptance of the updated terms. If a company does not agree with the updated terms or pricing, they may discontinue use of the platform before their next billing cycle.
                        </p>
                    </div>


                    {/* Section 30: Compliance with Local Laws */}
                    <div className="my-8">
                        <h2 id="compliance-with-local-laws" className="text-2xl font-semibold mb-3 text-primary uppercase">30. COMPLIANCE WITH LOCAL LAWS</h2>

                        <p className="mb-4">
                            Moving companies using the Lexos platform are responsible for complying with all local, state, and federal regulations, including licensing and insurance requirements. Lexos is not responsible for verifying the legal compliance of the companies using the platform.
                        </p>
                    </div>

                    {/* Section 31: Contact Us */}
                    <div className="my-8">
                        <h2 id="contact-us" className="text-2xl font-semibold mb-3 text-primary uppercase">31. CONTACT US</h2>

                        <p className="mb-4">
                            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                        </p>

                        <div className="mb-4">
                            <p>Lexos Inc.</p>
                            <p>128 Dorrance St</p>
                            <p>Unit 220</p>
                            <p>Providence, RI 02903</p>
                            <p>United States</p>
                            <p>Phone: 617-798-4863</p>
                            <p><a href="mailto:info@lexosmove.com" className="text-primary hover:underline">info@lexosmove.com</a></p>
                        </div>
                    </div>

                </Wrapper>
            </section>
            <div className=" h-28" />
            <Cta2 />
        </div>
    );
}

export default TermsPage;