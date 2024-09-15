import React from 'react';
import './Token.css';
import headerlogo from './Image/logo.svg';
import heroimg from './Image/benefits.webp';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiOutlineBars } from 'react-icons/ai';
import cardimg1 from './Image/easy.svg';
import cardimg2 from './Image/customizable.svg';
import cardimg3 from './Image/secure.svg';
import Tokenimage1 from './Image/list.webp';
import Tokenimage2 from './Image/socials.webp';
import Tokenimage3 from './Image/pair-explorer.webp'; 
import aboutimg from './Image/graph.webp';
import TokenHeader from './TokenHeader/TokenHeader';
import Footer from '../Layouts/Admin-Layout/Admin-Footer/AdminFooter';
import { useNavigate } from 'react-router-dom';



const Token = () => {

    const navigate = useNavigate();

  return (
    <>

        <main className="Token-Creator-main-section">
            <TokenHeader/>
            {/*############# Hero-section ############*/}
            <section className="Token-hero-section">
                <div className="Token-hero-left-container">
                    <img src={heroimg} alt="" />
                </div>
                <div className="Token-hero-right-container">
                    <div className="Token-hero-title-box">
                        <img src={headerlogo} alt="" />
                        <h2>Token Creator</h2>
                        <span>by DEXTools</span>
                    </div>
                    <div className="Token-hero-subtitle-box">
                        <h1><strong>Safety</strong> for traders.  <br />
                        <strong>Visibility</strong> for your projects.</h1>
                        <p>Create your token easily in just minutes.</p>
                    </div>
                    <div className="Token-hero-btn-box">
                        <button onClick={() => { navigate('/TokenCreationInterface') }}><HiOutlineArrowRight className="Token-hero-btn-icon" />CREATE TOKEN</button>
                        <button onClick={() => { navigate('/MyToken') }}><AiOutlineBars className="Token-hero-btn-icon" />MY TOKENS</button>
                    </div>
                    <div className="Token-hero-subtitle-box-2">
                        <h2>Secured and audited by <a href="#">CTDSEC</a></h2>
                    </div>
                </div>
            </section>

            {/*########### Token-Card-section ###########*/}
            <section className="Token-card-section">
                <div className="Token-card-title-box">
                    <span>Why with DEXTools?</span>
                    <h1>The most advanced platform to create tokens</h1>
                </div>
                <div className="Token-card-container">
                    <div className="Token-card-content-box">
                        <img src={cardimg1} alt="" />
                        <h2>Easy</h2>
                        <p>Our platform is designed to make token creation accessible
                          to everyone. From basic tokens to the more advanced.</p>
                    </div>
                    <div className="Token-card-content-box">
                        <img src={cardimg2} alt="" />
                        <h2>Customizable</h2>
                        <p>Fees, mintable or baby tokens. Our Token creator
                          allows you to create several types of tokens.</p>
                    </div>
                    <div className="Token-card-content-box">
                        <img src={cardimg3} alt="" />
                        <h2>Secure</h2>
                        <p>Only DEXTools with its audits and scores can offer
                          this secure environment that your community can rely on.</p>
                    </div>
                </div>
                <div className="Token-card-btn-box">
                    <button onClick={() => { navigate('/TokenCreationInterface') }}><HiOutlineArrowRight /> I WANT MY TOKEN</button>
                </div>
            </section>

            {/*############ image-container #############*/}
            <div className="Token-image-container">
                <div className="Token-image-title-box">
                    <h1>The visibility that your token needs in the best DeFi application</h1>
                    <span>All tokens created with our Token Creator will be
                      highlighted in our App boosting its exposure.</span>
                </div>
                <div className="Token-image-box">
                    <img src={Tokenimage1} alt="" />
                    <img src={Tokenimage2} alt="" />
                    <img src={Tokenimage3} alt="" />
                </div>
            </div>

            {/*############# About-section ############*/}
            <section className="Token-About-section">
                <div className="Token-About-left-container">
                    <img src={aboutimg} alt="" />
                </div>
                <div className="Token-About-right-container">
                    <div className="Token-About-subtitle-box">
                        <h1>Take <strong>advantage</strong> of the best Token Creator in DeFi.</h1>
                        <p>DEXTools is the world's leading DeFi app for trading.
                          Be part of our ecosystem creating your token with us.</p>
                        <p>Create and manage your tokens directly in our Token Creator. Will
                          you be the creator of the next DeFi big gem? Try out
                          and follow the steps to boost your project to the next level.</p>
                    </div>
                    <div className="Token-About-btn-box">
                        <button onClick={() => { navigate('/TokenCreationInterface') }}><HiOutlineArrowRight className="Token-About-btn-icon" />CREATE TOKEN</button>
                        <button onClick={() => { navigate('/MyToken') }}><AiOutlineBars className="Token-About-btn-icon" />MY TOKENS</button>
                    </div>
                </div>
            </section>
          <Footer/>
        </main>

    </>
  )
}

export default Token;