import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Landing() {
    const toastok = () => toast.success('Ishingiz jonatildi', { theme: 'colored' })
    const toastok1 = () => toast.error('Uzr hali bu ishka tushmagan', { theme: 'colored' })

    return (
        <div className='max-width'>
            <div className='lan-dad'>
                <div className='lan-dad1'>
                    <h1>Blanko template</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris <br />porttitor amet volutpat.</p>
                    <div className='lan-btn'>
                        <button className='bir' onClick={() => toastok()}><a href="#">Purchase template</a></button>
                        <button className='ikki' onClick={() => toastok1()}><a href="#">Other templates</a></button>
                    </div>

                    <div className='lan-dad1-img'>
                        <img src="img/second.png" alt="" />
                    </div>
                </div>

                <div className='img'>
                    <img src="img/qiz.png" alt="" />
                </div>
                <ToastContainer />

            </div>

            <div className='bir1'>
                <div className='first1'>
                    <img src="img/bir.png" alt="" />
                    <div className='first-text'>
                        <h1>Speed</h1>
                        <p>Open a commercial-grade current <br /> account from anywhere</p>
                    </div>
                </div>
                <div className='first1'>
                    <img src="img/ikki.png" alt="" />
                    <div className='first-text'>
                        <h1>Design</h1>
                        <p>Open a commercial-grade current <br /> account from anywhere</p>
                    </div>
                </div>
                <div className='first1'>
                    <img src="img/uch.png" alt="" />
                    <div className='first-text'>
                        <h1>Modularity</h1>
                        <p>Open a commercial-grade current <br /> account from anywhere</p>
                    </div>
                </div>
            </div>

            <div className='crud'>
                <div className='crud-1'>
                    <img src="img/title.png" alt="" />
                    <h1>“Join a community of industry <br /> leading professionals. Join a <br /> community of industry leading <br /> professionals.“</h1>
                </div>
                <div className='girl-img'>
                    <img src="img/girl.png" alt="" />
                </div>
            </div>

            <div className='card-title'>
                <h1>Landing pages</h1>
            </div>

            <div className='card-dad'>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card.png" alt="" />
                        <div className='card-text'>
                            <h1>Landing one</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card1.png" alt="" />
                        <div className='card-text'>
                            <h1>Landing two</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card2.png" alt="" />
                        <div className='card-text'>
                            <h1>Landing three</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cards-fs1'>
                <div className='card-fs1'>
                    <img src="img/card3.png" alt="" />
                    <div className='card-text'>
                        <h1>Landing four</h1>
                    </div>
                </div>
            </div>

            <div className='card-title1'>
                <h1>Other pages</h1>
            </div>


            <div className='card-dad'>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card4.png" alt="" />
                        <div className='card-text'>
                            <h1>Pricing one</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card5.png" alt="" />
                        <div className='card-text'>
                            <h1>Pricing two</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card6.png" alt="" />
                        <div className='card-text'>
                            <h1>Pricing three</h1>
                        </div>
                    </div>
                </div>
            </div>







            <div className='card-dad1'>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card7.png" alt="" />
                        <div className='card-text'>
                            <h1>Sign up one</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card8.png" alt="" />
                        <div className='card-text'>
                            <h1>Sign up two</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card9.png" alt="" />
                        <div className='card-text'>
                            <h1>Sign up three</h1>
                        </div>
                    </div>
                </div>
            </div>






            <div className='card-dad2'>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card10.png" alt="" />
                        <div className='card-text'>
                            <h1>Contact one</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card11.png" alt="" />
                        <div className='card-text'>
                            <h1>Contact two</h1>
                        </div>
                    </div>
                </div>
                <div className='cards-fs'>
                    <div className='card-fs'>
                        <img src="img/card12.png" alt="" />
                        <div className='card-text'>
                            <h1>About us</h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className='cards-fs22'>

                <div className='cards-fs2'>
                    <div className='card-fs1'>
                        <img src="img/card13.png" alt="" />
                        <div className='card-text'>
                            <h1>Blog</h1>
                        </div>
                    </div>
                </div>


                <div className='cards-fs2'>
                    <div className='card-fs1'>
                        <img src="img/card14.png" alt="" />
                        <div className='card-text'>
                            <h1>Careers</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='foter'>
                <div className='foter1'>
                    <div className='foter-1'>
                        <h1>Ready to scale <br /> your business?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Odio mauris porttitor amet volutpat. Lorem, ipsum dolor.</p>
                        <div className='lan-btn1'>
                            <button className='bir' onClick={() => toastok()}><a href="#">Purchase template</a></button>
                            <button className='ikki'><a href="#">Other templates</a></button>
                        </div>
                        <div className='lan-dad11-img'>
                            <img src="img/second.png" alt="" />
                        </div>
                    </div>



                    <div className='foter-input'>
                        <h1>Sign up for free</h1>
                        <div className='labelar'>
                            <label htmlFor="#">Your email</label> <br />
                            <input type="text" placeholder='example@mail.com' />
                        </div>
                        <div className='labelar1'>
                            <label htmlFor="#">Your password</label> <br />
                            <input type="password" placeholder='*************' />
                        </div>
                        <br /> <br />
                        <div className='labelar2'>
                            <input type="checkbox" />
                            <label htmlFor="#">I agree to the privacy policy</label>
                        </div>

                        <div className='label-btn'>
                            <button>Submit</button>
                            <p>Already have an account?</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='futer'>
                <div className='futer1'>
                    <img src="img/nav.png" alt="" />
                    <button><b>Get on Webflow</b></button>
                </div>


                <div className='second-futer'>
                    <div className='futer-a'>
                        <a href="#">Showcase</a>
                        <a href="#">Landing one</a>
                        <a href="#">Sign up</a>
                        <a href="#">Other templates</a>
                    </div>

                    <div className='futer-silka'>
                        <a href='https://www.instagram.com/husniddinov1_/'><img src="img/insta.png" alt="" /></a>
                        <a href='https://www.instagram.com/husniddinov1_/'><img src="img/tvitter.png" alt="" /></a>
                        <a href='https://t.me/husniddinov1'><img src="img/facebook.png" alt="" /></a>
                    </div>


                </div>
                <div className='liniya-img'>
                    <img src="img/liniya.png" alt="" />
                </div>


                <div className='last'>
                    <div className='last-one'>
                        <a href="#">Powered by</a>
                        <img src="img/text.png" alt="" />
                        <a href="#">Designed by</a>
                        <h4>Veljko</h4>
                    </div>

                    <div className='last-contact'>
                        <a href="https://t.me/husniddinov1"><h1>Contact</h1></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing