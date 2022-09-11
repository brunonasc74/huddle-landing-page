import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIncons.styled';

const SocialIcons = () => {
	return (
		<StyledSocialIcons>
			<li>
				<a href='#'>
					<FaTwitter />
				</a>
			</li>
			<li>
				<a href='#'>
					<FaFacebook />
				</a>
			</li>
			<li>
				<a href='#'>
					<FaLinkedin />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export default SocialIcons;
