<properties>
	<menu>
		<position>Handleiding / Contracten</position> 
		<title>Contracten administratie</title>
	</menu>
	<page>
		<title>Contracten aanmaken</title>
		<description> Hier wordt het proces voor het beheren van een contracten beschreven. Contracten worden gebruikt om terugkerende orders en of facturen autoamtisch te verwerken. Aan de orde komen:

- Contract aanmaken
- contract genereren - per order/factuur
- contract genereren - alle orders/facturen gegroepeerd 
- contract beëindigen
	</description>
				
	</page>

</properties>

# Contract aanmaken #

**Aanmaken van een nieuw contract**

Tijdens het aanmaken van een contract zijn er 2 belangrijke zaken (tabbladen) de contract gegevens en de contractregels. Het resultaat van deze 2 kan je terugvinden in de planning. De overige tabbladen zijn informatief en ondersteunend.


**Contract gegevens** 
![](images/contract-hoofdpagina.png) 

- Entiteit
	- Dit is de administratie waar dit contract onder valt (over het algemeen wordt er met 1 entiteit gewerkt)
- Uw type
	- Je kan hier het contract type aanmerken. Dit veld is niet verplicht
- Leverancier
- Klant
	- Hier kies je de klant waarvoor het contract geldig is. Je hier een bedrijf of een particuliere klant kiezen. (één van de twee, niet beide)
- Project
- Factuuradres
	- Als het om een factuur gaat is het noodzakelijk om aan te geven waar de factuur naar toe moet. Dit is een **verplicht veld**
- Afleveradres
- Eindklant
- Eindklant adres
- E-mail adres
	- Dit emailadres wordt overgenomen uit de relatiekaart. Dit kan je per contract wijzigen.
- Afdeling
	- Hier kan je zelf een afdeling invoeren, bijvoorbeeld Financiële administratie. 
- T.a.v.
	- Hier kan je zelf een persoon of functie toevoegen, bijvoorbeeld Hoof administratie of Dhr. J. Janssen.
- Contractnummer
	- Dit is een vrij in te voeren veld. Je kan deze ook viea een volgnummer laten oplopen, dit gebeurt dan bij het opslaan.
- Omschrijving
	- Geef hier in duidelijk bewoording weer waarvoor het contract bedoeld is. Dit is een **verplicht veld**
- Externe referentie
- Weergeven in referentie
	- je kan hier kiezen welke tekst er in de contractreferentie wordt geplaatst. 
		- vinkje contract aan 
			- Referentie  | Contract {contractnummer}
		- vinkje periode aan  
			- Referentrie | {01-01-2015 t/m 31-01-2015}
		- vinkje omschrijving 
			- Referentie  | Contract : {omschrijving}
		- alle vinkjes aan    
			- Referentie  |Contract {contractnummer}: 15-8-2015  t/m  14-10-2015: contract {omschrijving
- Ingangsdatum
- Herinnering
- Laatst verlengd op
- Type uitvoer
	- hiermee geef je aan wat de output van dit contract wordt. Dit is vaak een nieuwe factuur, maar kan ook een nieuwe order, extern contract of nieuwe factuur(regels) zijn. Dit is een **verplicht veld**
- Uitstellen met
- Niet meer genereren
- Moment
	- Hier kies je het moment waarop de factuur/order wordt gegenereerd.
- Automatisch verlengen
	- Vinkje aan betekend dat het contract automatisch wordt verlengd, na dat de einddatum is bereikt.
- Ingangsdatum	
	- Datum waarop het contract ingaat.
- Dagen verschil
- 
- Aantal
- Interval
- Einddatum 
- Automatisch verlengen
- Factuurmoment
- Document schema
	- Hier kies je een document schema, dat nodig is om de output op de juiste manier te kunnen verwerken. Hier wordt aangegeven welk wordsjabloon en emailsjabloon worden gebruikt. (zie documenten schema). Dit is een **verplicht veld**
- Contractwaarde
