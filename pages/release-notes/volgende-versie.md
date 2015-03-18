<properties>
	<page>
		<title>Release notes volgende versie</title>
	</page>
	<menu>
		<position>Release notes</position>
		<title>Volgende versie</title>
	</menu>
</properties>

Release notes volgende versie (nog niet uitgebracht)
===================
De volgende verbeteringen en aanpassingen zullen in de volgende versie van Hybrid SaaS beschikbaar komen

---------------------------------------------------------------------------------------------------------
**Ticket extranet**

Interne opmerking kan nu worden toegevoegd bij het aanmaken van een ticket 

![](images/tickets_interne_opmerking.jpg)

---------------------------------------------------------------------------------------------------------
**Bedrijfsagenda**

Legenda wordt nu correct weergegeven

Als je bij de de verloftype in het veld "legenda" een waarde ingeeft dan zal deze ook zichtbaar worden als je via de bedrijfsagenda het rooster exproteerd. Als het veld niet wordt gevuld, dan wordt er een nummer ingezet, en deze wordt niet in het rooster zichtbaar.  
![](images/bedrijfsagenda_legenda.jpg)  
---------------------------------------------------------------------------------------------------------


**Word Merge** - Achter een variabel kan nu /maxlength=(int) gezet worden om tekst in te korten

Het is nu mogelijk om bepaalde tekst velden in wordsjablonen een andere maximale lengte mee te geven. Dit om zelf te kunnen bepalen hoeveel tekst je wilt laten zien.

![](images/max-length.jpg)

-----------------------------------------------------------------------------------------------------------

**TICKET** 

Aanmaken van nieuw ticket.
Indien ticket voor de gebruiker is die het ticket ook heeft aangemaakt, dan wordt de status op gelezen gezet.

Ticket 1500017: actie toegewezen aan een andere gebruiker, wel een envelop (ongelezen)

Ticket 1500016: actie toegewezen aan jezelf, geeft geen envelop (ongelezen)
![](images/ongelezen-ticket.jpg)

-----------------------------------------------------------------------------------------------------------

**WINST EN VERLIES** 

Verbeterde controle op dubbele en missende factuurnummers


-----------------------------------------------------------------------------------------------------------
**CONTRACTEN**

Beperking voor negatieve aantallen, huidige data wordt geconverteerd naar negatief bedrag

-----------------------------------------------------------------------------------------------------------

**WORD MERGE**

Ticket nummer zonder beschrijving kan er bij gezet worden

-----------------------------------------------------------------------------------------------------------
**FACTUREN**

Je kunt nu meerdere facturen crediteren in 1 keer

-----------------------------------------------------------------------------------------------------------
**ABONNEMENTEN**

Je kunt abonnementen koppelen aan contracten, tevens krijg je signalering als je een contract afsluit dat er nog lopende

-----------------------------------------------------------------------------------------------------------
**TIJDREGISTRATIE**

Bij het maken van een nieuwe tijdregistratie opent het systeem automatisch de laatst gekozen methode

-----------------------------------------------------------------------------------------------------------

**PRODUCT**

Prijsmodel vreemde valuta berekening op basis van koers indien prijs is 0, keuze mogelijkheid afronden

-----------------------------------------------------------------------------------------------------------

**CONTRACTEN**

Je kan nu ook met terugwerkende kracht Details met terugwerkende kracht
![](images/contract-twk.jpg)

-----------------------------------------------------------------------------------------------------------

**FRAMEWORK**

Pijltjes voor de horizontale scrolbalk werken nu

-----------------------------------------------------------------------------------------------------------
**EXTRANET**

Bij het aanmaken van een ticket onder een klant wordt je nu teruggestuurt naar de klant overzicht pagina 

-----------------------------------------------------------------------------------------------------------
**E-MAIL VERLOF**

Indien de gebruiker een manager aan zich gekoppeld heeft wordt <noreply@hybridsaas.com> vervangen door de e-mail van de manager 
melding

-----------------------------------------------------------------------------------------------------------
**SYSTEEM**

Aanpassingen aanpassingen SPF check

-----------------------------------------------------------------------------------------------------------
**INKOOPFACTUREN**

Koppeling vanaf personen en medewerkers

-----------------------------------------------------------------------------------------------------------
**VOORRAAD**

Inventarisatie gaf een probleem op de boekdatum

-----------------------------------------------------------------------------------------------------------
**TIJDREGISTRATIE**

Te verwerken en verwerkte registraties zijn opgesplitst in facturatie en mandagen

-----------------------------------------------------------------------------------------------------------
**PRODUCTEN**

Importeren en exporteren van repeterende kosten

-----------------------------------------------------------------------------------------------------------
**GEBRUIKERS**

Je kunt op de gebruikerskaart aangeven welke herinneringen zij elke ochtend willen ontvangen

-----------------------------------------------------------------------------------------------------------
**SYSTEEM**

Als je aan het wijzigen bent in Hybridsaas is het nu mogelijk om tussen verschillende applicaties te switchen zonder dat je als je terug in hybridsaas komt eerst 2 keer moet klikken om verder te gaan met de wijziging.

-----------------------------------------------------------------------------------------------------------
**TICKET API**

