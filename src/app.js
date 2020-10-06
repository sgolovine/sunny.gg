import { AddToContactsButton } from "./components/AddToContactsButton";
import { LinkButton } from "./components/LinkButton";
import EmailIcon from "./svg/mail";
import InstagramIcon from "./svg/instagram";
import GithubIcon from "./svg/github";
import TwitterIcon from "./svg/twitter";
import LinkedInIcon from "./svg/linkedin";

const App = () => (
  <div className="container mx-auto flex flex-col items-left py-16 px-4 max-w-md">
    <div className="py-4 flex flex-col items-center">
      <img src="./assets/profile-face.jpg" className="w-6/12" />
      <h1 className="text-2xl">Arseniy Golovine</h1>
    </div>
    <h2 className="text-lg">About Me</h2>
    <p className="text-md max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      facilisis erat eu mollis pharetra. Integer ornare justo sed urna faucibus
      commodo. Sed ac venenatis erat. In ultricies, mi ac ornare suscipit, ipsum
      mauris sollicitudin lectus, in consequat felis ipsum nec erat. Aliquam
      ultrices nisl diam, et rhoncus justo aliquam eu. Phasellus consectetur
      gravida metus. Curabitur quis porta magna.
    </p>
    <div className="py-4">
      <h2 className="text-lg">Contact Me</h2>
    </div>
    <AddToContactsButton />
    <LinkButton
      title="Email"
      href="mailto:sunny@glvn.co"
      IconComponent={EmailIcon}
    />
    <LinkButton title="Instagram" href="#" IconComponent={InstagramIcon} />
    <LinkButton title="Github" href="#" IconComponent={GithubIcon} />
    <LinkButton title="Twitter" href="#" IconComponent={TwitterIcon} />
    <LinkButton title="Linkedin" href="#" IconComponent={LinkedInIcon} />
  </div>
);

export default App;
