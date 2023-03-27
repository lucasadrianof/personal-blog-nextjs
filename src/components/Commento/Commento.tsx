import Script from 'next/script'

const { COMMENTO_URL } = process.env

export default function Commento() {
  return (
    <>
      {COMMENTO_URL && (
        <>
          <Script src={`${process.env.COMMENTO_URL}/js/commento.js`} />
          <div id="commento" />
        </>
      )}
    </>
  )
}
