import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import m1 from "../media/m1.jpg"
import m2 from "../media/m2.jpg"
import m3 from "../media/m3.jpg"
import m4 from "../media/m4.jpg"

function Matkustaminen() {
    return (
        <>
            <NavBar />
            <div className="container matkustaminen">
                <h1>Matkustaminen</h1>
                <div className="textbox">
                    <h2>Kaupunki idässä</h2>
                    <p>Joensuu on Itä-Suomen helmi, ja sen saavuttaminen 
                        on vaivatonta kiitos kaupungin kattavien 
                        liikenneyhteyksien. Kaupunki sijaitsee strategisesti 
                        Pohjois-Karjalan sydämessä, ja sen yhteydet ovat 
                        monipuoliset.</p>
                    <div className="row">
                        <div className="text">
                            <h3>Maantieyhteydet</h3>
                            <p>Joensuuhun saapuminen on jouhevaa valtateiden 
                                6 ja 9 kautta. Pohjois-Suomesta, Etelä-Suomesta 
                                ja Itä-Suomesta tuleville matkustajille 
                                tarjoavat moottoritiet ja päällystetyt 
                                maantiet sujuvat ja turvalliset reitit 
                                kaupunkiin. Matka Joensuuhun tarjoaa 
                                mahdollisuuden nauttia upeista maisemista ja 
                                luonnonkauniista reiteistä.</p>
                        </div>
                        <div className="image">
                            <img src={m2} alt="Joensuun juna-asema"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="image">
                            <img src={m1} alt="IC-Juna Joensuuhun"></img>
                        </div>
                        <div className="text">
                            <h3>Junayhteydet</h3>
                            <p>VR:n junayhteydet tuovat matkustajia Joensuuhun 
                                mukavasti ja ympäristöystävällisesti. Joensuun 
                                rautatieasema palvelee matkustajia säännöllisillä 
                                junavuoroilla, jotka yhdistävät kaupungin 
                                muuhun Suomeen. Nopeiden junayhteyksien 
                                ansiosta Joensuussa voi nauttia sujuvasta 
                                matkustamisesta niin lähialueille kuin 
                                kauemmaskin.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text">
                            <h3>Bussiyhteydet</h3>
                            <p>Joensuun seudun joukkoliikenne varmistaa, 
                                että kaupunkiin on helppo saapua myös bussilla. 
                                Useat bussilinjat yhdistävät eri kaupunginosat 
                                ja lähiöt, tarjoten kätevän tavan liikkua 
                                Joensuun alueella. Lisäksi useat 
                                valtakunnalliset ja alueelliset linja-autovuorot 
                                liikennöivät Joensuuhun säännöllisesti.</p>
                        </div>
                        <div className="image">
                            <img src={m3} alt="Juna matkalla Etelä-Suomeen"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="image">
                            <img src={m4} alt="Joensuun sairaalan liikenneympyrä"></img>
                        </div>
                        <div className="text">
                            <h3>Lentoyhteydet</h3>
                            <p>Joensuun lentoasema tarjoaa mahdollisuuden saapua 
                                kaupunkiin lentäen. Säännölliset sisäiset 
                                lennot ja lentoyhteydet mahdollistavat 
                                nopean matkustamisen muista kaupungeista, 
                                kuten Helsingistä. Lentäen Joensuuhun saapuessa 
                                matkustaja voi ihailla alueen kaunista 
                                järvimaisemaa jo ennen laskeutumista.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
        
    )
}

export default Matkustaminen