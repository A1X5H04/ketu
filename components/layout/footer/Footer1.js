import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area theme-bg pt-65">
                    <div className="container">
                        <div className="main-footer pb-15">
                            <div className="row">
                                <div className="ms-3 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-1 mb-40">
                                        <div className="footer-logo mb-30">
                                            <Link href="/"><img src="/assets/img/logo/logo2.png" alt="logo2" height={80} /></Link>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                </div>
                                {/* <div className="col-lg-2 col-md-4 col-sm-6">
                                </div> */}
                                <div className="col-lg-2 col-md-4 col-sm-6 ms-3">
                                    <div className="footer-widget footer-col-2 ml-30 mb-40">
                                        <h4 className="footer-widget__title mb-30">Information</h4>
                                        <div className="footer-widget__links">
                                            <ul className="row">
                                                <li><Link href="#">Custom Service</Link></li>
                                                <li><Link href="#">FAQs</Link></li>
                                                <li><Link href="/contact">Contacts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 ms-3">
                                    <div className="footer-widget footer-col-4 mb-40">
                                        <h4 className="footer-widget__title mb-30">Social Network</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" />Facebook</Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" />Twitter</Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" />Instagram</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright footer-bg">
                        <div className="container">
                            <div className="d-flex justify-content-center">
                                <div className="col-xl-6 col-lg-7 col-md-5 col-sm-12">
                                    <div className="footer-copyright__content">
                                        <span>Copyright {new Date().getFullYear()} <Link href="/">©Ketu</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
