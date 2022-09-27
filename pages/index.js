import Script from 'next/script'
import Header from '../components/header'

export default function Home() {
  return (
    <>
   <Header/>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></Script>
    </>
  )
}