Er was een fout bij het vergelijken van ID's. Als je een ticket toe wees aan je zelf handelde hij he af. Dit is verholpen

-----------------------------------------------------------------------------------------------------------
**TIJDREGISTRATIE**

Afromen van overuren tov HRM rooster

-----------------------------------------------------------------------------------------------------------
**TIJDREGISTRATIE - WERKBON**

Bij openen van een werkbon krijg je een melding als er registraties zijn zonder uurtarief, deze kun je ook via een menu item opvragen

-----------------------------------------------------------------------------------------------------------
**TIJDREGISTRATIE**

Signalering geen uurtarief terwijl dit niet is ingesteld in de project / werkcode

-----------------------------------------------------------------------------------------------------------
**TICKET**

Interne opmerking mag alleen zichtbaar zijn als je bent ingelogd als een gebruiker

-----------------------------------------------------------------------------------------------------------
**TICKET**

Controle / weergave uitleg bij status wijziging aangepast

-----------------------------------------------------------------------------------------------------------
**ROOSTER**

Koppeling met tijdregistratie

-----------------------------------------------------------------------------------------------------------
**BANK**

Automatische incasso kan nu ook B2B genereren

-----------------------------------------------------------------------------------------------------------
**FRAMEWORK**

Je kan nu ook scrollen doormiddel van naast de scollbalk te klikken

-----------------------------------------------------------------------------------------------------------
**TIJDREGISTRATIE**

Na het handmatig factureren van een tijdregistratie kwam deze nog een keer langs bi de automatische facturatie, dit komt omdat het systeem keer of er nog een termijnstaat voor moet worden gemaakt, dit is aangepast, indien er geen termijnstaat gewenst is zet het systeem meteen de vinkjes goed neer zodat de registratie niet meer in de automatische lijst te voorschijn komt

-----------------------------------------------------------------------------------------------------------
**API**

Inlezen van facturen werkt nu ook met externe referentie + factuur en afleveradressen

-----------------------------------------------------------------------------------------------------------
**PRODUCTEN - INKOOP**

Je kunt nu bij het inboeken van facturen garantiedatum en serienummer vastleggen van het product. deze kun je later bij verkoop weer koppelen zodat je weet welke inkoop bij welke verkoop hoort (alleen inkoop gedeelte is af)

-----------------------------------------------------------------------------------------------------------
**FACTUREN**

Probleem met openstaand bedrag bij crediteren en dupliceren

-----------------------------------------------------------------------------------------------------------
**API**

Met de outlook-addin kan je nu gelijk de status toewijzen

-----------------------------------------------------------------------------------------------------------
**VOORTGANG**

Meerwerk gebruikte alleen de goedgekeurde tijdregistraties

-----------------------------------------------------------------------------------------------------------
**PRODUCTEN**

Je kunt nu serienummers bijhouden van producten, dit kan via de inkoop factuur, los op het product. Op dit moment kun je alleen vanuit het product de koppeling maken met de verkoop regel

-----------------------------------------------------------------------------------------------------------
**CONTRACTEN**

Als een detailregel gefactureerd is kun je het aantal niet meer veranderen. dit moet je doen met een nieuwe detail regel, dupliceren neemt ook de detail regels mee

-----------------------------------------------------------------------------------------------------------
**VRAGENLIJSTEN**

Extra koppelingen naar tickets

-----------------------------------------------------------------------------------------------------------
**DOCUMENTSCHEMA**

Koppeling document en email layout voor contracten

-----------------------------------------------------------------------------------------------------------
**CONTRACTEN**

Je kunt nu snel het contract op scherm weergeven of printen

-----------------------------------------------------------------------------------------------------------
**CONTRACTEN**

Op scherm weergeven vanuit dialoog

-----------------------------------------------------------------------------------------------------------
**PRODUCTEN**

Merken als menu item gemaakt

-----------------------------------------------------------------------------------------------------------
**RELATIES**

Notitie tabbladen samen in 1 tab gezet
![](images/notities.jpg)

-----------------------------------------------------------------------------------------------------------
**COMPONENTS**

Meer rechten voor websites toegevoegd

-----------------------------------------------------------------------------------------------------------
**PRODUCTEN**

Merken per relatie, vanuit het merk kun je inzien welke relaties of fabrikanten die merk voeren

-----------------------------------------------------------------------------------------------------------
**EXRTRANET**

Bij het verzenden van een update (en bij het niet verzenden) van een ticket via klanten of project wordt je nu correct terug gestuurt

-----------------------------------------------------------------------------------------------------------
**CONTRACTEN**

Dupliceren detail regels + variabele looptijden weergave

-----------------------------------------------------------------------------------------------------------
**RELATIES**

Je kunt bij de koppeling van het merk op de relatiekaart een accountmanager kiezen, deze komt ook automatisch bij het tabblad accountmanagers er bij te staan ivm commissies e.d.

-----------------------------------------------------------------------------------------------------------
**TIJDREGISTRATIE**

Bij aanmaken van een registratie vanuit het ticket geeft het systeem dat een omschrijving verplicht is, dit is opgelost

-----------------------------------------------------------------------------------------------------------
