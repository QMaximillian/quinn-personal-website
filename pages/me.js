import DeveloperInfo from '../components/DeveloperInfo'
import Contact from '../components/Contact'

export default function Me() {
  return (
    <>
      <div className="max-w-3xl h-full w-full flex flex-col content-end">
        <DeveloperInfo
          imgSrc="images/quinn-with-timmy.jpeg"
          imgAlt="Quinn Lashinsky holding and petting Timmy the cat"
        />
      </div>
      <Contact />
    </>
  )
}
