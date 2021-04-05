import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from "../styles/home.module.css"

import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
import SpotifySection from '../components/SpotifySection'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer BQDda9d7Pe-XRvAJsWCXBBYtjUiEiR29xepSbGuJId19q-EO0ZJ-IxxMSjtfViPGTNdGWKpzZchgeqjZ-A3yCkVDu7uJt5LFY0aoKLj8MO101eyKbqTCDgLXZvZ_cHVutkvP2KA0fwa3c1r6mD2pZT-OWQ");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  // const res = await fetch("https://api.spotify.com/v1/me/top/artists", requestOptions)
  // const data = await res.json();

  // const cpres = await fetch("https://api.spotify.com/v1/me/player/currently-playing", requestOptions)
  // const cpData = await cpres.json();

  return {
    props: {
      allPostsData,
      // data,
      // cpData
    }
  }
}


export default function Home({ allPostsData }) {

  // console.log(data)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm an investor at <a href="https://www.ascensionventures.com">Ascension</a> where I focus on pre-Seed investments. I also help run the <a href="https://www.debutsessions.co.uk">Debut Sessions</a>, a virtual pitch initiative aiming to democratise fundraising for pre-Seed startups.</p>
        <p>Aside from work, I'm an avid football fan (COYG) and love building things. I also love and used to make music and always love to talk music-tech.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              <small className={utilStyles.lightText}><Date dateString={date}/></small>
            </li>
          ))}
        </ul>
      </section>
      {/* {data &&
        <SpotifySection data={data} cpData={cpData}/>
      } */}
    </Layout>
  )
}