import { PiForkKnifeFill } from 'react-icons/pi';
import { BsCart3, BsInfoLg, BsFillPersonFill } from 'react-icons/bs';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

// Skapar interface (=gränssnitt) som definierar vilka egenskaper och datatyper som förväntas.
interface MenuLinkProps {
	linkto: string;
	icon: React.ReactNode;
	text: string;
}

// Använder React.FC<MenuLinkProps> för att ange att MenuLink är en funktionell komponent som accepterar props enligt datatypen som anges av MenuLinkProps.
const MenuLink: React.FC<MenuLinkProps> = ({ linkto, icon, text }) => {
	return (
		<div>
			<NavLink to={linkto}>
				<div>{icon}</div>
				<p>{text}</p>
			</NavLink>
		</div>
	);
};

// Ikoner för navbaren utan inloggning
const linkObjects = [
	{ icon: <PiForkKnifeFill />, text: 'Menu', to: 'menu' },
	{ icon: <BsCart3 />, text: 'Cart', to: 'cart' },
	{ icon: <BsInfoLg />, text: 'About', to: 'information' },
	{ icon: <BsFillPersonFill />, text: 'Log in', to: 'login' },
];

const NavBar = () => {
	return (
		<nav className='navbar'>
			{linkObjects.map((link) => (
				<MenuLink linkto={link.to} icon={link.icon} text={link.text} />
			))}
		</nav>
	);
};

export default NavBar;
