import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Opiskelijaelämää Joensuusssa</h1>
        <div className="textbox">
          <h2>Joensuu opiskelijan näkökulmasta</h2>
          <p>Tervetuloa Joensuuhun, idylliseen kaupunkiin Itä-Suomessa, 
          joka tarjoaa ainutlaatuisen ympäristön asumiselle ja opiskelulle. 
          Joensuu on tunnettu kauniista luonnostaan, 
          vilkkaasta opiskelijaelämästään ja monipuolisista 
          mahdollisuuksistaan niin opiskelijoille kuin asukkaillekin.</p>
          <p id="tip">Navigointi sivulla onnistuu sivun vasemmasta ylälaidasta aukeavasta 
          painikkeesta</p>
          <h3>Joensuu kaupunkina</h3>
          <p>Asuminen Joensuussa on miellyttävää ja monipuolista, 
          sillä kaupungissa on tarjolla erilaisia asumisvaihtoehtoja 
          aina kodikkaista kerrostaloista viehättäviin omakotitaloihin. 
          Opiskelijat voivat valita esimerkiksi opiskelija-asuntojen välillä, 
          jotka tarjoavat edullisia ja viihtyisiä 
          vaihtoehtoja lähellä kampuksia.</p>
          <a href="/asuminen/">Lisää Joensuussa asumisesta</a>
          <h3>Opiskelumahdollisuudet</h3>
          <p>Opiskelu Joensuussa on inspiroivaa ja antoisaa, 
          sillä kaupungissa sijaitsee Itä-Suomen yliopiston Joensuun kampus. 
          Yliopisto tarjoaa laadukasta opetusta ja monipuolisia 
          opiskelumahdollisuuksia eri aloilla. 
          Lisäksi Joensuussa toimii useita ammattikorkeakouluja, 
          jotka tarjoavat käytännönläheistä koulutusta eri aloilla.</p>
          <a href="/opiskelu/">Opiskelu Joensuussa</a>
          <h3>Aktiviteetit</h3>
          <p>Kaupunki on tunnettu myös monipuolisista vapaa-ajan 
          aktiviteeteistaan. Joensuussa voit nauttia upeasta luonnosta, 
          tutustua kulttuuritapahtumiin ja osallistua opiskelijoiden 
          järjestämiin tapahtumiin. Kaupungin rennon ilmapiirin ansiosta 
          opiskelijat ja asukkaat voivat helposti löytää oman 
          paikkansa yhteisössä ja rakentaa arjen iloa yhdessä.</p>
          <h3>Mitä muuta?</h3>
          <p>Tämän sivun tarkoitus on tarjota kattavaa tietoa asumisesta 
          ja opiskelusta Joensuussa. Sivusto on suunniteltu erityisesti niille, 
          jotka harkitsevat Joensuuhun muuttamista opiskelun tai asumisen vuoksi. 
          Tavoitteena on antaa käytännön vinkkejä ja tietoa, 
          joka auttaa lukijaa suunnittelemaan ja toteuttamaan asumiseen ja 
          opiskeluun liittyviä päätöksiä.</p>
        </div>
        <Footer />
      </div>
      
    </>
    
  )
}

export default App
