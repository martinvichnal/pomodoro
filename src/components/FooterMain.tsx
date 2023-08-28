import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterMain() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            alt="Personal logo"
                            href="https://martinvichnal.com"
                            name="Martin Vichnál"
                            src=" "
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Projects" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://martinvichnal.com/Pomodoro">
                                    Pomodoro
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Project
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://github.com/martinvichnal">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="https://www.instagram.com/vichnal.martin/">
                                    Instagram
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="Martin Vichnál"
                        href="#"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="https://www.facebook.com/martin.vichnal/"
                            icon={BsFacebook}
                        />
                        <Footer.Icon
                            href="https://www.instagram.com/vichnal.martin/"
                            icon={BsInstagram}
                        />
                        <Footer.Icon
                            href="https://github.com/martinvichnal"
                            icon={BsGithub}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}


