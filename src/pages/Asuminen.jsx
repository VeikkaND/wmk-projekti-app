import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import asuminen1 from "../media/asuminen1.jpg"
import asuminen2 from "../media/asuminen2.jpg"
import asuminen3 from "../media/asuminen3.jpg"

function Asuminen() {
    return (
        <>
            <NavBar />
            <div className="container asuminen">
                <h1>Asuminen</h1>
                <div className="textbox">
                    <h2>Viihtyisä ympäristö</h2>
                    <p>Joensuu tarjoaa asukkailleen viihtyisän ja 
                        monipuolisen ympäristön asua. Opiskelijoille 
                        kaupunki avaa ovensa edullisille ja käytännöllisille 
                        asumisvaihtoehdoille. Opiskelija-asunnot ja 
                        soluasunnot mahdollistavat kohtuuhintaisen asumisen, 
                        samalla tarjoten yhteisöllisen ilmapiirin.</p>
                    <img src={asuminen1} alt="Suvantosilta illalla"></img>
                    <h3>Palvelut</h3>
                    <p>Joensuu tarjoaa asukkailleen monipuolisen kirjon 
                        palveluita, jotka tekevät kaupungista houkuttelevan 
                        paikan asua ja viettää vapaa-aikaa. Opiskelijoiden 
                        ja asukkaiden arkea helpottavat käytännölliset 
                        palvelut, kuten päivittäistavarakaupat, terveyskeskukset 
                        ja apteekit, jotka ovat helposti saavutettavissa 
                        eri puolilla kaupunkia.</p>
                    <p>Kaupungin keskusta tarjoaa viihtyisiä kahviloita, 
                        ravintoloita ja kauppoja. Erityisesti toripäivinä 
                        keskustan tori herää eloon paikallisten tuottajien 
                        tarjoillessa tuoreita herkkujaan. Keskustassa 
                        sijaitsevat myös viihtyisät kirjastot, joissa 
                        asukkaat voivat nauttia rauhallisesta lukuhetkestä 
                        tai osallistua erilaisiin tapahtumiin.</p>
                    <img src={asuminen2} alt="Pielisjoen ranta kesällä"></img>
                    <p>Joensuu on myös kulttuurikaupunki, ja kaupungista 
                        löytyy useita kulttuuripalveluita. Teatteriesitykset, 
                        elokuvafestivaalit, taidegalleriat ja 
                        musiikkitapahtumat täydentävät kaupungin 
                        monipuolista kulttuuritarjontaa. Erilaiset 
                        tapahtumat ja festivaalit luovat yhteisöllisyyttä 
                        ja tarjoavat asukkaille mahdollisuuden nauttia 
                        taiteen eri muodoista.</p>
                    <p>Liikunnasta kiinnostuneille Joensuu tarjoaa hyvät 
                        mahdollisuudet harrastaa eri lajeja. Kaupungissa 
                        on urheiluhalleja, kuntosaleja ja liikuntakeskuksia, 
                        jotka tarjoavat vaihtoehtoja kaiken tasoisille 
                        liikkujille. Lisäksi Joensuun upeat luontokohteet 
                        tarjoavat mahdollisuuksia ulkoiluun, retkeilyyn 
                        ja monenlaisiin ulkoilma-aktiviteetteihin.</p>
                    <img src={asuminen3} alt="Pyhäselkä"></img>

                    <h3>Julkinen liikenne</h3>
                    <p>Joensuun kaupunki tarjoaa asukkailleen ja 
                        vierailijoilleen kätevän ja tehokkaan julkisen 
                        liikenteen järjestelmän. Kaupungin sisällä toimiva 
                        bussiverkosto mahdollistaa vaivattoman liikkumisen 
                        eri puolilla Joensuuta ja sen lähialueita.</p>
                    <p>Bussiliikennettä hoitaa Joensuun seudun joukkoliikenne, 
                        joka ylläpitää monipuolisia reittejä ja aikatauluja 
                        palvellakseen erilaisten matkustajien tarpeita. 
                        Kaupunkialueella bussireitit kattavat tärkeimmät 
                        liikenneyhteydet, kuten kampukset, keskustan, 
                        asuinalueet ja palvelupisteet.</p>
                    <p>Opiskelijat hyötyvät erityisesti julkisen liikenteen 
                        tarjoamista mahdollisuuksista. Useat bussireitit 
                        kulkevat suoraan Itä-Suomen yliopiston Joensuun 
                        kampukselle ja Karelia-ammattikorkeakoulun tiloihin, 
                        mikä tekee opiskelijoiden päivittäisistä siirtymistä 
                        helpoiksi. Lisäksi joukkoliikenteen avulla opiskelijat 
                        voivat liikkua vaivattomasti kaupungin eri osissa ja 
                        hyödyntää kaupungin monipuolisia palveluita.</p>
                    <p>Lisäksi Joensuussa on käytössä Waltti-liikennekortti, 
                        joka mahdollistaa matkustamisen kätevästi ilman 
                        käteistä rahaa. Liikennekortin avulla matkustajat 
                        voivat ladata bussimatkansa etukäteen ja hyödyntää 
                        erilaisia alennuksia ja etuja.</p>
                </div>
                <Footer />
            </div>
            
        </>
        
    )
}

export default Asuminen