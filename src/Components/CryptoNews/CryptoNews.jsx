import React from 'react';
import { Twitter, Instagram, Youtube, MessageCircle, Music, BookOpen, Eye, Zap, Briefcase } from 'lucide-react';
import '../CryptoNews/CryptoNews.css';

const CryptoNewsComponent = () => {
  const cardData = [
    { icon: Eye, title: 'Free', desc: 'Get a taste of our community, get support and join the discussions.' },
    { icon: Zap, title: 'DEXT Force', desc: 'You can access holding 1000 DEXT and verifying your wallet.' },
    { icon: Briefcase, title: 'DEXT Force Ventures', desc: 'You can access holding 100k DEXT, it includes exclusive access to our ventures and all the community deals.' }
  ];

  const socialData = [
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Youtube, name: 'Youtube' },
    { icon: MessageCircle, name: 'Telegram' },
    { icon: Music, name: 'TikTok' },
    { icon: BookOpen, name: 'Medium' }
  ];

  return (
    <div className="container">
      <div className="content">
        <h1 className="header">Get news about cryptocurrencies every day!</h1>

        <div className="main-content">
          <div className="left-section">
            <h2 className="section-title">Be part of DEXT Force community! The premium community of DEXTools</h2>
            <p className="paragraph">A group of elite traders and investors focused on DeFi. You can join now our exclusive Telegram and get all community benefits including contests, investing tips and advanced market info. There are 3 tiers:</p>
            
            <div className="flex-container">
              {cardData.map((card, index) => (
                <div key={index} className="card">
                  <h3 className="card-title">
                    <card.icon className="icon" /> {card.title}
                  </h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="right-section">
            <h2 className="section-title">Follow us on social media!</h2>
            <p className="paragraph">Follow us on social media and find all you need to know about crypto world!</p>
            
            <div className="social-media">
              {socialData.map((social, index) => (
                <div key={index} className="social-icon">
                  <social.icon className="icon" /> {social.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="disclaimer">
          All content available on our website, on hyperlinked websites, and on applications, forums, blogs, social media accounts and other platforms associated with DEXTools is intended solely to provide you with general information. We make no warranties of any kind with respect to our content, including, but not limited to, the accuracy and currency of the information. None of the content we provide should be construed as financial, legal or any other type of advice on which you may specifically rely for any purpose. Any use of or reliance you place on our content is solely at your own risk. What you should do is conduct your own research, review and analysis, and verify our content before relying on it. Trading is a high-risk activity that can result in significant losses, so you should consult with your financial advisor before making any decisions. Nothing on our site should be considered an invitation or offer to take any action
        </div>
      </div>
    </div>
  );
};

export default CryptoNewsComponent;