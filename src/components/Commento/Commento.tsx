import Script from "next/script";

export default function Commento() {
  return (
    <>
      <Script src={`${process.env.COMMENTO_URL}/js/commento.js`} />
      <div id="commento" />
    </>
  )
}