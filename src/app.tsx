import { h } from 'preact'
import { LinkButton } from './components/LinkButton'
import { Dev } from './components/Dev'
import EmailIcon from './svg/mail'
import InstagramIcon from './svg/instagram'
import GithubIcon from './svg/github'
import TwitterIcon from './svg/twitter'
import LinkedInIcon from './svg/linkedin'
import { SectionHeader } from './components/SectionHeader'

const App = () => (
  <div className="container mx-auto flex flex-col items-left py-16 px-4 max-w-md">
    <div className="py-4 flex flex-col items-center">
      <img src="./assets/profile-face.jpg" className="w-6/12" />
      <h1 className="text-2xl">Arseniy Golovine</h1>
    </div>
    <SectionHeader title="About Me" />
    <p className="text-md max-w-md">
      Hey! My name is Arseniy Golovine. I’m a Software Engineer currently living
      in Atlanta, GA. I spend my weekends either Kayaking some of the lakes
      around Atlanta or working on my side hustle Webhost Watchdog.
    </p>
    {/* <SectionHeader title="Contact Me" />
    <AddToContactsButton /> */}
    <LinkButton
      title="Email"
      href="mailto:sunny@glvn.co"
      IconComponent={EmailIcon}
    />
    <LinkButton
      title="Instagram"
      href="https://instagram.com/sgolovine"
      IconComponent={InstagramIcon}
    />
    <LinkButton
      title="Github"
      href="https://github.com/sgolovine"
      IconComponent={GithubIcon}
    />
    <LinkButton
      title="Twitter"
      href="https://twitter.com/_glvn"
      IconComponent={TwitterIcon}
    />
    <LinkButton
      title="Linkedin"
      href="https://linkedin.com/in/SunnyGolovine"
      IconComponent={LinkedInIcon}
    />
    <SectionHeader title="Devtools" />
    <Dev />
  </div>
)

export default App
