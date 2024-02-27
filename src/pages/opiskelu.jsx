import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import yliopisto2 from "../media/yliopisto2.jpg"
import yliopisto1 from "../media/yliopisto1.jpg"
import opiskelu1 from "../media/opiskelu1.jpg"
import opiskelu2 from "../media/opiskelu2.jpg"
import opiskelu3 from "../media/opiskelu3.jpg"
import opiskelu4 from "../media/opiskelu4.jpg"
import opiskelu5 from "../media/opiskelu5.jpg"

function Opiskelu() {

    return (
        <>
            <NavBar />
            <div className="container opiskelu">
                <h1>Opiskelu Joensuussa</h1>
                <div className="textbox">
                    <h2>Opiskelijakaupunki</h2>
                    <p>Opiskelu Joensuussa tarjoaa monipuolisia mahdollisuuksia 
                        niin korkeakoulutuksen kuin opiskelijaelämänkin saralla. 
                        Joensuussa sijaitseva Itä-Suomen yliopiston 
                        Joensuun kampus ja Karelia-ammattikorkeakoulu 
                        tarjoavat laadukasta opetusta eri aloilla.</p>
                    <h3 id="uef" onClick={() => {window.open("https://www.uef.fi/fi", "_blank")}}>Itä-Suomen yliopisto</h3>
                        <p>Itä-Suomen yliopiston Joensuun 
                            kampus tarjoaa monipuolisia opiskelumahdollisuuksia ja 
                            laadukasta tutkimusta. Joensuun kampus sijaitsee 
                            kauniin luonnon ympäröimänä, mikä luo opiskelijoille 
                            ainutlaatuisen ja rauhallisen opiskeluympäristön.</p>
                        <img src={yliopisto1} 
                            alt="Kuva Joensuun kampuksen alkukivistä"></img>
                        <div className="row">
                            <div className="text">
                                <h4>Koulutusohjelmat ja tutkimus</h4>
                                <p>Yliopistossa on laaja valikoima koulutusohjelmia, 
                                    jotka kattavat humanistiset, yhteiskuntatieteelliset, 
                                    luonnontieteelliset ja metsätieteelliset alat.</p>
                                <p>Joensuun kampuksella on vahva painotus monitieteellisessä 
                                    tutkimuksessa, ja opiskelijat voivat osallistua 
                                    kiinnostaviin projekteihin yhteistyössä alan 
                                    asiantuntijoiden kanssa.</p>
                                <p>Itä-Suomen yliopisto Joensuun kampuksen koulutusohjelmat 
                                    ovat suunniteltu tarjoamaan opiskelijoille monipuolisia 
                                    mahdollisuuksia rakentaa omaa osaamistaan, syventyä 
                                    kiinnostuksenkohteisiinsa ja valmistautua tulevaisuuden 
                                    haasteisiin. Yhdistäen korkeatasoisen opetuksen ja 
                                    laadukkaan tutkimuksen, kampus luo optimaaliset olosuhteet 
                                    opiskelijoille menestyä omalla polullaan.</p>
                            </div>
                            <div className="image">
                                <img src={yliopisto2} onClick={() => {window.open("https://www.uef.fi/fi/opiskelu", "_blank")}}
                                    alt="Joensuun kampuksen Aurora-rakennus" style={{cursor: "pointer"}}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="image">
                                <img src={opiskelu1} onClick={() => {window.open("https://kamu.uef.fi/tietopankki/", "_blank")}}
                                    alt="Kävelytie keskustasta yliopistolle" style={{cursor: "pointer"}}></img>
                            </div>
                            <div className="text">
                                <h4>Opiskelijapalvelut</h4>
                                <p>Kampuksella toimivat modernit opiskelijapalvelut, 
                                    jotka tukevat opiskelijoiden hyvinvointia ja 
                                    opintojen sujumista.</p>
                                <p>Opiskelijoilla on käytössään kirjasto, tietokoneluokat, 
                                    opiskelijaravintolat ja liikuntapalvelut, 
                                    jotka mahdollistavat monipuolisen opiskeluympäristön.</p>
                                <p>Itä-Suomen yliopisto Joensuun kampus panostaa opiskelijoidensa 
                                    hyvinvointiin ja menestykseen tarjoamalla monipuolisia 
                                    opiskelijapalveluita. Nämä palvelut ovat suunniteltu tukemaan 
                                    opiskelijoiden akateemista kehitystä, tarjoamaan käytännön 
                                    apua arjen haasteisiin sekä luomaan viihtyisän ja motivoivan 
                                    opiskeluympäristön.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text">
                                <h4>Kansainvälisyys</h4>
                                <p>Yliopisto on aktiivisesti mukana kansainvälisessä 
                                    yhteistyössä, ja opiskelijoilla on mahdollisuus 
                                    osallistua vaihto-ohjelmiin ja opiskella ulkomailla.</p>
                                <p>Kansainväliset opiskelijat ovat tervetulleita, 
                                    ja kampus tarjoaa tukea integroitumiseen uuteen 
                                    kulttuuriin.</p>
                            </div>
                            <div className="image">
                                <img src={opiskelu2} onClick={() => {window.open("https://kamu.uef.fi/tietopankki/vaihto-opiskelu-ja-kansainvalistyminen/", "_blank")}}
                                    alt="Kävelytie Pielisjoen varrella" style={{cursor: "pointer"}}></img>
                            </div>
                        </div>
                        
                    <h3 id="karelia" onClick={() => {window.open("https://www.karelia.fi/", "_blank")}}>Karelia-ammattikorkeakoulu</h3>
                        <p>Karelia-ammattikorkeakoulussa opiskelu on 
                            käytännönläheistä ja ammatillisesti suuntautunutta. 
                            Joensuun kaupungissa sijaitseva ammattikorkeakoulu 
                            tarjoaa monipuolisia koulutusohjelmia, 
                            jotka valmistavat opiskelijoita työelämän 
                            haasteisiin.</p>
                        <div className="row">
                            <div className="text">
                                <h4>Koulutusohjelmat</h4>
                                <p>Karelia-ammattikorkeakoulussa on tarjolla 
                                    koulutusohjelmia useilla eri aloilla, 
                                    kuten tekniikassa, liiketaloudessa, 
                                    terveysalalla ja kulttuurialalla.</p>
                                <p>Opiskelijat saavat mahdollisuuden kehittää 
                                    käytännön osaamistaan yhteistyössä yritysten 
                                    ja organisaatioiden kanssa.</p>
                            </div>
                            <div className="image"></div>
                        </div>
                        <div className="row">
                            <div className="image"></div>
                            <div className="text">
                            <h4>Opiskelijapalvelut</h4>
                            <p>Modernit opiskelijapalvelut tukevat 
                                opiskelijoita koko opintojen ajan. 
                                Kirjasto, tietokoneluokat ja opiskelijaravintolat 
                                ovat osa kampuksen monipuolista palveluvalikoimaa.</p>
                            <p>Karelia panostaa opiskelijoiden hyvinvointiin 
                                tarjoamalla monipuolisia tukipalveluita.</p>
                            </div>
                            
                        </div>
                        
                        <div className="row">
                            <div className="text">
                            <h4>Kansainvälisyys</h4>
                            <p>Karelia-ammattikorkeakoulu kannustaa 
                                kansainvälisyyteen ja tarjoaa mahdollisuuksia 
                                kansainväliseen vaihtoon sekä englanninkieliseen 
                                opetukseen.</p>
                            <p>Kansainväliset opiskelijat ovat tärkeä osa Karelian 
                                monikulttuurista opiskeluympäristöä.</p>
                            </div>
                            <div className="image"></div>
                        </div>
                        
                    <h3>Opiskelijaelämä</h3>
                        <div className="row">
                            <div className="text">
                                <p>Joensuu on tunnettu vilkkaasta opiskelijayhteisöstään ja 
                                    monipuolisista tapahtumistaan, jotka luovat opiskelijoille 
                                    ainutlaatuisen opiskelukokemuksen. Kaupungin rennon ilmapiirin 
                                    ansiosta opiskelijat voivat nauttia monista eri aktiviteeteista, 
                                    verkostoitua muiden opiskelijoiden kanssa ja rakentaa muistoja, 
                                    jotka säilyvät elämänmittaisesti.</p>
                                <p>Joensuussa toimii lukuisia&nbsp;
                                <a href="https://www.isyy.fi/vapaa-aika/ainejarjestot/joensuun-ainejarjestot.html">
                                opiskelijajärjestöjä</a>, 
                                jotka järjestävät monipuolisia tapahtumia aina 
                                teema-illoista urheilukilpailuihin ja 
                                kulttuuritapahtumiin.</p>
                                <p>Opiskelijat voivat liittyä erilaisiin järjestöihin 
                                ja löytää samanhenkisiä ihmisiä, 
                                jonka kanssa jakaa kiinnostuksen kohteitaan.</p>
                            </div>
                            <div className="image">
                                <img src={opiskelu3} alt="wabu ei lopu"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="image">
                                <img src={opiskelu4} alt="Pielisjoki keväällä"></img>
                            </div>
                            <div className="text">
                                <p>Joensuun rento ilmapiiri ja avoin asenne tekevät 
                                kaupungista ihanteellisen paikan opiskelijaelämälle. 
                                Kaupunki tarjoaa monipuolisia mahdollisuuksia 
                                rentoutua opintojen lomassa.</p>
                                <p>Opiskelijat voivat nauttia opiskelijaravintoloista, 
                                kahviloista ja baareista, jotka luovat rennon 
                                ympäristön ystävien tapaamiseen.</p>
                            </div>
                        </div>
                        
                    <h3>Opiskelijaystävällinen kaupunki</h3>
                    <p>Joensuu on ihanteellinen paikka opiskelulle, 
                        tarjoten opiskelijoilleen monipuolisen ja 
                        kannustavan ympäristön. Kaupungin vahva 
                        opiskelijayhteisö luo aktiivista opiskelijaelämää, 
                        jossa opiskelijat voivat osallistua erilaisiin 
                        tapahtumiin, liittyä opiskelijajärjestöihin ja 
                        nauttia monipuolisista kulttuurielämyksistä.</p>
                    <p>Yksi Joensuun opiskelijaystävällisyyden piirre on 
                        edullinen asuminen. Kaupunki tarjoaa opiskelijoille 
                        kohtuuhintaisia asumisvaihtoehtoja, kuten 
                        opiskelija-asunnot ja soluasunnot. Opiskelijat 
                        voivat myös hyödyntää edullisia opiskelijaravintoloita, 
                        jotka helpottavat arjen taloudellista taakkaa.</p>
                    <img src={opiskelu5} alt="Pielisjoki auringonlaskun aikaan"></img>
                    <p>Joensuu on kampuksiltaan kompakti kaupunki, 
                        jossa Itä-Suomen yliopiston Joensuun kampus 
                        ja Karelia-ammattikorkeakoulu sijaitsevat 
                        lähellä toisiaan. Modernit kampusalueet 
                        tarjoavat opiskelijoilleen laadukkaat opetus- 
                        ja kirjastopalvelut, sekä monipuoliset 
                        liikuntamahdollisuudet.</p>
                    <p>Luonto on olennainen osa Joensuun vetovoimaa. 
                        Kaupunki on ympäröity upealla luonnolla, 
                        joka tarjoaa mahdollisuuksia ulkoiluun, 
                        retkeilyyn ja monipuolisiin vapaa-ajan 
                        aktiviteetteihin. Joensuun turvallinen 
                        ympäristö luo opiskelijoille mahdollisuuden 
                        nauttia kaupungin tarjoamista mahdollisuuksista 
                        huolettomasti.</p>
                    <iframe id="videoembed" src="https://www.youtube.com/embed/2-fE9MDTF30?si=4423lu1d2Hd1HCVH" title="Tervetuloa opiskelemaan Joensuuhun" allowFullScreen></iframe>
                </div>
                <Footer />
            </div>
        </>
        
    )
}

export default Opiskelu