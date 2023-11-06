import { BiArrowBack } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import '../styles/about.css';

export default function InformationRoute() {
    // TODO: Saknas komponent
    return (
        <div className="Information">
            <NavLink to="/menu">
                <BiArrowBack className='BiArrowBack arrow-top' />
            </NavLink>
            <header className="about-header">
                <h1 className="about-heading">
                    Fish <span className="heading-symbol about-heading">&</span> Friends
                </h1>
            </header>
            <main className='about-content-container'>
                <h2 className='about-content-heading'>
                    Fish & Friends
                </h2>
                <p className='about-restaurant'>
                    The ultimate sushi experience in Karlstad. With an experienced head chef and a knowledgeable team, they serve authentic Japanese cuisine with creative presentations. Explore our extensive menu featuring fresh ingredients and visit us in a relaxed and elegant atmosphere.
                </p> 
                <p className='contact-information'>
                    Kontakta oss för frågor på 070-432 5601. Öppettider: Alla dagar mellan 12.00-22.00
                </p>
            </main>
        </div>
    );
}
