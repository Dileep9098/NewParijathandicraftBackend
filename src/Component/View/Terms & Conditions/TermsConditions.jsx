import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Config from '../../../helpers/Config';
import SiteBreadcrumb from '../../components/layout/SiteBreadcrumb';
import { Media, Row, Col, Container } from "reactstrap";
import aboutImg from '../../../resources/custom/images/about-us.jpg';
import CustomerTestimonial from '../../components/shared/CustomerTestimonial';
import "./TermsConditions.css"
const TermsCondition = () => {
    const [siteTitle, setSiteTitle] = useState(Config['SITE_TTILE']);

    return (
        <>


            <Helmet>
                <title>{siteTitle} - Terms & Conditions</title>
                <meta name="description" content={siteTitle + " - Terms & Conditions page"} />
                <meta name="keywords" content="Terms & Conditions"></meta>
            </Helmet>

            <SiteBreadcrumb title="Terms & Conditions" parent="Home" />

            <section className="about-page section-big-py-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 " style={{ marginTop: "-80px" }}>
                            <div className="termsCondition">
                                <h5>Terms of Use</h5>
                                <p className="MsoNormal">This document is an electronic record in terms of
                                    Information Technology Act, 2000 and rules there under as applicable and the
                                    amended provisions pertaining to electronic records in various statutes as
                                    amended by the Information Technology Act, 2000. This electronic record is generated
                                    by a computer system and does not require any physical or digital signatures.
                                </p>

                                <p className="MsoNormal">This document is published in accordance with the provisions
                                    of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules,
                                    2011 that require publishing the rules and regulations, privacy policy and
                                    Terms of Use for access or usage of WWW.PARIJATHANDICRAFT.IN
                                </p>

                                <p className="MsoNormal">
                                    Your use of the Website of Parijat Handicraft and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Street Craft and these terms and conditions including the policies constitute Your binding obligations, with Parijat Handicraft.
                                </p>
                                <p className="MsoNormal">
                                    For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on the Website by providing Registration Data while registering on the Website as Registered User using the computer systems. Parijat Handicraft allows the User to surf the Website or making purchases without registering on the Website. The term "We", "Us", "Our" shall mean Parijat Handicraft.
                                </p>
                                <p className="MsoNormal">
                                    When You use any of the services provided by Us through the Website, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms of Use. We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. It is Your responsibility to review these Terms of Use periodically for updates / changes. Your continued use of the Website following the posting of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website.
                                </p>
                                <p className="MsoNormal">
                                    By using Parijat Handicraft Services, you should be agree upon the terms and conditions given below, Please read it carefully.


                                </p>
                                <p className="MsoNormal">
                                    By impliedly or expressly accepting these Terms of Use, You also accept and agree to be bound by Parijat Handicraft Policies (including but not limited to Privacy Policy available as privacy) as amended from time to time.


                                </p>

                                <h5>Eligibility for the Membership</h5>

                                <p className="MsoNormal">
                                    Use of the Website is available only to persons who can form legally binding contracts under Indian Contract Act, 1872. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including minors, un-discharged insolvents etc. are not eligible to use the Website. If you are a minor i.e. under the age of 18 years, you shall not register as a User of the Parijat Handicraft website and shall not transact on or use the website. As a minor if you wish to use or transact on website, such use or transaction may be made by your legal guardian or parents on the Website. Parijat Handicraft fully reserves the right to terminate your membership and / or refuse to provide you with access to the Website if it is brought to the notice of Parijat Handicraft or if it is discovered that you are under the age of 18 years or juvenile.
                                </p>
                                <h5>Obligations  in respect of Your Account and Registration</h5>

                                <p className="MsoNormal">
                                    If You are using our Website, You shall be responsible for maintaining the confidentiality of your Display Name and Password and You shall be responsible for all activities that occur under your Display Name and Password. You agree that if You provide any information that is untrue, inaccurate, not current or incomplete or We have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, or not in accordance with the this Terms of Use, We shall have the right to indefinitely suspend or terminate or block access of your membership on the Website and refuse to provide You with access to the Website from the immediate effect as per our knowledge.
                                </p>

                                <h5>Communications to us</h5>
                                <p className="MsoNormal">
                                    When You use the Website or send emails or other data, information or communication to us, You agree and understand that You are communicating with Us through electronic records and You consent to receive communications via electronic records from Us periodically and as and when required. We may also communicate with you by email or by such other mode of communication, electronic or otherwise as per law.
                                </p>
                                <h5>  Platform for Transaction and Communication
                                </h5>
                                <p className="MsoNormal">

                                    That our Website is a platform for the Users to utilize, meet and interact with one another for their transactions. Parijat Handicraft is not and cannot be a party to or control in any manner any transaction between the Website's Users/ visitors.
                                </p>

                                <h5>Hence as followed:</h5>
                                <p className="MsoNormal">


                                    1. All commercial or contractual terms are offered by and agreed to between Buyers and Sellers alone. The commercial or contractual terms include without limitation price, shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services and after sales services related to products and services. Parijat Handicraft  have no control or does not determine or advise or in any way involve itself in the offering or acceptance of the such commercial or contractual terms between the Buyers and Sellers. All the discounts, offers, exchange offers are by the Seller or Brand and not by the Parijat Handicraft. Parijat Handicraft does not make any representation or Warranty as to specifics (such as quality, value, salability, etc.) of the products or services proposed to be sold or offered to be sold or purchased on the Website. Parijat Handicraft does not implicitly or explicitly support or endorse the sale or purchase of any products or services on the Website and we do not accepts any liability for any errors or omissions, whether on behalf of itself or third parties.
                                </p>

                                <p className="MsoNormal">
                                    2. Parijat Handicraft shall not and is not required to mediate or resolve any dispute or disagreement between Buyers and Sellers and also does not make any representation or warranty as to the item-specifics (such as legal title, creditworthiness, identity, etc) of any of its Users. You visitors/users are advised to independently verify any particular User that You choose to deal with on the Website and use Your best judgment in that behalf You shall independently agree upon the manner and terms and conditions of delivery, payment, insurance etc. with the seller(s) that You transact with.


                                </p>

                                <h5> Disclaimer:</h5>
                                <p className="MsoNormal">

                                    We are not concern with Pricing of the product(s) as is reflected on the Website may due to some technical issue, typographical error or product information published by seller may be incorrectly reflected and in such an event seller may cancel such your order(s).


                                </p>

                                <h5>Charges</h5>
                                <p className="MsoNormal">


                                    Parijat Handicraft Membership is free for its buyers on the Website and the Parijat Handicraft do not charge any fee for browsing and buying and also reserves the right to change its Policy from time to time accordingly You shall be solely responsible for compliance of all applicable laws in India for making.


                                </p>

                                <h5>Use of the Website</h5>
                                <p className="MsoNormal">


                                    You agree, undertake and confirm that Your use of Website shall be strictly governed by the following binding principles of the Parijat Handicraft i.e. You shall not host, display, upload, modify, publish, transmit, update or share any information which belongs to another person and to which You does not have any right it may be amounted as harmful, harassing etc. or otherwise unlawful in any manner which is offensive to the online community, such as sexually explicit content etc. or conduct that is abusive and always be ready to obey the applicable provisions of the Information Technology Act, 2000 and rules there under as applicable and as amended from time to time and also all applicable Domestic laws, rules and regulations and other relevant laws. Parijat Handicraft shall have all the rights to take necessary action and claim damages that may occur due to your involvement/participation in any way on your own or through group/s of people, intentionally or unintentionally you shall be agree that any Content You post may be used by us, consistent with Our Privacy Policy and Rules of Conduct on Site as mentioned herein, and You are not entitled to any payment or other compensation for such use by you.
                                </p>

                                <h5>Privacy of the Parijat Handicraft:</h5>
                                <p className="MsoNormal">


                                    If you share your personal information with us or our other entities, we are entitled to disclose personal information to third parties. Parijat Handicraft may disclose your personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We are entitled to share some or all of your personal information with another business entity should we plan to merge with.


                                </p>

                                <h5>Selling on the website of the Parijat Handicraft:</h5>
                                <p className="MsoNormal">


                                    Any registered seller are allowed to list item(s) for sale on the Website of the Parijat Handicraft in accordance with the Policies and the Terms of Use and must ensure that the listed items do not infringe upon the intellectual property, trade secret or other proprietary rights or rights of publicity or privacy rights of third parties. Listings may only include text descriptions, graphics and pictures that describe your item for sale. All listed items must be listed in an appropriate category on the Website which must be kept in stock for successful fulfillment of sales through our website.


                                </p>
                                <h5> Payment</h5>
                                <p className="MsoNormal">
                                    Payment

                                    While availing any of the payment method/s available on the Website, we will not be responsible or assume any liability, whatsoever in respect of any loss or damage arising directly or indirectly to You due to the Lack of authorization for any transaction/s, or Exceeding the preset limit mutually agreed by You and between "Bank/s" or payment issues arising out of the transaction or Decline of transaction. It is stated that the payments made against the purchases/services on Website by you may be in Indian Rupees/US dollar and the all Valid Credit / Debit/ Cash Card/ and other payment instruments are processed using a Credit Card payment gateway or appropriate payment system infrastructure and the same will also be governed by the terms and conditions are acceptable.
                                </p>
                                <h5>Compliance with Laws in respect of the use of the Parijat Handicraft Website:</h5>
                                <p className="MsoNormal">


                                    The Buyers and Sellers shall comply with all the applicable laws including the Exchange Control Manual as may be issued by Reserve Bank of India from time for example: Customs Act, Information and Technology Act, 2000 as amended by the Information Technology (Amendment) Act 2008 etc.
                                </p>
                                <h5>Parijat Handicraft Replacement Policy:</h5>
                                <p className="MsoNormal">


                                    Parijat Handicraft seeks to assist who have been defrauded by qualified sellers on the Website it is depends on the product category and the seller at the time of booking/delivery and/or within the applicable return policy period, if any defect is found, then the buyer of the product/s can ask for replacement of the product/s from the seller subject to the  terms and conditions Parijat Handicraft reserves its right to initiate civil and/or criminal proceedings against a user who, files a invalid and/or false claims or provides false, incomplete, or misleading information and have its sole discretion to  suspend, block, restrict, cancel the Display Name of such user or disqualify that user and any related users from availing protection through this program.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CustomerTestimonial />

        </>
    );

}

export default TermsCondition;
