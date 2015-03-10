<properties>
	<page>
		<title>Domeinnaam DNS instellen</title>
		<description>Uitleg over hoe je je dns moet instellen voor gebruik van de Hybrid SaaS webshop.</description>
	</page>
	<menu>
		<position>Handleiding / Webshop</position>
		<title>Dns instellen</title>
	</menu>
</properties>


# Hoe stel ik de DNS-records in voor mijn domeinnaam? #

Om je eigen domeinnaam te koppelen aan de webshop van Hybrid SaaS dien je hiervoor <label keyword="dns">DNS-records</label> in te stellen. In essentie is dit om domeinnamen aan <label keyword="ip">ip-adressen</label> te koppelen. <label keyword="dns">DNS-records</label> zijn essentieel voor de bereikbaarheid van je domeinnaam. 

<div class="info">Om deze reden zal Hybrid SaaS nooit handmatig records aanpassen en dien je DNS wijzigingen zelf in te voeren. Dit is zodat je kan controleren of de records kloppen voordat je deze opslaat.
</div>

## Jouw domein koppelen aan Hybrid SaaS ##
Om je domein te koppelen aan jouw Hybrid SaaS-omgeving moet je een wijziging doorvoeren in je DNS-records. Het beste is om een <label>CNAME</label>-record aan te maken.

## Hoe stel ik een doorverwijzing via CNAME in? ##
In de meeste gevallen kan je provider de doorverwijzing voor je instellen. Neem dus contact op met de support van je provider. Bij sommige providers heb je zelf de mogelijkheid om zelf de instellingen aan te passen. 
 
<div class="warning">
Let op:
Als je een domein via CNAME naar je Hybrid SaaS website wilt doorverwijzen, laat dat dan ook aan onze support weten. Het domein moet namelijk ook nog in ons systeem aan jouw Hybrid SaaS-omgeving worden gekoppeld.
</div>

## Wat geef ik door aan mijn provider? ##
Met de volgende informatie kan je provider de CNAME instellen:

www.*domeinnaam.xx* **CNAME** *omgeving*.hybridsaas.com

Vervang hierbij domeinnaam.xx door de naam en de extensie van jouw domein.
Vervang *omgeving* door jouw Hybrid SaaS omgevingsnaam.
 
Nadat je de aanpassingen hebt ingevoerd, kan het tot 24 uur duren voor je domein met jouw Hybrid SaaS website is verbonden.

<div class="info">
- het domein blijft gehost bij je provider.
- de instellingen voor de domeinnaam worden aangepast, zodat bezoekers op die domeinnaam de website vinden die in Hybrid SaaS is gemaakt.
- de instellingen voor mailaccounts bij het domein veranderen niet. Je kunt je mail dus zonder verandering blijven gebruiken.
</div>